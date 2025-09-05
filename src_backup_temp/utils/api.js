<<<<<<< HEAD:src/utils/api.js
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! "status": "${response.status"}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ "method": 'POST',"headers": "{ 'Content-Type': 'application/json'"},"body": "JSON.stringify(data)"}) if (!response.ok) { throw new Error(`HTTP error! "status": "${response.status"}`)} return response.json()} } "`"
=======
<<<<<<< HEAD
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: &apos;POST&apos;,headers: { &apos;Content-Type&apos;: &apos;application/json&apos;,},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} }; &quot;`&quot;;
=======
>>>>>>> main
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
<<<<<<< HEAD
}';
"`"';';
=======
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} } "`"
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
};
"`";
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} }; "`";
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main:src_backup_temp/utils/api.js
