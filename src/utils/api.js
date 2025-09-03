
<<<<<<< HEAD
export const api = {async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)}
    return response.json()}, async post(url, data) {const response = await fetch(url, {
=======
export const api = {
  async get(url) {}}
    const;const;const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)}
<<<<<<< HEAD
    return response.json()},
  
  async post(url, data) {}
    const response = await fetch(url, {
      method: &apos;POST&apos;,
      headers: {
        &apos;Content-Type&apos;: &apos;application/json&apos;,
      },
      body: JSON.stringify(data),
    })
=======
    return response.json()}, async post(url, data) {
    const response = await fetch(url, {
>>>>>>> main
      method: 'POST',
<<<<<<< HEAD
      headers: {""
=======
<<<<<<< HEAD
      headers: {
>>>>>>> main
        'Content-Type': 'application/json', },
      body: JSON.stringify(data), })
<<<<<<< HEAD
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
=======
>>>>>>> main
    if (!response.ok) {
=======
      headers: { Content-Type': 'application/json', },
      body: JSON.stringify(data), })
    if (!response.ok) {`
>>>>>>> main
      throw new Error(`HTTP error! status: ${response.status}`)}
>>>>>>> main
    return response.json()}
<<<<<<< HEAD
}
';'
=======
}"`"
"`"`
>>>>>>> main
