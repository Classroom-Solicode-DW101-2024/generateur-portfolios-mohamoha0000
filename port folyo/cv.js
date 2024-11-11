
// Function to display student info
function displayStudentInfo(student) {
    document.getElementById('student-name').textContent = student.nom+" "+student.prenom;
    document.getElementById('student-email').textContent = `Email: ${student.email}`;
    document.getElementById('student-phone').textContent = `Phone: ${student.telephone}`;
    document.getElementById('student-group').textContent = `Group: ${student.groupe}`;
}

// Function to display projects
function displayProjects(projects) {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = ''; // Clear existing projects
    
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.projectTitle;

        const projectLink = document.createElement('a');
        projectLink.href = project.githubLink;
        projectLink.target = "_blank";
        projectLink.textContent = "View on GitHub";
        
        const skills = document.createElement('p');
        skills.classList.add('skills');
        skills.textContent = `Skills: ${project.skills.join(', ')}`;

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = `Date: ${project.date}`;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectLink);
        projectDiv.appendChild(skills);
        projectDiv.appendChild(date);

        projectsList.appendChild(projectDiv);
    });
}
function convertToPDF() {
    const element = document.getElementById('cv-container');  // Get the HTML element to be converted to PDF

    const options = {
        margin:       1,
        filename:     'document.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();  // Convert HTML to PDF and download
}
// Initialize the page with student information and projects
student = new Student()
student.loadFromLocalStorage()
displayStudentInfo(student);
displayProjects(student.projects);
