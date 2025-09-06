 const fallback = () => {
  return res.status (200) .json ({
  questions: [ {
  question: `Which topic is central to $ {
  moduleTitle 
}?`;
options: ['Random OpsZion OS missionUnrelated financeLegacy ERP'];
answerIndex: 1 
};
if (!apiKey) return fallback ();
const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini';
messages: [ {
  role: 'system', content: 'You are an expert course designer for founders.' 
};
{
  role: 'user', content: prompt 
}];
temperature: 0.2 
});
const text = completion.choices?.[0]?.message?.content ?? '';
try {
  const json = JSON.parse (text);
return res.status (200) .json (json) 
}catch {
  return fallback () 
}
}catch (err) {
  return fallback () 
}
}