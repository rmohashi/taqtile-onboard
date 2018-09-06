const axios = require('axios');

export const login = (email, password) => {
  const endpoint = "https://tq-template-server-sample.herokuapp.com/authenticate";
  const payload = {
    email: email,
    password: password,
    rememberMe: false,
  }
  return axios.post(endpoint, payload)
    .then((response) => {
      return {
        username: response.data.data.user.name,
      };
    })
    .catch((error) => {
      throw new Error(error.response.data.errors[0].message);
    });
}
