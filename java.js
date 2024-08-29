const links = document.querySelectorAll('nav a');
const conteudo = document.getElementById('conteudo');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Carregando o conteúdo dinamicamente (exemplo com fetch)
        fetch(link.href)
            .then(response => response.text())
            .then(data => {
                conteudo.innerHTML = data;
            });
    });
});