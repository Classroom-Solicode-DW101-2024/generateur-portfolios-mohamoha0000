class Projet {
    constructor(projectTitle, githubLink, skills, date) {
        this.projectTitle = projectTitle;
        this.githubLink = githubLink;
        this.skills = skills;
        this.date = date;
    }
}

class Student {
    constructor(nom="", prenom="", email="", telephone="", groupe="", projects=[]) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.groupe = groupe;
        this.projects = projects;
    }
    saveToLocalStorage() {
        const data = JSON.stringify(this);
        localStorage.setItem('student', data);
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem('student');
        if (data) {
            const parsedData = JSON.parse(data);
            this.nom = parsedData.nom;
            this.prenom = parsedData.prenom;
            this.email = parsedData.email;
            this.telephone = parsedData.telephone;
            this.groupe = parsedData.groupe;
            this.projects = parsedData.projects;
            return this;
        }
        return null;
    }}