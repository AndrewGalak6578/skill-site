const Web3 = require('web3');

// Создание экземпляра Web3
const web3 = new Web3(window.ethereum);
const menuItems = document.querySelectorAll('.menu a');
const connectMetamaskButton = document.querySelector('.connect-metamask');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animated', 'pulse');
  });

  item.addEventListener('animationend', () => {
    item.classList.remove('animated', 'pulse');
  });
});
async function connectMetamask() {
  try {
    // Проверяем, есть ли Metamask
    if (typeof window.ethereum === 'undefined') {
      throw new Error('Metamask is not installed.');
    }

    // Подключаем Metamask
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Место для вашего кода, который будет выполняться после успешного подключения к Metamask
  } catch (error) {
    console.error(error);
    alert('Failed to connect to Metamask. Please make sure it is installed and try again later.');
  }
}

if (typeof window.ethereum !== 'undefined') {
  connectMetamaskButton.style.display = 'block';
  connectMetamaskButton.addEventListener('click', connectMetamask);
} else {
  connectMetamaskButton.style.display = 'none';
}