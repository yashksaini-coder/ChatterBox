document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const usersList = document.querySelectorAll('.users-list');
        searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        usersList.forEach(function(user) {
            const username = user.querySelector('.username').textContent.toLowerCase();
            if (username.includes(searchTerm)) {
            user.style.display = '';
            } else {
            user.style.display = 'none';
            }
        });
        });
    } else {
        console.error("Element with id 'searchInput' not found");
    }
    });
    function handleClick(event) {
        let clickedDiv = event.target.closest('.users-list');
        let hiddenInputValue = clickedDiv.querySelector('#hide').value;
        let a=document.getElementById("hide").value;
        a=hiddenInputValue;
        console.log(hiddenInputValue);
        
        // Optionally, you can make an AJAX request to Flask here with hiddenInputValue
        // Example using fetch:
        fetch('/process_hidden_value', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: hiddenInputValue }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response from Flask:', data);
            // Handle response as needed
        })
        .catch(error => {
            console.error('Error sending data to Flask:', error);
            // Handle errors
        });
    }