const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('animated', 'pulse');
  });

  item.addEventListener('animationend', () => {
    item.classList.remove('animated', 'pulse');
  });
});
metamaskButton.addEventListener('click', () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      alert('Пожалуйста, установите MetaMask!');
    }
  });