import axios from 'axios';

const API = 'http://localhost:9000';

export const GetFunc = async (path) => {
  return await fetch(API + path).then((response) => response.json());
};

export const PostFunc = (path, data) => {
  return fetch(API + path, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const DeleteDataFunc = (path) => {
  return fetch(API + path, {
    method: 'DELETE',
  }).then((response) => response.json());
};

export const updateProduct = (event, path, data) => {
  event.preventDefault();

  return axios.patch(API + path, data);
};
