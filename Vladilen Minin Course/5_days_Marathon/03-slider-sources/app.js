const container = document.querySelector('.container')
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll('div').length

const sidebar = document.querySelector(".sidebar");

sidebar.style = `top:-${(slideCount - 1) * 100}vh`;

let acctiveSlideIndex = 0

const changeSlide = (direction) => {
  if(direction === 'up') {
    acctiveSlideIndex++
    if(acctiveSlideIndex === slideCount) {
      acctiveSlideIndex = 0
    }
  }else if(direction === 'down') {
    acctiveSlideIndex--;
    if (acctiveSlideIndex < 0) {
      acctiveSlideIndex = slideCount - 1
    }
  }
  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${acctiveSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${acctiveSlideIndex * height}px)`
}

upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide("down");
})

