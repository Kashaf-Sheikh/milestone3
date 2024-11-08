console.log('Script Loaded');

const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Log input values to console
    console.log(name, email, phone, education, experience, skills);

    // Generate resume content
    const resumeHtml = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    } else {
        console.log('Script Loaded');
        }
    });