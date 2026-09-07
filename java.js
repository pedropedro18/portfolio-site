    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    function marcarLinkAtivo(){
        let atual='';
        sections.forEach(secao =>{
            const topo = secao.offsetTop - 50;
            const altura = secao.offsetHeight;
            if (window.scrollY >= topo && window.scrollY < topo +altura){
                atual = secao.getAttribute('id');
                }
                });
                navLinks.forEach(link => {
              link.classList.remove('active');
        if (link.getAttribute('href') === `#${atual}`){
            link.classList.add('active');
            }


            });
}
            navLinks.forEach(link =>{
                link.addEventListener('click', ()=>{
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active')
});
});

window.addEventListener('scroll', marcarLinkAtivo);

