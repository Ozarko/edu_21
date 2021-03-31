class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Folowerrs: ${user.followers}</span>
            <span class="badge badge-primary">following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>

          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Lates Repos</h3>
      <div id="repos"></div>
    `;
  }
  clearProfile() {
    this.profile.innerHTML = '';
  }
  clearAlertMsg() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  }
  showAlert(massage, className) {
    this.clearAlertMsg();
    const div = document.createElement('div')
    div.className = className;
    div.appendChild(document.createTextNode(massage));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search')
    container.insertBefore(div, search)

    // Timeout after 3s
    setTimeout(()=> {
      this.clearAlertMsg();
    }, 3000)
  }
}