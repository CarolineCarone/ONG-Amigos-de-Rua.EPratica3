const formulario = document.getElementById('formularioCadastro');
const mensagemSucesso = document.getElementById('mensagemSucesso');

if (formulario && mensagemSucesso) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        mensagemSucesso.textContent = 'Cadastro enviado com sucesso!';
        mensagemSucesso.style.display = 'block';
        
        formulario.reset();

        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
            mensagemSucesso.textContent = '';
        }, 3000); 
    });
} else {
    console.error("Formulário ou elemento de mensagem não encontrado!");
}
