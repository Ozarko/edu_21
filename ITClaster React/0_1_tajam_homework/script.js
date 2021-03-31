// Все що тут знаходиться це експеремент ніколи до цього не реалізовував слайдери.

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('main-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

const navbar = document.getElementById('navbar');
let scrolled = false;
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'none';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

const dots = document.querySelectorAll('.tajem__showcase-dots-dot');
const slide = document.querySelectorAll('.tajem__showcase-box');

function showSlide(slide, curentIndex) {
  slide.forEach((sli, slideIndex) => {
    if (slideIndex === curentIndex) {
      sli.classList.add('active');
    } else {
      sli.classList.remove('active');
    }
  });
}

let curentIndex = 0;

function slideShow(dots, slide) {
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      dot.classList.add('active');
      curentIndex = dotIndex;
      showSlide(slide, curentIndex);
      dots.forEach((dot, dotIndex) => {
        if (curentIndex != dotIndex) {
          dot.classList.remove('active');
        }
      });
    });
  });
  setInterval(() => {
    dots.forEach((dot, dotNumber) => {
      if (dotNumber === curentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
    showSlide(slide, curentIndex);
    curentIndex++;
    if (curentIndex === 4) {
      curentIndex = 0;
    }
  }, 10000);
}

slideShow(dots, slide);

const feadbacksSlide = document.querySelectorAll(
  '.tajem__feadbacks-slider-slide'
);
const customersImg = document.querySelectorAll(
  '.tajem__feadbacks-slidebox-customers-customer'
);

const leftChevron = document.querySelector('#leftChevron');
const rightChevron = document.querySelector('#rightChevron');

let currentSlide = 2;

function showFeadSlide(currentSlide, domNode1, domNode2) {
  domNode1.forEach((el, ind) => {
    if (currentSlide === ind) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  domNode2.forEach((el, ind) => {
    if (currentSlide === ind) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

leftChevron.addEventListener('click', () => {
  if (currentSlide <= 4 && currentSlide > 0) {
    currentSlide--;
    showFeadSlide(currentSlide, feadbacksSlide, customersImg);
  } else {
    currentSlide = 4;
    showFeadSlide(currentSlide, feadbacksSlide, customersImg);
  }
});

rightChevron.addEventListener('click', () => {
  if (currentSlide < 4 && currentSlide >= 0) {
    currentSlide++;
    showFeadSlide(currentSlide, feadbacksSlide, customersImg);
  } else {
    currentSlide = 0;
    showFeadSlide(currentSlide, feadbacksSlide, customersImg);
  }
});

const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const massage = document.getElementById('massege');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'tajem__contact-form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'tajem__contact-form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, subject, massage]);
  checkLength(username, 3, 15);
  checkLength(subject, 3, 25);
  checkEmail(email);
  checkLength(massage, 3, 300);
});
