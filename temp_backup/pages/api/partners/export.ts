 return res.status (200) .send (csv);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
}catch (e: any) {
  return res.status (500) .json ({
  error: e?.message 
}) 
}
}