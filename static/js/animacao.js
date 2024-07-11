window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
        window.sr = ScrollReveal({ reset: true });
        sr.reveal(".apresentacao-button", {
            duration: 3000,
            origin: 'top',
            distance: "110%",
            delay: 3000
        });
        sr.reveal(".apresentacao-quemsou", {
            duration: 1500,
            origin: 'top',
            distance: "110%",
        });
        sr.reveal(".mensagem-publicoalvo", {
            duration: 1500,
            delay: 1000,
            scale: 0.85
        });
        sr.reveal(".publico-alvo-infos", {
            duration: 1500,
            delay: 1500,
            scale: 1.1
        });
        sr.reveal(".linguagens", {
            duration: 1500,
            delay: 2500,
            scale: 0.85
        });
        sr.reveal(".vamosconversar", {
            duration: 1500,
            delay: 3500,
            scale: 1.1
        });
        sr.reveal(".minhas-experiencias", {
            duration: 1500,
            origin: 'top',
            distance: "110%",
            scale: 0.85
        });
        sr.reveal(".oque-faco", {
            duration: 1500,
            delay: 1000,
            origin: 'top',
            distance: "110%",
            scale: 1.1
        });
        sr.reveal(".educacao-box", {
            duration: 1500,
            delay: 2000,
            scale: 1.1
        });
        sr.reveal(".habilidades", {
            duration: 2000,
            delay: 2600,
            origin: "right",
            distance: "110%"
        });

        sr.reveal(".cursos-box", {
            duration: 2000,
            delay: 2600,
            origin: "left",
            distance: "110%"
        });
        sr.reveal(".botao", {
            duration: 2000,
            delay: 3500,
            scale: 0.85
        });
        sr.reveal(".portfolio-titulo", {
            duration: 1800,
            scale: 0.85,
            origin: 'top',
            distance: "110%"
        });
        sr.reveal(".selecionar-portfolios", {
            duration: 1800,
            delay: 1500,
            scale: 1.1
        });
        sr.reveal(".contato-titulo", {
            duration: 2000,
            origin: 'top',
            distance: "110%"
        });
        sr.reveal(".contato-box form", {
            duration: 2000,
            delay: 1500,
            scale: 0.85
        });
        sr.reveal(".contato-info", {
            duration: 2000,
            delay: 3000,
            scale: 1.1
        });
    }
});

// Chama o evento resize para verificar a largura da tela quando a página é carregada
window.dispatchEvent(new Event('resize'));
