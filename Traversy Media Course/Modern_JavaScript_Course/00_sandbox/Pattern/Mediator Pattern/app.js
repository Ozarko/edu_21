const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to)
  },
  recive: function(message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`);
  }
}

const Chatroom = function() {
  let users = {}
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        to.recive(message, from)
      }else{
        for(key in users) {
          if(users[key] !== from) {
            users[key].recive(message, from)
          }
        }
      }
    }
  }
}

const brad = new User('brad');
const naz = new User('Nazar')
const sara = new User('Sara')

const chatroom = new Chatroom();

chatroom.register(brad)
chatroom.register(naz)
chatroom.register(sara)

brad.send('Hello Jeff', naz)
sara.send('Hello Nazar, you are the best ever', naz)
naz.send('Hi everyone')