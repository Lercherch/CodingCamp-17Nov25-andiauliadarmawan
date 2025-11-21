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

function showPreview() {
    let nama = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("message").value;
    let tgl = document.getElementById("birthdate").value;


    let genderEl = document.querySelector('input[name="gender"]:checked');
    let gender = genderEl ? genderEl.value : "";

    document.getElementById("previewNama").innerText = nama;
    document.getElementById("previewEmail").innerText = email;
    document.getElementById("previewGender").innerText = gender;
    document.getElementById("previewTgl").innerText = tgl;
    document.getElementById("previewPesan").innerText = pesan;
}

// time
function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleString("en-US", {
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("previewTime").innerText = timeString;
}

setInterval(updateTime, 1000);

updateTime();

