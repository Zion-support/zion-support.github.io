export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! "status": "${response.status"}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ "method": 'POST',"headers": "{ 'Content-Type': 'application/json'"},"body": "JSON.stringify(data)"}) if (!response.ok) { throw new Error(`HTTP error! "status": "${response.status"}`)} return response.json()} } "`"
<<<<<<< HEAD
=======
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: &apos;POST&apos;,headers: { &apos;Content-Type&apos;: &apos;application/json&apos;,},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} }; &quot;`&quot;;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
export const api = {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! "status": ${response.status}`)}
    return response.json()}, async post(url, data) {
    const response = await fetch(url, {
      "method": 'POST',
      "headers": {
        'Content-Type': 'application/json'},
      "body": JSON.stringify(data)})
    if (!response.ok) {
      throw new Error(`HTTP error! "status": ${response.status}`)}
    return response.json()}
}';
"`"';';
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} } "`"
};
"`";
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} }; "`";