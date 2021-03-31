import axios from 'axios';

export default axios.create({
  baseURL:
    "https://react-quiz-578e6-default-rtdb.europe-west1.firebasedatabase.app/",
});