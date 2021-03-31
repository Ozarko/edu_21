const currencyElement_one = document.getElementById('currency-one');
const currencyElement_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap')

function calculate() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
}

currencyElement_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyElement_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)
swap.addEventListener('click', () => {
  const temp = currencyElement_one.value;
  currencyElement_one.value = currencyElement_two.value;
  currencyElement_two.value = temp;
  calculate();
})
calculate();