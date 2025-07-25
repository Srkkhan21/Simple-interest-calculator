const mainDiv = document.getElementById('main');
const outputDiv = document.getElementById('outputMain');
const form = document.getElementById('calculator');
const againBtn = document.getElementById('submit_again');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let principal1 = Number(document.getElementById('principal').value)
    let time1 = Number(document.getElementById('time').value)
    let rate1 = Number(document.getElementById('rate').value)

    let timeunit = document.getElementById('timeselector').value
    if (timeunit === 'month') time1 = time1 / 12;
    else if (timeunit === 'day') time1 = time1 / 365;

    let siintrest = Number((principal1 * time1 * rate1) / 100)
    let finalamount = principal1 + siintrest;

    document.getElementById('p_amt').innerText = "₹ " + principal1;
    document.getElementById('t_int').innerText = "₹ " + siintrest.toFixed(2);
    document.getElementById('t_amt').innerText = "₹ " + finalamount.toFixed(2);

    // Animate transition
    mainDiv.classList.add('fade-out');
    setTimeout(() => {
        mainDiv.classList.add('hidden');
        mainDiv.classList.remove('fade-out');

        outputDiv.classList.remove('hidden');
        outputDiv.classList.add('fade-in', 'active');

        // Remove class after animation finishes to avoid stack
        setTimeout(() => outputDiv.classList.remove('fade-in'), 500);
    }, 500);
});

againBtn.addEventListener('click', function () {
    outputDiv.classList.add('fade-out');
    outputDiv.classList.remove('active');

    setTimeout(() => {
        outputDiv.classList.add('hidden');
        outputDiv.classList.remove('fade-out');

        mainDiv.classList.remove('hidden');
        mainDiv.classList.add('fade-in');

        setTimeout(() => mainDiv.classList.remove('fade-in'), 500);
    }, 500);
});