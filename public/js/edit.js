const editButtonHandler = async (event) => {
    event.preventDefault();
    const editname = document.querySelector('#eproject-name').value.trim();
    const editneeded_funding = document.querySelector('#eproject-funding').value.trim();
    const editdescription = document.querySelector('#eproject-desc').value.trim();
  
    if(event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute ('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ editname, editneeded_funding, editdescription }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/edit');
      } else {
        alert('Failed to edit project');
      }
    }
  };

  document
  .querySelector('editbtn')
  .addEventListener('click', editButtonHandler);