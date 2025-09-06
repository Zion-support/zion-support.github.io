
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}

}

export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}

}

