import axios from 'axios';

const client = axios.create({
  baseURL: "https://tq-template-server-sample.herokuapp.com/",
});

const request = function (options) {
  client.interceptors.request.use(config => {
    config.headers = {
      Authorization: localStorage.getItem('accessToken'),
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  client.interceptors.response.use(response => {
    localStorage.setItem('accessToken', response.headers.authorization);
    return response;
  }, error => {
    return Promise.reject(error);
  });

  const onSuccess = response => {
    return response.data;
  }

  const onError = error => {
    throw new Error(error.response.data.errors[0].original);
  }

  return client(options).then(onSuccess).catch(onError);
}

export default request;
