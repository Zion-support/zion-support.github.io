#!/usr/bin/env python3
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('integration',ROOT/'scripts/check-satellite-release-integration.py')
x=importlib.util.module_from_spec(spec);spec.loader.exec_module(x)

class Integration(unittest.TestCase):
 def setUp(self):
  self.temp=tempfile.TemporaryDirectory();self.root=Path(self.temp.name)/'repo';self.root.mkdir()
  self.home=('prefix\r\n'+x.OBSOLETE_COMMENT+'\r\n'+'\r\n'.join(old for old,new in x.HOME_EDITS)+'\r\n<a href="/plans/">Plans</a>\r\n<script>const keep=true;</script>').encode()
  (self.root/'public').mkdir();(self.root/'public/index.html').write_bytes(self.home)
  candidate=self.home
  for old,new in x.HOME_EDITS:candidate=candidate.replace(old.encode(),new.encode(),1)
  candidate=candidate.replace(x.OBSOLETE_COMMENT.encode(),b'',1);self.home_candidate=candidate
  self.manifest={'schema':x.SCHEMA,'reviewOnly':True,'homepageBeforeGitBlob':x.git_blob(self.home),'homepageCandidateGitBlob':x.git_blob(self.home_candidate),'files':[]}
  for i,path in enumerate(sorted(x.TARGETS)):
   before=('before-'+str(i)).encode();after=('after-'+str(i)).encode()
   p=self.root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(before)
   snap=self.root/x.DEPENDENCIES/path;snap.parent.mkdir(parents=True,exist_ok=True);snap.write_bytes(after)
   self.manifest['files'].append({'target':path,'gitBlob':x.git_blob(after),'sourcePR':71595,'sourceCommit':'a'*40,'allowedBeforeGitBlobs':[x.git_blob(before),x.git_blob(after)]})
  self.write_manifest()
 def tearDown(self):self.temp.cleanup()
 def write_manifest(self):
  (self.root/x.DEPENDENCIES/'manifest.json').write_text(json.dumps(self.manifest))
 def test_verified_lease_and_dependencies(self):
  self.assertEqual(len(x.preflight(self.root,x.read_manifest(self.root))),5)
 def test_integrated_candidate_is_accepted_without_rewriting_source(self):
  for row in self.manifest['files']:(self.root/row['target']).write_bytes((self.root/x.DEPENDENCIES/row['target']).read_bytes())
  (self.root/'public/index.html').write_bytes(self.home_candidate)
  self.assertEqual(len(x.preflight(self.root,self.manifest)),5)
  stage=Path(self.temp.name)/'candidate';stage.mkdir();x.copy_inputs(self.root,stage);x.stage_dependencies(self.root,stage,self.manifest)
  self.assertEqual((stage/'public/index.html').read_bytes(),self.home_candidate)
 def test_changed_snapshot_rejected(self):
  row=self.manifest['files'][0];(self.root/x.DEPENDENCIES/row['target']).write_text('tampered')
  with self.assertRaisesRegex(ValueError,'blob mismatch'):x.preflight(self.root,self.manifest)
 def test_changed_target_rejected(self):
  (self.root/'public/discovery/index.html').write_text('newer concurrent work')
  with self.assertRaisesRegex(ValueError,'Concurrent source'):x.preflight(self.root,self.manifest)
 def test_changed_home_rejected(self):
  (self.root/'public/index.html').write_bytes(self.home+b'new')
  with self.assertRaisesRegex(ValueError,'Concurrent homepage'):x.preflight(self.root,self.manifest)
 def test_exact_privacy_and_comment_patch_preserves_rest(self):
  result=x.reconcile_home(self.home,self.manifest).decode();expected=self.home.decode()
  for old,new in x.HOME_EDITS:expected=expected.replace(old,new,1)
  expected=expected.replace(x.OBSOLETE_COMMENT,'',1)
  self.assertEqual(result,expected);self.assertEqual(x.reconcile_home(self.home_candidate,self.manifest),self.home_candidate);self.assertIn('<script>const keep=true;</script>',result)
  self.assertNotIn('FGV',result);self.assertNotIn(x.OBSOLETE_COMMENT,result)
 def test_home_missing_or_duplicate_matches_rejected(self):
  for bad in [self.home.replace(x.OBSOLETE_COMMENT.encode(),b''),self.home+x.OBSOLETE_COMMENT.encode(),self.home+x.HOME_EDITS[0][0].encode()]:
   with self.assertRaises(ValueError):x.reconcile_home(bad,self.manifest)
 def test_scope_cannot_grow_silently(self):
  self.manifest['files'][0]['target']='secrets.txt';self.write_manifest()
  with self.assertRaisesRegex(ValueError,'scope'):x.read_manifest(self.root)
 def test_review_flag_required(self):
  self.manifest['reviewOnly']=False;self.write_manifest()
  with self.assertRaisesRegex(ValueError,'review-only'):x.read_manifest(self.root)
 def test_unsafe_paths_rejected(self):
  for rel in ['../outside','/tmp/outside']:
   with self.assertRaises(ValueError):x.checked_path(self.root,rel)
 def test_symlink_source_rejected(self):
  p=self.root/'symlink';p.symlink_to(self.root/'public',target_is_directory=True)
  with self.assertRaises(ValueError):x.checked_path(self.root,'symlink/index.html')
 def test_staging_preserves_every_source_byte(self):
  before=x.public_fingerprint(self.root/'public')
  stage=Path(self.temp.name)/'staged';stage.mkdir();x.copy_inputs(self.root,stage);x.stage_dependencies(self.root,stage,self.manifest)
  self.assertEqual(x.public_fingerprint(self.root/'public'),before)
  for row in self.manifest['files']:self.assertEqual(x.git_blob((stage/row['target']).read_bytes()),row['gitBlob'])
  self.assertEqual((self.root/'public/index.html').read_bytes(),self.home)
 def test_failed_command_remains_failed_with_log(self):
  stage=Path(self.temp.name);r=x.run_step('negative',['python3','-c','raise SystemExit(7)'],stage,stage,{})
  self.assertEqual(r['exitCode'],7);self.assertEqual(r['status'],'failed');self.assertTrue((stage/'negative.log').exists())

if __name__=='__main__':unittest.main(verbosity=2)
