const $getElbyId = el => document.getElementById(`${el}`)

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    const element = $getElbyId(input)
    if (element.value.trim() === '') {
      showError(element, ` is required`);
    } else {
      showSuccess(element);
    }
  });
}


$getElbyId("form").addEventListener('submit', function(event) {
  event.preventDefault();
  checkRequired(['username', 'email', 'password', 'password2']);
})

function showError(input, massage) {
  const $formControl = input.parentElement;
  $formControl.className = 'form-control error';
  const $small = $formControl.querySelector('small');
  $small.innerText = massage;
}

function showSuccess(input) {
  const $formControl = input.parentElement;
  $formControl.className = 'form-control success';
}
