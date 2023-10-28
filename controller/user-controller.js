import { userServices } from "../service/user-service.js";

(function () {
    const containerProjects = document.getElementById('projects__list');

    const createProjects = (project) => {
        const card = document.createElement('li');
        if (project.id % 2 === 0) {
            card.classList.add('projects__list__name', 'reverse');
        } else {
            card.classList.add('projects__list__name');
        }
        const content = `
            <img src=${project.image} alt=${project.title} class="projects__img">
                <div class="projects__text">
                    <h3 class="text__subtitle">${project.title}</h3>
                    <p class="text__description">${project.description}</p>
                    <div class="button__container">
                        <a href=${project.repository} target="_blank"
                                        class="text__button">Repository<span class="overlay"></span></a>
                        <a href=${project.web} target="_blank"
                                        class="text__button">Play Demo<span class="overlay"></span></a>
                    </div>
                </div>
    `;

        card.innerHTML = content;

        return card;
    }

    (async () => {
        try {
            const data = await userServices.listProjects();
            data.forEach(project => {
                const newCard = createProjects(project);
                containerProjects.appendChild(newCard);
            });
        } catch (error) {
            console.log(error);
        }
    })();

})();