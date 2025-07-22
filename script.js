document.addEventListener("DOMContentLoaded", function() {

    // Seleciona todos os elementos que devem ter a animação de fade-in
    const elementsToAnimate = document.querySelectorAll('.service-card, .feature-item, .logos-container, .stat-item, .approach-content, .contact-form-wrapper, .about-us-content h2, .about-us-content p, .faq-item');

    // Adiciona a classe de estado inicial a todos eles
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in-element');
    });

    // Configura o Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela (intersecting)
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' para iniciar a animação
                entry.target.classList.add('is-visible');
                
                // Opcional: Para de observar o elemento depois que a animação ocorreu uma vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Inicia a observação em cada um dos elementos selecionados
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});

// --- CONTROLE DO BOTÃO "VOLTAR AO TOPO" ---
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // Mostra o botão se o usuário rolou mais de 300 pixels
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
