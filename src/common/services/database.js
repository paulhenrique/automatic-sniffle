import axios from 'axios';

const database = axios.create({
  baseURL: '/api/pessoa'
});

export default database;