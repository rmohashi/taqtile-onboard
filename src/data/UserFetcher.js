const axios = require('axios');

export const getUsers = (component) => {
  const usersPerButtonClick = 5;
  const endpoint = "https://tq-template-server-sample.herokuapp.com/users";
  const configs = {
    params: {
      pagination: {
        "page": component.state.page,
        "window": usersPerButtonClick,
      },
    },
    headers: {
      Authorization: localStorage.getItem('token'),
    }
  }
  axios.get(endpoint, configs)
    .then((response) => {
      component.setState({
        users: component.state.users.concat(response.data.data),
        page: component.state.page + 1,
        lastPage: response.data.pagination.page === response.data.pagination.totalPages - 1,
      });
    })
    .catch((error) => {
      alert(error.response.data.errors[0].message);
    });
}
