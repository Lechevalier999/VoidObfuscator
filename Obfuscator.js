let userInput = prompt("Input code to obfuscate")

async function sendData() {
  const url = 'https://example.com';
  const data = {code: userInput};
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // convert object to string
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Success:', result);
    } else {
      console.error('Server error:', response.status);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

sendData();
