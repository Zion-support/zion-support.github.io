  }
}
  }
}


    const fs = require ('fs'),
    if () {) {
  $2
}
      const content = fs.readFileSync (file_path, 'utf8');
      return JSON.parse (content);
    }
  } catch (error) {

  }
}







  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;




  const all = await readAllDisputes();
  all && all.push(dispute);
  await writeAllDisputes(all);
}


  return path && path.join(UPLOADS_ROOT, caseId);



export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;




