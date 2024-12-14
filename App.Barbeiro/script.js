document.addEventListener("DOMContentLoaded", function() {
    const splash = document.getElementById('splash');
    const content = document.getElementById('content');

    // Define um tempo para a splash screen aparecer
    setTimeout(() => {
        splash.classList.add('hidden'); // Adiciona a classe para desvanecer
        setTimeout(() => {
            splash.style.display = 'none'; // Oculta completamente após a animação
            content.style.display = 'block'; // Exibe o conteúdo principal
        }, 600); // Tempo deve ser igual ao da transição CSS
    }, 5000); // Tempo que a splash screen ficará visível
});