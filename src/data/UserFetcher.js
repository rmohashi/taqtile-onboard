import request from './request';

const USERS_PER_BUTTON_BLICK = 5;

export const getUsers = (page) => {
  const options = {
    url: '/users',
    method: 'GET',
    params: {
      pagination: {
        page: page,
        window: USERS_PER_BUTTON_BLICK,
      },
    }
  }

  return request(options)
    .then((response) => {
      return {
        page: page + 1,
        users: response.data,
        lastPage: response.pagination.page === response.pagination.totalPages - 1,
      };
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

export const getUser = (id) => {
  const options = {
    url: `/users/${id}`,
    method: 'GET',
  }
  return request(options)
    .then((response) => {
      return {
        name: response.data.name,
        email: response.data.email,
        role: response.data.role,
      };
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}