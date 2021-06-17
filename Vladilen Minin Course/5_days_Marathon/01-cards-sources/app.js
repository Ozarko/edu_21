const cards = [
  {
    id: 1,
    title: "Be free",
    image:
      "https://images.unsplash.com/photo-1611708314849-8bb91fe0fa56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Know that you are loved",
    image:
      "https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Feel Support",
    image:
      "https://images.unsplash.com/photo-1522700373732-73f561debf0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 4,
    title: "Be happy",
    image:
      "https://images.unsplash.com/photo-1566513875272-0e184c92b77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 5,
    title: "Enjoy the Life",
    image:
      "https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const container = document.querySelector(".container");

const createDomCard = (card) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.id = card.id;
  slide.style = `background-image: url(${card.image})`;
  const title = document.createElement("h3");
  title.innerText = card.title;
  slide.appendChild(title);
  return slide;
};

const createCards = (DOMCards) => {
  DOMCards.forEach((DOMCard) => {
    DOMCard.addEventListener("click", (event) => {
      DOMCards.forEach((cardInDOM) => {
        if (event.target.id === cardInDOM.id) {
          container.style = `background-image: ${cardInDOM.style.backgroundImage}`;
          cardInDOM.classList.add("active");
        } else if (cardInDOM.classList.contains("active")) {
          cardInDOM.classList.remove("active");
        }
      });
    });
    container.appendChild(DOMCard);
  });
};

const createShow = (DOMCards) => {
  setInterval(() => {
    let currentSlide = DOMCards.indexOf(
      DOMCards.find((card) => card.classList.contains("active"))
    ) || 0 
    if (currentSlide < DOMCards.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    DOMCards[currentSlide].classList.add("active");
    container.style = `background-image: ${DOMCards[currentSlide].style.backgroundImage}`;
    DOMCards[currentSlide === 0 ? 4 : currentSlide - 1].classList.remove(
      "active"
    );
  }, 2500);
};

const slider = () => {
  const DOMCards = cards.map((card) => createDomCard(card));
  createCards(DOMCards);
  createShow(DOMCards);
};

slider();
