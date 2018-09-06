const axios = require('axios');

axios.interceptors.request.use(config => {
  config.headers = {
    Authorization: localStorage.getItem('accessToken'),
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  localStorage.setItem('accessToken', response.headers.authorization);
  return response;
}, error => {
  return Promise.reject(error);
});

export const getUsers = (page) => {
  const usersPerButtonClick = 5;
  const endpoint = "https://tq-template-server-sample.herokuapp.com/users";
  const configs = {
    params: {
      pagination: {
        "page": page,
        "window": usersPerButtonClick,
      },
    }
  }
  return axios
    .get(endpoint, configs)
    .then((response) => {
      return {
        page: page + 1,
        users: response.data.data,
        lastPage: response.data.pagination.page === response.data.pagination.totalPages - 1,
      };
    })
    .catch((error) => {
      throw new Error(error.response.data.errors[0].message);
    });
}
