const form = document.getElementById('myForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      body: new FormData(form),
    });

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    const data = await response.json();

    console.log('Success:', data);
    alert('Form submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  }
});

