import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
  params?: { [key: string]: any };
  data?: any;
}

export interface ITransactionPayload {
  symbol: string;
  price: number;
  timestamp: number;
}

export interface IResTransaction {
  tx_hash: string;
}

enum TxStatus {
  CONFIRMED = "CONFIRMED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  DNE = "DNE",
}

export interface IResTransactionStatus {
  tx_status: TxStatus;
  message: string;
}

/**
 * Makes an API request to the server.
 *
 * @param {string} url - The endpoint URL (e.g., /info, /id/1).
 * @param {IRequestOptions} [options={ method: 'GET' }] - request options including method, headers, params, and data.
 */
async function callApi(
  url: string,
  options: IRequestOptions = { method: "GET" }
): Promise<AxiosResponse<any>> {
  const config: AxiosRequestConfig = {
    method: options.method || "GET",
    url,
    baseURL: `https://mock-node-wgqbnxruha-as.a.run.app`,
    headers: options.headers,
    params: options.params,
    data: options.data,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `HTTP error! Status: ${error.response.status}, Message: ${error.response.data}`
      );
    } else {
      throw new Error(`Network error: ${error.message}`);
    }
  }
}

/**
 * Get broadcast transaction.
 *
 * @param {ITransactionPayload} payload - request options including symbol, price, and timestamp.
 */
async function broadcastTransaction(
  payload: ITransactionPayload
): Promise<IResTransaction> {
  const res = await callApi("/broadcast", {
    method: "POST",
    data: payload,
  });
  return res.data as IResTransaction;
}

/**
 * Get transaction status monitoring.
 * - tx_status includes:
 * - `CONFIRMED`: Transaction has been processed and confirmed
 * - `FAILED`: Transaction failed to process
 * - `PENDING`: Transaction is awaiting processing
 * - `DNE`: Transaction does not exist
 *
 * @param {string} tx_hash - tx_hash value.
 */
async function transactionStatusMonitoring(
  tx_hash: string
): Promise<IResTransactionStatus> {
  const messages = {
    CONFIRMED: "Transaction has been processed and confirmed",
    FAILED: "Transaction failed to process",
    PENDING: "Transaction is awaiting processing",
    DNE: "Transaction does not exist",
  };
  const res = await callApi(`/check/${tx_hash}`);
  const status = res.data.tx_status as TxStatus;
  return {
    tx_status: status,
    message: messages[status],
  };
}

export { callApi, broadcastTransaction, transactionStatusMonitoring };
