const newComment = async (event) => {
    event.preventDefault();

  const description = document.querySelector('#comment').value.trim();

  if (description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/project');
    } else {
      alert('Failed to add comment');
    }
  }
};


document
.querySelector('comment-form')
.addEventListener('submit', newComment);