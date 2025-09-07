
  }
  try {
    const localPath = path.join(process.cwd(), "data", "homepage.json");
    if (fs.existsSync(localPath)) {
      const local = JSON.parse(fs.readFileSync(localPath, "utf-8"));
      return res.status(200).json(local);
    }
  } catch {
    // fall back to remote
  }

  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}
