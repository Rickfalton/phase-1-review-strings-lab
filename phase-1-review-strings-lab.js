const currentUser = 'Grace Hopper';

// Create a welcome message using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Convert the welcome message to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting using the first character of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Example usage
console.log(welcomeMessage); // "Welcome to Flatbook, Grace Hopper!"
console.log(excitedWelcomeMessage); // "WELCOME TO FLATBOOK, GRACE HOPPER!"
console.log(shortGreeting); // "Welcome, G!"
