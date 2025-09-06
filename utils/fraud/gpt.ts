 const completion = await client.chat.completions.create ({
  model: process.env.FRAUD GPT MODEL || 'gpt-4o-mini', messages: [ {
  role: 'system', content: systemPrompt 
};
{
  role: 'user', content: userPrompt 
}];
temperature: 0;
}
}