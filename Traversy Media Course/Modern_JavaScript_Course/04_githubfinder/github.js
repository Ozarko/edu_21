class GitHub {
  constructor() {
    this.client_id = '6516284072d72eb25eae';
    this.client_secret = '2205d36c3fcffee965b04b0842ecc1270e7202b6';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}