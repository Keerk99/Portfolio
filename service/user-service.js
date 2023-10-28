const urlProjects = "https://projects-api-gold.vercel.app/proyectos";

const listProjects = () => fetch(urlProjects).then(response => response.json());

export const userServices = {
    listProjects
}