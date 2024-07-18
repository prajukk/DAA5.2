function addCertificate() {
    const container = document.getElementById('certificates-container');
    const newCertificate = document.createElement('div');
    newCertificate.classList.add('certificate');
    newCertificate.innerHTML = `
        <input type="text" placeholder="Certificate Title" class="cert-title">
        <input type="text" placeholder="Issuing Organization" class="cert-organization">
        <input type="date" class="cert-date">
        <textarea placeholder="Description" class="cert-description"></textarea>
        <button onclick="removeElement(this)">Remove Certificate</button>
    `;
    container.appendChild(newCertificate);
}

function addProject() {
    const container = document.getElementById('projects-container');
    const newProject = document.createElement('div');
    newProject.classList.add('project');
    newProject.innerHTML = `
        <input type="text" placeholder="Project Title" class="project-title">
        <textarea placeholder="Project Description" class="project-description"></textarea>
        <input type="url" placeholder="Project Demo URL" class="project-url">
        <label for="project-video">Upload Project Video:</label>
        <input type="file" class="project-video" accept="video/*">
        <button onclick="removeElement(this)">Remove Project</button>
    `;
    container.appendChild(newProject);
}

function removeElement(element) {
    element.parentElement.remove();
}