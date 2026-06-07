document.addEventListener("DOMContentLoaded", () => {
    const btnPaleta = document.getElementById("btn-paleta");
    const menuCores = document.getElementById("menu-cores");

    
    const temaSalvo = localStorage.getItem("temaSelecionado");
    if (temaSalvo) {
        aplicarCoresDoTema(temaSalvo);
    }

    if (btnPaleta && menuCores) {
        btnPaleta.addEventListener("click", (e) => {
            e.stopPropagation();
            menuCores.classList.toggle("mostrar");
        });
    }

    document.addEventListener("click", () => {
        if (menuCores) menuCores.classList.remove("mostrar");
    });
});

function mudarTema(tema) {
   
    aplicarCoresDoTema(tema);
    
    localStorage.setItem("temaSelecionado", tema);
}


function aplicarCoresDoTema(tema) {
    const root = document.documentElement;

    if (tema === 'padrao') {
        root.style.setProperty('--background', '#FFFDF1');
        root.style.setProperty('--color1', '#1D2A10');
        root.style.setProperty('--color2', '#8DA432');
        root.style.setProperty('--color3', '#FFFFFF');
        root.style.setProperty('--color5', '#351903');
    } 
    else if (tema === 'outono') {
        root.style.setProperty('--background', '#F9F4EB');
        root.style.setProperty('--color1', '#04303B'); 
        root.style.setProperty('--color2', '#B33A0B'); 
        root.style.setProperty('--color3', '#FFFFFF');
        root.style.setProperty('--color5', '#392019');
    } 
    else if (tema === 'escuro') {
        root.style.setProperty('--background', '#FFFDF1'); 
        root.style.setProperty('--color1', '#191917');      
        root.style.setProperty('--color2', '#ED8900');      
        root.style.setProperty('--color3', '#EFECE1');      
        root.style.setProperty('--color5', '#392019');      
    }
}