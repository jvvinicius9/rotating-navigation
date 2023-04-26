const open = document.getElementById('open')
const close = document.getElementById('close')
const conntainer = document.querySelector('.container')

open.addEventListener('click', () => conntainer.classList.add('show-nav'))

close.addEventListener('click', () => conntainer.classList.remove('show-nav'))
