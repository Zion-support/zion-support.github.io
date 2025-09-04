<<<<<<< HEAD

export const api = {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)}
    return response.json()}, async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',';
      headers: {';';
        'Content-Type': 'application/json', },
      body: JSON.stringify(data), })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)}
    return response.json()}
}';
"`"';';
=======
export const api = { async get(url) { const response = await fetch(url); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()},async post(url,data) { const response = await fetch(url,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSON.stringify(data),}) if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} return response.json()} } "`"
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
