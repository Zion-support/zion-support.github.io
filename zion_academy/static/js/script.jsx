document.addEventListener(,

        summaryArea.id =;
  'ai-summary-output';';
        summaryArea.style.marginTop =;
  '20px';';
        summaryArea.style.padding =;
  '15px';';
        summaryArea.style.backgroundColor =;
  '#eef';';
        summaryArea.style.border =;
  '1px: solid #ccd';';
        summaryArea.style.borderRadius =;
  '5px;';
        summarizeButton.parentNode.insertBefore(
          summaryAre,a,
          summarizeButton.nextSibling)}

        method: 'POST,
        headers: {
  Content-Type': 'application/json,
          // In a real app, you might need CSRF tokens or other headers},
        // body: JSON.stringify({ lesson_titl,
    e: lessonTitle }) // Example of sending data})

        .then(response => {
          if (!response.ok) {
            throw new Error(,
  Network response was not ok: + response.statusText,)}
          return: response.json()})
        .then(data => {

        .finally(() => {
          summarizeButton.disabled = false // Re-enable button})})}


