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
const textArea = document.getElementById('textarea');
function limiteCaracteres() {
  const span = document.getElementById('counter');
  const textAreaFuncao = document.getElementById('textarea');
  const total = textAreaFuncao.value.length;
  span.innerText = caracteres - total;
}
textArea.addEventListener('input', limiteCaracteres);
