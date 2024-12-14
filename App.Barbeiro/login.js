const inputs = document.querySelectorAll('input');
const erros = document.querySelectorAll('.erro');
const welcomeSection = document.getElementById('welcome');
const userNameDisplay = document.getElementById('userName');

function validaNome() {
    if (inputs[0].value.length < 3) {
        erros[0].style.display = 'block';
        inputs[0].classList.add('invalido');
        return false;
    } else {
        erros[0].style.display = 'none';
        inputs[0].classList.remove('invalido');
        return true;
    }
}
inputs[0].addEventListener('input', validaNome);

function validaEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(inputs[1].value)) {
        erros[1].style.display = 'block';
        inputs[1].classList.add('invalido');
        return false;
    } else {
        erros[1].style.display = 'none';
        inputs[1].classList.remove('invalido');
        return true;
    }
}
inputs[1].addEventListener('input', validaEmail);

function validaSenha() {
    const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!senhaRegex.test(inputs[2].value)) {
        erros[2].style.display = 'block';
        inputs[2].classList.add('invalido');
        return false;
    } else {
        erros[2].style.display = 'none';
        inputs[2].classList.remove('invalido');
        return true;
    }
}
inputs[2].addEventListener('input', validaSenha);

function confirmarSenha() {
    if (inputs[3].value !== inputs[2].value) {
        erros[3].style.display = 'block';
        inputs[3].classList.add('invalido');
        return false;
    } else {
        erros[3].style.display = 'none';
        inputs[3].classList.remove('invalido');
        return true;
    }
}
inputs[3].addEventListener('input', confirmarSenha);

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nomeValido = validaNome();
    const emailValido = validaEmail();
    const senhaValida = validaSenha();
    const senhasCorretas = confirmarSenha();

    if (nomeValido && emailValido && senhaValida && senhasCorretas) {
        // Se todas as validações forem bem-sucedidas
        const nomeUsuario = inputs[0].value; // Captura o nome do usuário
        userNameDisplay.textContent = nomeUsuario; // Exibe o nome na tela de boas-vindas
        
        // Oculta a seção de login e mostra a seção de boas-vindas
        document.querySelector('.login').style.display = 'none';
        welcomeSection.style.display = 'block';
    }
});

document.querySelector('.ocultado').addEventListener('click', () => {
    const tipoAtual = inputs[2].getAttribute('type');
    const tipo = tipoAtual === 'password' ? 'text' : 'password';
    
    document.querySelector('.ocultado').innerHTML = tipoAtual === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
    
    inputs[2].setAttribute('type', tipo);
});
