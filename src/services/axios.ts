import axios from "axios";

const instance = axios.create({
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'pt-BR',
      'Content-Type': 'application/json',
    },
  });

export default instance
