/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';
import {StatusCodes} from 'http-status-codes';

//code mapping
type DetailMessageType = {
  type: string;
  message: string;
}
const StatusCodeMapping: Record<number, boolean> = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];


const URL = 'https://13.react.htmlacademy.pro/wtw';
const TIME_LIMIT = 3000;

//Для отправки сетевых запросов воспользуемся пакетом `axios`
//Создадим отдельный модуль и опишем в нём функцию `createAPI`.
const createApi = () : AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIME_LIMIT,
  });

  //Добавим извлечение токена из `localStorage` и вставим его в заголовки.
  //Для этого нам потребуется воспользоваться перехватчиками, а именно перехватчиком запроса.
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        //const detailMessage = (error.response.data);
        //processErrorHandle(detailMessage.message);
      }
      throw error;
    });

  return api;
};

export default createApi;
