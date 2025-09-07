subject: string;
  html: string;
  text: string;
}

  to: string;
  subject: string;
  body: string;
}

export async function sendWarningEmail(
  payload: WarningEmailPayload
): Promise<void> {
  const logDir = path.resolve(process.cwd(), 'data/fraud');
  const logPath = path.join(logDir, 'emails.log');
  await fs.ensureDir(logDir);
  const line = `[${new Date().toISOString()}] toUserId=${payload.toUserId} to=${payload.toAddress |'unknown'} subject=${payload.subject} body=${payload.body}\n`;
  await fs.appendFile(logPath, line, 'utf8');
origin/cursor/automate-test-improve-and-merge-code-2533