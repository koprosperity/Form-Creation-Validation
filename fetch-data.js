// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch Data Using try-catch
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul'); // Create a <ul> element

        users.forEach(user => {
            const li = document.createElement('li'); // Create a <li> element
            li.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(li); // Append the <li> to userList
        });

        dataContainer.appendChild(userList); // Append userList to dataContainer

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
