import axios, { Axios, AxiosResponse } from "axios";
import { BASE_URL } from "config";

export type TNetworkResponse = {
  data?: any;
  message?: string;
  success?: boolean;
};

export type TMethods = "GET" | "POST" | "DELETE" | "PUT";

class Network {
  BaseUrl: string;
  client: Axios;
  constructor() {
    this.BaseUrl = BASE_URL;
    this.client = axios.create({ baseURL: this.BaseUrl });
  }
  private handleSuccess = (response: any) => {
    return response;
  };
  private handleError = (error: any) => {
    return Promise.reject(error);
  };

  init = () => {
    const headers: Record<string, string> = {
      Accept: "application/json",
    };
    this.client = axios.create({
      baseURL: this.BaseUrl,
      timeout: 3000,
      headers,
    });
    this.client.interceptors.response.use(this.handleSuccess, this.handleError);
  };

  public get = async ({
    url,
    data,
    config,
  }: {
    url: string;
    data?: any;
    config?: any;
  }): Promise<AxiosResponse<TNetworkResponse, TNetworkResponse>> => {
    this.init();
    return this.client.get(url, { params: data, ...config });
  };

  // add other methods here
}

export default Network;
