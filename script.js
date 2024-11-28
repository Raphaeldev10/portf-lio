
const projects = [
    {
        title: "Sistema de Gestão",
        description: "Aplicação para organizar suas tarefas diárias.",
        image: "https://dourasoft.com.br/wp-content/uploads/2024/06/sistema-de-gestao.jpeg",
        link: "https://github.com/Raphaeldev10/Sistemas"
    },
    {
        title: "Galeria de Imagens Dinâmicas",
        description: "Galeria de imagens com visual moderno.",
        image: "https://kinsta.com/pt/wp-content/uploads/sites/3/2020/05/plugins-galeria-fotos-wordpress.jpeg",
        link: "https://github.com/Raphaeldev10/Galeria"
    },
    {
        title: "Aplicativo de Culinária",
        description: "Aplicativo para receitas deliciosas e fáceis.",
        image: "https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-pizza-food-app-icon-with-a-slice-on-it-vector-png-image_6910377.png",
        link: "https://github.com/Raphaeldev10/aplicativo"
    }
];


const projectList = document.getElementById("project-list");


projects.forEach(project => {
    const projectItem = `
        <div class="project">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="btn">Ver Projeto</a>
            </div>
        </div>
    `;
    projectList.innerHTML += projectItem;
});
