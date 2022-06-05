const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')
let sum = '';

buttons.forEach(item => {
    console.log(item.id)
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
            sum = ''
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
            sum = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'equal') {
            display.innerText = eval(sum)
        } else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!'
            sum = ''
            setTimeout(() => {
                display.innerText = ''
            }, 2000);
        } else if (item.id === '/') {
            display.innerText += '÷'
            sum += '/'
        } else if (item.id === '*') {
            display.innerText += '×'
            sum += '*'
        } else {
            display.innerText += item.id
            sum += item.id
        }

    }
});

const themeToggleBtn = document.querySelector('.theme-toggler')
const calculator = document.querySelector('.calculator')
//const toggleIcon = document.querySelector('.toggler-icon')
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark')
    themeToggleBtn.classList.toggle('active')
    isDark = !isDark
}