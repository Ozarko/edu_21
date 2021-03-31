// Basic structure

// (function() {
  // Declare private vars and functions

//   return {
    // Declare public var and function
//   }
// })();

// Standart Module Pattern
// const UICtrl = (function(){
//   let text = 'Hello Nazarko'
//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }
//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text)
//     }
//   }
// })()

// UICtrl.callChangeText();

// Reveling Module Pattern

const ItemCtrl = (function() {
  let data = [];
  function add(item) {
    data.push(item)
    console.log('Item added')
  }

  function get(id) {
    return data.find(item => item.id === id)
  }
  return {
    add,
    get
  }
})()

ItemCtrl.add({id: 1, name: 'Nazar'})
console.log(ItemCtrl.get(1))