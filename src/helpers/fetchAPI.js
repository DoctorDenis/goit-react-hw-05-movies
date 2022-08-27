import axios from 'axios';
const API_KEY = '641afe219016a353adafbc0b4f44c0fe';

export function fetchInfo(path, parameters = {}) {
  const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });

  return instance.get(path, {
    params: { api_key: API_KEY, ...parameters },
  });
}
