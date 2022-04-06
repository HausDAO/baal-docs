# Tribute Escrow

Note: You can also reference this page on the [DAOhaus v3 Wiki](https://github.com/HausDAO/daohaus-monorepo/wiki/TributeEscrow)
**TributeEscrow** is a helper contract for making tribute proposals

- Provides contract to approve _ERC-20_ transfers
- Provides simple function/interface to make single proposal type

## Details

There is one `TributeEscrow` contract deployed to each supported network.

- [Contract Addresses](https://github.com/HausDAO/daohaus-monorepo/wiki/Contracts)

## Create Tribute Proposal

1. Make a `submitTributeProposal` function call to the TributeEscrow contract

```js
function submitTributeProposal(
    Baal baal,
    address token,
    uint256 amount,
    uint256 shares,
    uint256 loot,
    uint32 expiration,
    string memory details
)
```

- `msg.sender` is member tributing/requesting shares/loot
- `baal` is the DAO we are tributing too
- `token` - ERC-20 `tokenAddress`
- `amount` of tribute, `shares`, `loot` in Wei
- `expiration` is epoch time, same as in baal `submitProposal`
- `details` - proposal details schema we use

2. `TributeEscrow` contract encodes ERC-20 token transfers and makes the proposal against the baal contract
3. Subgraph catches the normal `submitProposal` event to create proposal entity
4. TributeEscrow emits additional event that we catch and add the following fields to the proposal entity:
   - `tributeOffered`
   - `tributeToken`
   - `tributeTokenSymbol`
   - `tributeTokenDecimals`
   - `tributeEscrowRecipient`

## Takeaways

- Nice to have these trusted proposal type contracts. We can be 100% sure of what this proposal is doing.
- Our UI needs to enforce that the account making the tribute needs to approve `TributeEscrow` to spend the ERC-20.
- If the account making the tribute were to transfer the tokens out before the proposal is processed, the proposal will fail on execution.

## Resources

- [Contract](https://github.com/HausDAO/Baal/blob/feat/baalZodiac/contracts/tools/TributeEscrow.sol)
- [Subgraph mapping](https://github.com/HausDAO/daohaus-v3-subgraph-sandbox/blob/master/src/tribute-escrow-mapping.ts)
