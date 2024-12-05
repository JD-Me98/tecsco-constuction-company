const getStoredData = () => {
    const data = JSON.parse(localStorage.getItem('ClientData')) || [];
    return data;
};

// Function to save data to localStorage
const saveData = (data) => {
    localStorage.setItem('ClientData', JSON.stringify(data));
};

// Function to render data on the page
function renderData() {
    const storedData = getStoredData();
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data

    if (storedData.length === 0) {
        dataContainer.innerHTML = '<p>No data available.</p>';
        return;
    }

    storedData.forEach((entry) => {
        // Create a div for each entry
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('data-item');
        itemDiv.innerHTML = `
            <h3>Message Id: ${entry.id}</h3>
            <p><strong>Name:</strong> ${entry.name}</p>
            <p><strong>Email:</strong> ${entry.email}</p>
            <p><strong>Message:</strong> ${entry.message}</p>
            <button class="delete-btn" data-id="${entry.id}">Delete</button>
        `;
        dataContainer.appendChild(itemDiv);
    });

    // Attach event listeners to delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            const confirmed = window.confirm('Are you sure you want to delete this entry?');
            if (confirmed) {
                deleteEntry(id);
            }
        });
    });
}

// Function to delete an entry by ID
function deleteEntry(id) {
    const storedData = getStoredData();
    const updatedData = storedData.filter(entry => entry.id !== id);
    saveData(updatedData);
    renderData();
}

// Initial rendering of the data
renderData();