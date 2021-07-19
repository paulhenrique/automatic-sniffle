import axios from 'axios';

const database = axios.create({
  baseURL: '/pessoa'
});

export default database;