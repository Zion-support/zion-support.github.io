 try {
  const tx = handleAction (userId, action, metadata);
return res.status (200) .json ({
  tx 
}) 
}catch (err: any) {
  return res.status (400) .json ({
  error: err.message 
}) 
}
}