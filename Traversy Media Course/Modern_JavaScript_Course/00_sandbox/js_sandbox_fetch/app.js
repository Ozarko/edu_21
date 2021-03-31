document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getJson() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach((post) => {
        output += `
          <li>${post.title}</li>
          `;
        document.getElementById('output').innerHTML = output;
      });
    });
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach((user) => {
        output += `
          <li>${user.login}</li>
          `;
        document.getElementById('output').innerHTML = output;
      });
    });
}

