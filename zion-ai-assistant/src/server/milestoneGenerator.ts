 const body = {
  model: "gpt-4o-mini", messages: [ {
  role: "system", content: system 
};
{
  role: "user", content: `INPUT:\n$ {
  JSON.stringify (user, null, 2) 
}\n\nReturn JSON object: {
  \"milestones\": [ {
  title, description, suggestedDueDateIso, estimatedEffortHours 
}] 
}` 
}];
temperature: 0.3 
}as any;
const resp = await fetch ("https://api.openai.com/v1/chat/completions", {
  method: "POST", headers: {
  "Content-Type": "application/json", Authorization: `Bearer $ {
  OPENAI API KEY 
}` 
};
body: JSON.stringify (body) 
}return milestones 
}
}