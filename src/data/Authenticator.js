const axios = require('axios');

export const login = (component) => {
  const endpoint = "https://tq-template-server-sample.herokuapp.com/authenticate";
  const payload = {
    email: component.state.email,
    password: component.state.password,
    rememberMe: false,
  }
  axios.post(endpoint, payload)
    .then((response) => {
      localStorage.setItem('username', response.data.data.user.name);
      localStorage.setItem('token', response.data.data.token);
      component.setState({
        redirectToHome: true,
      });
    })
    .catch((error) => {
      alert(error.response.data.errors[0].message);
      component.setState({
        isValidating: false,
      });
    });
}
