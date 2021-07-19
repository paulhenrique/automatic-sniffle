import axios from 'axios';

const consultaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});

export default consultaCep;