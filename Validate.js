function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let resume = document.getElementById("resume").value.trim();
    let jobTitle = document.getElementById("jobtitle").value.trim();
    let startDate = document.getElementById("startdate").value.trim();
    let message = document.getElementById("message").value.trim();

    let employment = document.querySelector('input[name="employment"]:checked');
    let relocate = document.querySelector('input[name="relocate"]:checked');
    let interests = document.querySelectorAll('input[name="interest"]:checked');

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (resume === "") {
        alert("Please upload your resume.");
        return false;
    }

    if (jobTitle === "") {
        alert("Please select a job title.");
        return false;
    }

    if (startDate === "") {
        alert("Please choose an available start date.");
        return false;
    }

    if (!employment) {
        alert("Please select an employment type.");
        return false;
    }

    if (interests.length === 0) {
        alert("Please select at least one area of interest.");
        return false;
    }

    if (!relocate) {
        alert("Please select whether you are willing to relocate.");
        return false;
    }

    if (message === "") {
        alert("Please explain why you are suitable for this role.");
        return false;
    }

    return true;
}