import axios from 'axios';
const API_URL = 'http://localhost:8999/users';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + '/signup', {
      fullname: user.fullname,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();