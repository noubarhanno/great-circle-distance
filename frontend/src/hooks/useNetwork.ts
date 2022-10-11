import { EConfigContextAction, useConfigContext } from "context/config.context";
import { useState } from "react";
import Network, { TMethods, TNetworkResponse } from "../services/network";

interface TNetworkHookReturn {
  isLoading: boolean;
  error: string | undefined;
  isSuccess: boolean;
  isDone: boolean;
  networkRequest: (params: TNetworkParams) => Promise<TNetworkResponse>;
  clearState: () => void;
}

type TNetworkParams = {
  method: TMethods;
  url: string;
  data?: any;
};

const network = new Network();

const useNetwork = (): TNetworkHookReturn => {
  const { dispatch } = useConfigContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const clearState = () => {
    setIsLoading(false);
    setError(undefined);
    setIsSuccess(false);
    setIsDone(false);
  };

  const networkRequest = async ({
    method,
    url,
    data,
  }: TNetworkParams): Promise<TNetworkResponse> => {
    setIsLoading(true);
    try {
      let response;
      switch (method) {
        case "POST":
          response = await network.post({ url, data });
          break;
        case "GET":
          response = await network.get({ url, data });
          break;
        // add more methods here
        default:
          response = await network.get({ url, data });
          break;
      }
      setIsLoading(false);
      setIsSuccess(true);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Opps, something went wrong";
      setIsLoading(false);
      setIsSuccess(false);
      setError(errorMessage);
      dispatch({
        type: EConfigContextAction.SET_ERROR,
        payload: errorMessage,
      });
      return error?.response?.data || "Oops, something went wrong";
    } finally {
      setIsDone(true);
    }
  };

  return { isLoading, error, networkRequest, isSuccess, clearState, isDone };
};

export default useNetwork;
