import {
  IResTransaction,
  IResTransactionStatus,
  broadcastTransaction,
  transactionStatusMonitoring,
} from "./apiClient";

/**
 * Problem 3
 *
 * - Create a client module that is designed to be integrated into another application, with the following capabilities.
 */
async function main() {
  const data: IResTransaction = await broadcastTransaction({
    symbol: "ETH",
    price: 4500,
    timestamp: 1678912345,
  });
  const transactionStatus: IResTransactionStatus =
    await transactionStatusMonitoring(data.tx_hash);

  console.log("data : ", data.tx_hash);
  console.log("status : ", transactionStatus.tx_status);
}

main();
