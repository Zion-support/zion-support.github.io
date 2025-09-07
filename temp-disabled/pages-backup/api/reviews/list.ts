
    if (!targetType || !targetId) {
      return res.status(400).json({ error: "Missing targetType or targetId" });
    }
    if (targetType !== "talent" && targetType !== "client") {
      return res.status(400).json({ error: "Invalid targetType" });
    }


  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
  }
}
