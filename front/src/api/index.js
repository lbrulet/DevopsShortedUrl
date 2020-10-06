import {CONFIG_REQUEST, URL_API} from "./config";
import axios from 'axios';

export function shorterUrl (url) {
  return new Promise(function(resolve, reject) {
    axios.post(
      `${URL_API}short-me`,
      {
        url: url
      },
      CONFIG_REQUEST
    ).then(response => {resolve(response)})
      .catch(error => {reject(error)})
  })
}