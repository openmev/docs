[@openmev/sdk-connect](../README.md) / [Exports](../modules.md) / BundleRequest

# Interface: BundleRequest

**`export`**

**`interface`** BundleRequest

## Table of contents

### Properties

- [bribe](BundleRequest.md#bribe)
- [chainId](BundleRequest.md#chainid)
- [deadline](BundleRequest.md#deadline)
- [from](BundleRequest.md#from)
- [simulateOnly](BundleRequest.md#simulateonly)
- [transactions](BundleRequest.md#transactions)

## Properties

### bribe

• `Optional` **bribe**: `string`

#### Defined in

connector.ts:99

---

### chainId

• `Optional` **chainId**: `number`

#### Defined in

connector.ts:98

---

### deadline

• `Optional` **deadline**: `string` \| `number` \| `bigint` \| `BigNumber` \|
`Bytes`

#### Defined in

connector.ts:101

---

### from

• `Optional` **from**: `string`

#### Defined in

connector.ts:100

---

### simulateOnly

• `Optional` **simulateOnly**: false \| true

#### Defined in

connector.ts:102

---

### transactions

• **transactions**: [`TransactionReq`](TransactionReq.md)[] \| `string`[]

#### Defined in

connector.ts:97
