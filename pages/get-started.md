---
title: SushiSwap Integration Overview
---

# SushiSwap Integration Overview



## SushiSwap OpenMEV Internal API

> API is currently for internal usage

### Documentation for API Endpoints

All URIs are relative to *https://sushirelay.com*

| Class        | Method                                                                          | HTTP request                           | Description                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _DefaultApi_ | [**apiV1OrdersGet**](Apis/DefaultApi.md#apiv1ordersget)                         | **GET** /api/v1/orders                 | Get existing orders.                                                                                                                                                                                    |
| _DefaultApi_ | [**apiV1OrdersPost**](Apis/DefaultApi.md#apiv1orderspost)                       | **POST** /api/v1/orders                | Create a new order.                                                                                                                                                                                     |
| _DefaultApi_ | [**apiV1OrdersUIDDelete**](Apis/DefaultApi.md#apiv1ordersuiddelete)             | **DELETE** /api/v1/orders/{UID}        | Cancels order by marking it invalid with a timestamp.                                                                                                                                                   |
| _DefaultApi_ | [**apiV1OrdersUIDGet**](Apis/DefaultApi.md#apiv1ordersuidget)                   | **GET** /api/v1/orders/{UID}           | Get existing order from UID.                                                                                                                                                                            |
| _DefaultApi_ | [**apiV1SolvableOrdersGet**](Apis/DefaultApi.md#apiv1solvableordersget)         | **GET** /api/v1/solvable_orders        | Get solvable orders.                                                                                                                                                                                    |
| _DefaultApi_ | [**apiV1TokensSellTokenFeeGet**](Apis/DefaultApi.md#apiv1tokensselltokenfeeget) | **GET** /api/v1/tokens/{sellToken}/fee | The fee that is charged for placing an order. The fee is described by a minimum fee - in order to cover the gas costs for onchain settling - and a feeRatio charged to the users for using the service. |
| _DefaultApi_ | [**apiV1TradesGet**](Apis/DefaultApi.md#apiv1tradesget)                         | **GET** /api/v1/trades                 | Get existing Trades.                                                                                                                                                                                    |

### Documentation for Models

- [FeeInformation](.//Models/FeeInformation.md)
- [Order](.//Models/Order.md)
- [OrderCancellation](.//Models/OrderCancellation.md)
- [OrderCancellationError](.//Models/OrderCancellationError.md)
- [OrderCreation](.//Models/OrderCreation.md)
- [OrderMetaData](.//Models/OrderMetaData.md)
- [OrderPostError](.//Models/OrderPostError.md)
- [OrderType](.//Models/OrderType.md)
- [Trade](.//Models/Trade.md)

### Documentation for Authorization

All endpoints do not require authorization.

