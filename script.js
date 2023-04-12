const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animated', 'pulse');
  });

  item.addEventListener('animationend', () => {
    item.classList.remove('animated', 'pulse');
  });
});
async function connect() {
  try {
    // запрашиваем подключение к кошельку MetaMask
    await window.ethereum.enable();
    // Если пользователь подключился, выводим его адрес кошелька
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const address = accounts[0];
    alert(`Connected to MetaMask with address: ${address}`);
  } catch (error) {
    console.error(error);
  }
}