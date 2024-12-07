/*Interação que aparece quando a pessoa não preenche o formulário*/
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
        alert("Preencha este campo.");
    
});
