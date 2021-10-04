[@openmev/sdk-connect](../README.md) / [Exports](../modules.md) / OpenMEVSocket

# Class: OpenMEVSocket

## Table of contents

### Constructors

- [constructor](OpenMEVSocket.md#constructor)

### Properties

- [socket](OpenMEVSocket.md#socket)

### Methods

- [closeConnection](OpenMEVSocket.md#closeconnection)
- [disconnect](OpenMEVSocket.md#disconnect)
- [emitBundleRequest](OpenMEVSocket.md#emitbundlerequest)
- [emitStatusRequest](OpenMEVSocket.md#emitstatusrequest)
- [emitTransactionCancellation](OpenMEVSocket.md#emittransactioncancellation)
- [emitTransactionRequest](OpenMEVSocket.md#emittransactionrequest)
- [init](OpenMEVSocket.md#init)

## Constructors

### constructor

• **new OpenMEVSocket**(`serverUrl?`)

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `serverUrl` | `string` |

#### Defined in

connector.ts:204

## Properties

### socket

• `Private` **socket**: `Socket`<`QuoteEventsMap`, `QuoteEventsMap`\>

#### Defined in

connector.ts:202

## Methods

### closeConnection

▸ **closeConnection**(): `void`

#### Returns

`void`

#### Defined in

connector.ts:225

---

### disconnect

▸ `Private` **disconnect**(): `void`

#### Returns

`void`

#### Defined in

connector.ts:216

---

### emitBundleRequest

▸ **emitBundleRequest**(`bundle`): `void`

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `bundle` | [`BundleRequest`](../interfaces/BundleRequest.md) |

#### Returns

`void`

#### Defined in

connector.ts:304

---

### emitStatusRequest

▸ **emitStatusRequest**(`id`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

connector.ts:312

---

### emitTransactionCancellation

▸ **emitTransactionCancellation**(`id`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`void`

#### Defined in

connector.ts:316

---

### emitTransactionRequest

▸ **emitTransactionRequest**(`bundle`): `void`

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `bundle` | [`BundleRequest`](../interfaces/BundleRequest.md) |

#### Returns

`void`

#### Defined in

connector.ts:308

---

### init

▸ **init**(`__namedParameters`): () => `void`

#### Parameters

| Name                | Type            |
| :------------------ | :-------------- |
| `__namedParameters` | `SocketOptions` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

connector.ts:229
