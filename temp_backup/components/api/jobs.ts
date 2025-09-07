 
}try {
  const jobs = (await fs.pathExists (JOBS FILE) ) ? await fs.readJSON (JOBS FILE) : [];
return res.status (200) .json ({
  jobs 
}) 
}catch (e) {
  
}
}