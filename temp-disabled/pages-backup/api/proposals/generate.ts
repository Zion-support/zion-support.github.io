
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Failed to generate proposal" });
  }
}
