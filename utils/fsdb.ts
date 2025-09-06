

    }
  } catch (error) {
    console.error('Error reading file:', error);
=======

  await writeAllDisputes(all);
  } catch (error) {

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });

    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}

  return path && path.join(UPLOADS_ROOT, caseId);


export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

=======



}
=======

export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
