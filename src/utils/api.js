
export const api = {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)}
    return response.json()}, async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
<<<<<<< HEAD
      headers: {
        'Content-Type': 'application/json', },
      body: JSON.stringify(data), })
    if (!response.ok) {
=======
      headers: { Content-Type': 'application/json', },
      body: JSON.stringify(data), })
    if (!response.ok) {`
>>>>>>> main
      throw new Error(`HTTP error! status: ${response.status}`)}
    return response.json()}
}"`
"`"`