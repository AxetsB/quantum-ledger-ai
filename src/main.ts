// This is our main TypeScript file for Quantum Ledger AI.
// We will write the interactive logic for our website here.

/**
 * A simple function to greet a user and log a message to the console.
 * @param name The name of the person to greet.
 */
function greet(name: string): void {
    // console.log is a command that prints messages to the browser's developer console.
    // Developers use this to see if their code is running as expected or to find errors.
    console.log(`Hello, ${name}! Welcome to Quantum Ledger AI - your future of finance.`);
}

// document.addEventListener is a way to make our code run when something specific happens on the web page.
// 'DOMContentLoaded' means "when the entire HTML document is loaded and ready to be interacted with."
document.addEventListener('DOMContentLoaded', () => {
    // Call our greet function when the page is ready.
    // We are passing the text "Valued Client" as the 'name' argument.
    greet("Valued Client");
});

// This is just a starting point. We'll add more powerful AI-driven logic later!