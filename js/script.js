welcomeMessage();

/// Function to prompt user for their name and display a welcome message
function welcomeMessage() {
    /// Prompt the user to enter their name
    let userName = prompt("Please enter your name:");

    /// If the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName = "Guest";
    }

    /// Update the welcome message on the webpage
    document.getElementById("welcome-speech").innerText = "Howdy, " + userName + "!";
}

/// Function to validate the message form (to be implemented)
function validateForm() {

}

function upop() {
    let tulisan = document.getElementById("message").value;
    alert("Your Message:\n\n" + tulisan);
}

function welcomeMessage() {
    document.getElementById("nameModal").classList.remove("hidden");
}

function saveName() {
    let userName = document.getElementById("nameInput").value.trim();
    if (!userName) userName = "Guest";
    document.getElementById("welcome-speech").innerText = "Howdy, " + userName + "!";
    document.getElementById("nameModal").classList.add("hidden");
}
