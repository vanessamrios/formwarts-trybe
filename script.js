const button = document.querySelector('#button');
const textLogin = 'tryber@teste.com';
const textPassword = '123456';
button.addEventListener('click', () => {
  const inputLogin = document.querySelector('#input-login');
  const text = inputLogin.value;
  const inputPassword = document.querySelector('#input-password');
  const password = inputPassword.value;
  if (text === textLogin && password === textPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
