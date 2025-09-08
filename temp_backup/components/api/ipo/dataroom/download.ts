  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${path.basename(fullPath)}"`
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
