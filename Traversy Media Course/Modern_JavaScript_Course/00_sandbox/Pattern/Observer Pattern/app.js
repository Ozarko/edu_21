function EventObserver() {
  this.observers = []
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter( item => {
      if(item !== fn) {
        return item;
      }
    })
    console.log(`You are now unsubscribed from ${fn.name}`)
  },
  fire:function() {
    this.observers.forEach(item => {
      item.call();
    })
  }
}

const click = new EventObserver();

// Event Listeners

document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurMilliseconds)
});
document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurMilliseconds)
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire()
});

// Click Handler

const getCurMilliseconds = () =>
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);