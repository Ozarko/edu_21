import { http } from './http';
import { ui } from './ui';

// Get post on DOM load

document.addEventListener('DOMContentLoaded', getPost);

// Listen for add post

document.querySelector('.post-submit').addEventListener('click', submmitPost);

// listen for delete post

document.querySelector('#posts').addEventListener('click', deletePost);

// listen for edit state

document.querySelector('#posts').addEventListener('click', enableEdit);

// listen for cancel

document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPost() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.error(err));
}

// Delete post
function deletePost(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPost();
        })
        .catch((err) => console.error(err));
    }
  }
  e.preventDefault();
}

function submmitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  const data = {
    title,
    body,
  };

  if (title === '' && body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    if (id === '') {
      // Create post
      http
        .post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('Post added !!!', 'alert alert-success');
          ui.clearFields();
          getPost();
        })
        .catch((err) => console.error(err));
    } else {
      // Update post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert('Post updated !!!', 'alert alert-success');
          ui.changeFormState('add');
          getPost();
        })
        .catch((err) => console.error(err));
    }
  }
}

// Enable edit state

function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const data = {
      id,
      title,
      body,
    };
    ui.fillForm(data);
  }
  e.preventDefault();
}

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}
