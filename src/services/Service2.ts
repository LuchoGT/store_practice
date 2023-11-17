import { Constants } from '@/constants/public.contant';
import axios, { AxiosInstance } from 'axios';

class Service2 {

  protected http: AxiosInstance;

  protected baseUrl: string = Constants.APP_API_URL2;

  protected headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  constructor() {
    //const token = window.localStorage.getItem('token');
    //const authorizationToken = token ? { Authorization: `Bearer ${token}` } : null;

    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        ...this.headers,
        //...authorizationToken,
      },
    });
  }
}

export default Service2;
