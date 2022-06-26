---
sidebar_position: 4
title: Chain Reorgs and Errors
---

## Status Message Error Decoding

| **HandleId** | **Status Message** |                                                                                                                                                            **Description**                                                                                                                                                             |
| :----------: | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      2       |       QUEUED       |                                                                             The default state when initially creating a transaction during the initial API call\. This indicates that this transaction is waiting to be picked up by a background worker\.                                                                             |
|      3       |     PROCESSING     |                                                                                                                                     A background worker has started to process this transaction\.                                                                                                                                      |
|      4       |      FUNDING       |                                                                                                                 An auxiliary funding transaction is being initiated \(this only applies to non\-Ether transactions\)\.                                                                                                                 |
|      5       |       FUNDED       |                                                                                                                   An auxiliary funding transaction was successful \(this only applies to non\-Ether transactions\)\.                                                                                                                   |
|      6       |    BROADCASTING    |                                                                                                                                  The transaction is being announced to the blockchain network nodes\.                                                                                                                                  |
|      7       |    BROADCASTED     |                                                                                                                              The transaction was successfully announced to the blockchain network nodes\.                                                                                                                              |
|      8       |      PENDING       |                                                                                            The transaction is "pending" / "in the mempool", i\.e\. known to \(some\) blockchain network nodes, and awaiting inclusion/mining into a block\.                                                                                            |
|      9       |     CONFIRMING     |                                                                                             The transaction was mined into a block, but not enough subsequent blocks have yet been mined to consider that transaction "safe" / confirmed\.                                                                                             |
|      10      |     CONFIRMED      |                                                                                                 The transaction was mined into a block and enough subsequent blocks have been mined to consider that transaction "safe" / confirmed\.                                                                                                  |
|      11      |       FAILED       |                            The transaction was mined into a block, but the execution of its smart contract code failed\. Several reasons are possible, most notably "out of gas"\. The transaction is still included in a block because its gas is still awarded to the miner who attempted to execute it\.                            |
|      12      |      REJECTED      | The transaction was mined into a block but was rejected during the execution of its smart contract code\. Several reasons are possible, most notably Solidity's require\(\) assertions not being satisfied\. The transaction is still included in a block because it's gas is still awarded to the miner who attempted to execute it\. |
|      13      |   UN-PROCESSABLE   |                                                                                 An unrecoverable error occurred which prevents us from getting this transaction onto the blockchain\. We have given up \(or the customer requested us not to retry\)\.                                                                                 |
|      14      |      RETRYING      |                                                  A temporary/recoverable error occurred, and this transaction was re\-queued as to try getting this transaction onto the blockchain at a later time\. This state is more or less equivalent to QUEUED, but its name is more telling\.                                                  |

### Chain Reorgs

We need to detect re-orgs. Each time re query for a block we should have a reference for what we expect the parent hash to be. A re-org is detected when the retrieved block's parent hash does not match the expected parent hash. Next we need to add some metadata to how the Exfiltrator sends data to the Loader. Instead of passing raw blocks we should do something like this:

```python
class ChainSegment(NamedTuple):
    blocks: Tuple[Block, ...]
    is_reorg: bool = False

```

For the normal case, the exfiltrator would transmit

```python
ChainSegment(blocks=(next_block,), is_reorg=False).
```

In the case that a reorg has been encountered it would trace backwards up the parent_hash links until it encounters a previously known block. The exfiltrator would transmit ChainSegment(blocks=new_chain_segment, is_reorg=True). We can bound re-org detection to a fixed maximum size window and error out if tracing backwards up the chain exceeds this limit.

## Block Tags

| Block Tags | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| earliest   | The lowest numbered block the client has available                                                                                  |
| finalized  | The most recent crypto-economically secure block cannot be re-orged outside of manual intervention driven by community coordination |
| safe       | The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions                         |
| unsafe     | The most recent block in the canonical chain observed by the client this block can be re-orged out of the canonical chain           |
| pending    | A sample next block built by the client on top of unsafe and containing the set of transactions usually taken from local mempool    |
| latest     | DEPRECATED Currently an alias for unsafe will be removed at some point in the future                                                |
