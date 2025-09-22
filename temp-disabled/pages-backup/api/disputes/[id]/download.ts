

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, fileName } = req.query as { id?: string; fileName?: string };
  if (
    !id ||
    !fileName ||
    typeof id !== "string" ||
    typeof fileName !== "string"
  ) {
    return res.status(400).json({ error: "Invalid parameters" });
  }

