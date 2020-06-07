import axios from 'axios';

const baseUrl = 'http://mwibutsa.herokuapp.com';

const customAxios = axios.create({
  baseUrl,
});

export default customAxios;
