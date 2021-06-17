const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

const dragover = (event) => {
  event.preventDefault()
};
const dragenter = (event) => {
  event.target.classList.add('hovered')
};
const dragleave = (event) => {
  event.target.classList.remove("hovered");
};
const drop = (event) => {
  console.log(event.target)
  event.target.classList.remove("hovered");
  event.target.append(item)
};

placeHolders.forEach(palceHolder => {
  palceHolder.addEventListener("dragover", dragover);
  palceHolder.addEventListener("dragenter", dragenter);
  palceHolder.addEventListener("dragleave", dragleave);
  palceHolder.addEventListener("drop", drop);
})

item.addEventListener('dragstart', (event)=> {
  console.log('drag start')
  event.target.classList.add('hold')
  setTimeout(()=> {
    event.target.classList.add("hide");
  },0)
})

item.addEventListener("dragend", (event) => {
  console.log("drag end");
  event.target.className = 'item'
});

