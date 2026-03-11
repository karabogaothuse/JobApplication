function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let resume = document.getElementById("resume").value.trim();
    let message = document.getElementById("message").value.trim();

    let employment = document.querySelector('input[name="employment"]:checked');
    let relocate = document.querySelector('input[name="relocate"]:checked');
    let interests = document.querySelectorAll('input[name="interest"]:checked');

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        resume === "" ||
        !employment ||
        interests.length === 0 ||
        !relocate ||
        message === ""
    ) {
        alert("Please fill in every field before submitting.");
        return false;
    }

    return true;
}