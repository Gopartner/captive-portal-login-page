// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        postalCode: document.getElementById('postalCode').value
    };

    // Send data to the Flask server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // SweetAlert for success
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: data.message,
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6'
            });
        } else {
            // SweetAlert for error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#d33'
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong!',
            confirmButtonText: 'Close',
            confirmButtonColor: '#d33'
        });
    });
}

// Add event listener for form submission
document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);
                                          
