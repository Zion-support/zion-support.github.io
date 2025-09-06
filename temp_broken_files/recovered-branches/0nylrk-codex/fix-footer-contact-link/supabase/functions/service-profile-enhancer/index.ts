 interface ServiceProfileData {
  name: string;
title: string;
bio: string;
services?: string[];
location: string 
}try {
  //CORS headers 
}const reqData = await req.json ();
const providerData = reqData.providerData as ServiceProfileData;
return new Response (JSON.stringify ({
  if (!apiKey) {
  return new Response (JSON.stringify ({
  error: "OpenAI API key not configured" 
});
{
  headers, status: 500 
}) 
}const prompt = ` You are an expert in creating professional service profiles. Based on the following information about a service provider, create: 1. A concise yet compelling professional summary (max 250 words) 2. A list of 5-10 specific services they could offer based on their description temperature: 0.7;
max tokens: 800 
}) 
});
return new Response (JSON.stringify ({
  error: "Failed to generate enhanced profile content";
details: responseData 
});
{
  headers, status: 500 
}) 
}try {
  const content = responseData.choices[0].message.content;
const parsedContent = JSON.parse (content);
return new Response (JSON.stringify ({
  summary: parsedContent.summary;
services: parsedContent.services 
});
{
  headers, status: 200 
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  error: "Failed to parse AI response";
raw: responseData.choices[0]?.message?.content 
});
{
  headers, status: 500 
}) 
}
}catch (error) {
  return new Response (JSON.stringify ({
  error: "Internal server error" 
});
{
  headers: {
  "Content-Type" : "application/json";
"Access-Control-Allow-Origin" : "*" 
};
}) 
}
});
