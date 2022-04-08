const toggle = document.querySelector('#toggle')
const prices = document.querySelectorAll('.price')

toggle.addEventListener('change', () => {
    prices.forEach(price => {
        price.classList.toggle('convert')
    });
})
