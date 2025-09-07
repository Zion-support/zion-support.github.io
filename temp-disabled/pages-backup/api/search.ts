
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || "Search failed" });
  }
}
