 conversations[idx].messages.push (msg);
conversations[idx].updatedAtIso = now;
writeJsonFile<Conversation[]> (FILE, conversations);
}res.setHeader ('AllowGET, POST');
res.status (405) .end ('Method Not Allowed') 
}