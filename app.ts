// listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event) {
    event.preventDefault();


    // type asserction
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){  
        
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
// piture element
const profilePicturefile = profilePictureInput.files?.[0]
const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';

    // Create resume output
    const resumeOutput = `
    ${profilePictureURL? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">`:"" }
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </P>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>phone number:</strong> ${phone}
    
    <h3>Education</h3>
    <p>${education}</P>
    
    <h3>Experince</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('the resume output element are missing')
    }
    } else {
        console.error('one or more output element are missing')
    }
})