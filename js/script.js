const randomnumber = Math.round(Math.random() * 10);
let cont = 1;
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const bnt1 = document.querySelector('#bnttry');
const bnt2 = document.querySelector('#bntreset');


function handck(event) {
    event.preventDefault();
    const inputnumber = document.querySelector('#inputbox');
    if (inputnumber.value == randomnumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        screen2.querySelector('h1').innerText = `Parabens Acertou em ${cont} Tentativas`

    }
    cont++
};
bnt1.addEventListener('click', handck);
bnt2.addEventListener('click', function () {
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
    cont = 1;
})
