import request from './request';

export const login = (email, password) => {
  const options = {
    url: '/authenticate',
    method: 'POST',
    data: {
      email: email,
      password: password,
      rememberMe: false,
    }
  }
  return request(options)
    .then((response) => {
      return {
        username: response.data.user.name,
        accessToken: response.data.token,
      };
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
