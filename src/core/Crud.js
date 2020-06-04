const BASE_URL = '/api';
// const BASE_URL = '';

export const get = url => {
  return fetch(BASE_URL + url)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    });
};

export const put = (url, data) => {};

export const deleted = (url, data) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(BASE_URL + url, options)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    });
};

export const post = (url, data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(BASE_URL + url, options)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    });
};
