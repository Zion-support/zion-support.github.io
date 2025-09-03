

    const response = await fetch(url);
    if (!response.ok) {;
      throw new Error(`HTTP error! status: ${response.status}`)}

      },
      body: JSON.stringify(data,) })

      method: 'POST',

        'Content-Type': 'application/json' },
      body: JSON.stringify(data) })

    if (!response.ok) {



      throw new Error(`HTTP error! status: ${response.status}`)}

    return response.json()}



