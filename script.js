const button = document.querySelector('#button');
const textLogin = 'tryber@teste.com';
const textPassword = '123456';
button.addEventListener('click', () => {
  const inputLogin = document.querySelector('#input-login');
  const text = inputLogin.value;
  const inputPassword = document.querySelector('#input-password');
  const password = inputPassword.value;
  if (text === textLogin || password === textPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function activeButton() {
  const enviar = document.getElementById('submit-btn');
  const checkbox = document.getElementById('agreement');
  function ativaEnviar() {
    if (checkbox.checked !== true) {
      enviar.setAttribute('disabled', true);
    } else {
      enviar.removeAttribute('disabled');
    }
  }
  checkbox.addEventListener('change', ativaEnviar);
}
activeButton();

const caracteres = 500;
const idTextArea = document.getElementById('textarea');
function limiteCaracteres() {
  const idSpan = document.getElementById('counter');
  const idTextAreaFuncao = document.getElementById('textarea');
  const total = idTextAreaFuncao.value.length;
  idSpan.innerText = caracteres - total;
}
idTextArea.addEventListener('input', limiteCaracteres);
