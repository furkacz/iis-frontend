const axios = require('axios').default;

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: parseInt(process.env.VUE_APP_API_TIMEOUT, 10),
  headers: {
    'Content-Type': 'application/json-patch+json',
  },
  responseType: 'json',
  responseEncoding: 'utf8',
  validateStatus: (status) => status < 400, // throws AxiosError for http status 400 and 500
});
