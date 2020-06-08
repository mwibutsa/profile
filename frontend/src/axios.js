import axios from 'axios';

const baseURL = 'http://mwibutsa.herokuapp.com';

const customAxios = axios.create({
  baseURL,
});

export default customAxios;
