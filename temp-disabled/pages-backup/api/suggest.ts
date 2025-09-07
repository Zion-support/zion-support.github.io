
  }

  const { q = "" } = req.query;
  const query = String(q).toLowerCase();

  if (!query) {
    return res.status(200).json({ suggestions: SAMPLE_QUERIES.slice(0, 5) });
  }

  const suggestions = SAMPLE_QUERIES.filter((s) =>
    s.toLowerCase().includes(query),
  ).slice(0, 5);

  return res.status(200).json({ suggestions });
}
