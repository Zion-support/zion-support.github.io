 dispute.attachments.push ({
  id: `$ {
  Date.now () 
}-$ {
  safeName 
}`;
fileName: safeName;
fileSize: buffer.length;
mimeType: f.mimeType || 'application/octet-stream';
path: filePath;
uploadedAt: now;
uploadedByUserId: user.id 
}) 
}
}res.setHeader ('AllowPOST');
return res.status (405) .end ('Method Not Allowed') 
}
}