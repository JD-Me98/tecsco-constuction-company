  // Function to generate unique ID
  function generateId() {
    return Date.now().toString();
}

// Function to get stored data from localStorage
const getStoredData = () => {
    const data = JSON.parse(localStorage.getItem('ClientData')) || [];
    return data;
};

// Function to save data to localStorage
const saveData = (data) => {
    localStorage.setItem('ClientData', JSON.stringify(data));
};

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mssg').value;

    const newEntry = {
        id: generateId(),
        name: name,
        email: email,
        message: message
    };

    // Retrieve existing data and add new entry
    const storedData = getStoredData();
    storedData.push(newEntry);

    // Save updated data to localStorage
    saveData(storedData);

    // Show success message
    alert('Your message has been saved successfully!');

    // Clear form after submission
    document.getElementById('contactForm').reset();
});