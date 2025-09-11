

  const metaPath = path.join(dataDir, id, 'meta.json');
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const next = updater({ ...current, updatedAt: new Date().toISOString() });
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}


    const metaPath = path.join(dataDir, id, 'meta.json');
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}


    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {return null;
  }
}
export function savePdf(id: string, pdfBytes: Uint8Array): string {ensureDirs();
    markdownPath?: string,;
    jsonPath?: string,;
    pdfPath?: string,;
    ipfsCid?: string,;
    ensRecordHash?: string,;
    signature?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));
  return `/proposals/${id}/proposal.pdf`;
}
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
