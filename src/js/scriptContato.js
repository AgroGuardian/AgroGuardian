document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.getElementById("formulario");
    const notificacao = document.getElementById("notificacao");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputNome = document.getElementById("nome");
        const inputEmail = document.getElementById("email");
        const inputMensagem = document.getElementById("mensagem");

        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            notificacao.innerHTML = "Preencha todos os campos!";
            notificacao.style.background = "#e53935"; 
            
            notificacao.classList.add("mostrar");
        } else {

            notificacao.innerHTML = "Mensagem enviada com sucesso!";
            notificacao.style.background = "#43a047"; 

            notificacao.classList.add("mostrar");

            inputNome.value = "";
            inputEmail.value = "";
            inputMensagem.value = "";
        }

        setTimeout(() => {
            notificacao.classList.remove("mostrar");
        }, 3000);
    });

});