# OpenMEV Mechanics and Formulas

> SushiSwap

## Rebate Calculations 

*Note*: naive implementation, expect changes

bundleCost = mev bribe + bundleTxs[1,2,...]

gasAllowance =  mev bribe - bundleTxs[1,2,...]

BundleTransactionGas[1,2,...] = Individual Gas Cost

BundleId = The Block Number (or hash?) in which the bundle was included

max_gasRebate = (BundleId(BundleTransactionGas[1,2,...]))

## Transaction Parameters 

`targetBlockNumber`: block number at which this bundle is valid

`minTimestamp`:  minimum timestamp at which this bundle is valid (inclusive)

 `maxTimestamp`: maximum timestamp at which this bundle is valid (inclusive)


### MEV Bundle pricing formula

Our costs for bundling transactions for MEV are as follows:

Formula for calculating the pricing of a bundle (flashbots):

$$s_{v0.2} = \frac{\Delta_{coinbase} + \sum_{T\in U}g_Tp_T - \sum_{T\in M \cap U}g_Tp_T}{\sum_{T\in U}g_T}$$

$s$: bundle $U$ _score_ used to sort bundles.  
$U$: ordered list of transactions $T$ in a bundle.  
$M$: set of transactions $T$ in the mempool.  
$g_{T}$: _gas used_ by transaction $T$.  
$p_{T}$: _gas price_ of transaction $T$.  
$\Delta_{coinbase}$: coinbase difference from direct payment.  

### Explanation

This formula derives the effective gas price of the bundle by summing up all payments to coinbase as well as gas fees *except* for the gas fees of transactions that have been seen in the mempool.

The gas fees of mempool transactions are deducted to prevent "stuffing" bundles with high gas price transactions from the mempool to inflate the effective gas price.

## Appendix

**Expected Execution Price** $(( E [P])$ When a liquidity taker issues a trade on \(X / Y,\) the taker wishes to execute the trade with the expected execution price \(E [P]\) (based on the AMM algorithm and \(X / Y\) state), given the expected slippage. 

**Execution Price** \((P):\) During the time difference between a liquidity taker issuing a transaction, and the transaction being executed (e.g. mined in a block), the state of the AMM market \(X / Y\) may change. This state change may induce unexpected slippage resulting in an execution price \(P \neq E [P]\). 

**Atomic arbitrage profit (aarb)**: is defined as the gain of two atomically executed arbitrage trades $TA$ and $TB$ on exchange $A$ and $B$.


**Non-atomic arbitrage profit (naarb)**: is defined as the arbitrage gain, if $TA$
executes first, and $TB$’s execution follows after $i$ intermediary transactions.



**Holding value ($Hv$)**: is defined as the change in the averaged price of the given asset pair on the two exchanges, which represents the asset value change during the non-atomic execution period.



**Borrowing Capacity ($Bc$)**: Refers to the total value that a borrower is allowed to request from a lending pool, given its collateral amount. For each collateral asset 𝑖 of a borrower, its borrowing capacity is defined in Equation 3.

$$ Bc =∑︁ 𝑉 𝑎𝑙𝑢𝑒 𝑜𝑓 𝐶𝑜𝑙𝑙𝑎𝑡𝑒𝑟al  × LT𝑖 $$


**Health Factor ($Hhf$)**: The health factor measures the collateralization status of a position, defined as the ratio of the borrowing capacity over the outstanding debts (cf. Equation 4).


$$ Hhf = BC / ∑︁  𝑉𝑎𝑙𝑢𝑒 𝑜𝑓 𝐷𝑒𝑏𝑡t $$ 


**MVI**: Mininumal Profitable Viable Input

**Unexpected Price Slippage **\((P- E [P]):\) is the difference between \(P\) and \(E [P]\). 

**Unexpected Slippage Rate** \(\left(\frac{P- E [P]}{ E [P]}\right):\) is \(\quad\) the unexpected slippage over the expected price.


**Expected Execution Price**: $E [P]$ When a liquidity taker issues a trade on $X / Y,$ the taker wishes to execute the trade with the expected execution price $E [P]$ (based on the AMM algorithm and $X / Y$ state), given the expected slippage. 

**Execution Price**: $P$ During the time difference between a liquidity taker issuing a transaction, and the transaction being executed (e.g. mined in a block), the state of the AMM market $X / Y$ may change. This state change may induce unexpected slippage resulting in an execution price $P \neq E [P]$. 

**Unexpected Price Slippage**: $P- E [P]$ is the difference between $P$ and $E [P]$. Unexpected Slippage Rate $\left(\frac{P- E [P]}{ E [P]}\right)$ is $\quad$ the unexpected slippage over the expected price.



## Transactions Appendix 

| Status        | Description                                                                                                                                                                                                                                                                                                                       |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| QUEUED        | The default state when initially creating a transaction during the initial API call. This indicates that this transaction is waiting to be picked up by a background worker.                                                                                                                                                      |
| PROCESSING    | A background worker has started to process this transaction.                                                                                                                                                                                                                                                                      |
| FUNDING       | An auxiliary funding transaction is being initiated (this only applies to non-Ether transactions).                                                                                                                                                                                                                                |
| FUNDED        | An auxiliary funding transaction was successful (this only applies to non-Ether transactions).                                                                                                                                                                                                                                    |
| BROADCASTING  | The transaction is being announced to the blockchain network nodes.                                                                                                                                                                                                                                                               |
| BROADCASTED   | The transaction was successfully announced to the blockchain network nodes.                                                                                                                                                                                                                                                       |
| PENDING       | The transaction is "pending" / "in the mempool", i.e. known to (some) blockchain network nodes, and awaiting inclusion/mining into a block.                                                                                                                                                                                       |
| CONFIRMING    | The transaction was mined into a block, but not enough subsequent blocks have yet been mined to consider that transaction "safe" / confirmed.                                                                                                                                                                                     |
| CONFIRMED     | The transaction was mined into a block and enough subsequent blocks have been mined to consider that transaction "safe" / confirmed.                                                                                                                                                                                              |
| FAILED        | The transaction was mined into a block, but the execution of its smart contract code failed. Several reasons are possible, most notably "out of gas". The transaction is still included in a block because its gas is still awarded to the miner who attempted to execute it.                                                     |
| REJECTED      | The transaction was mined into a block but was rejected during the execution of its smart contract code. Several reasons are possible, most notably Solidity's require() assertions not being satisfied. The transaction is still included in a block because it's gas is still awarded to the miner who attempted to execute it. |
| UNPROCESSABLE | An unrecoverable error occurred which prevents us from getting this transaction onto the blockchain. We have given up (or the customer requested us not to retry).                                                                                                                                                                |
| RETRYING      | A temporary/recoverable error occurred, and this transaction was re-queued as to try getting this transaction onto the blockchain at a later time. This state is more or less equivalent to QUEUED, but its name is more telling.                                                                                                 |
