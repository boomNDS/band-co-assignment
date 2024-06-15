Documentation for the `apiClient.ts` module.

### API Documentation

---

## `callApi`

### Description

The `callApi` function is a utility to make HTTP requests to a server using Axios.<br>
baseURL default is https://mock-node-wgqbnxruha-as.a.run.app can't be change.

### Import

```typescript
import { callApi } from "./dist/apiClient";
```

### Parameters

- **url** (`string`): The endpoint URL (e.g., `/info`, `/id/1`).
- **options** (`RequestOptions`, optional): An object containing various request options. Defaults to `{ method: 'GET' }`.
  - **method** (`'GET' | 'POST' | 'PUT' | 'DELETE'`, optional): The HTTP method for the request. Defaults to `POST`.
  - **headers** (`{ [key: string]: string }`, optional): Custom headers to include in the request.
  - **params** (`{ [key: string]: any }`, optional): URL parameters to include in the request.
  - **data** (`any`, optional): The payload to send with the request (for `POST`, `PUT`, and `DELETE` methods).com`.

## `broadcastTransaction`

### Description

The `broadcastTransaction` function is a utility to get broadcast transaction.

### Import

```typescript
import { broadcastTransaction } from "./dist/apiClient";
```

### Parameters

- **url** (`string`): The endpoint URL (e.g., `/info`, `/id/1`).
- **payload** (`ITransactionPayload`): An object containing various request options. Defaults to `{ method: 'GET' }`.
  - **symbol** (`string`): The symbol of currency e.g ETH.
  - **price** (`string`): The price of currency e.g 4500.
  - **timestamp** (`string`): The timestamp e.g 1678912345.

### Returns

The `broadcastTransaction` function returns a `Promise<IResTransaction>`, object containing the following properties:

- **tx_hash**: A transaction hash/ID.

### Examples used

```typescript
broadcastTransaction({
  symbol: "ETH",
  price: 4500,
  timestamp: 1678912345,
});
```

## `transactionStatusMonitoring`

### Description

The `transactionStatusMonitoring` function is a utility to get transaction status.

### Import

```typescript
import { transactionStatusMonitoring } from "./dist/apiClient";
```

### Parameters

- **tx_hash** (`string`): A transaction hash/ID (often abbreviated as tx hash or txn hash) is a unique identifier, similar to a receipt<br> can get value from `broadcastTransaction`.

### Returns

The `transactionStatusMonitoring` function returns a `Promise<IResTransactionStatus>`, object containing the following properties:

- **tx_status**: A transaction status.
- **message**: Meaning or transaction status.

### Status includes

- `CONFIRMED`: Transaction has been processed and confirmed
- `FAILED`: Transaction failed to process
- `PENDING`: Transaction is awaiting processing
- `DNE`: Transaction does not exist

### Examples used

```typescript
transactionStatusMonitoring(
  "e97ae379d666eed7576bf285c451baf9f0edba93ce718bf15b06c8a85d07b8d1"
);
```
