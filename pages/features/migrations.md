## Migration Patterns

There are a couple reasons you might want to migrate
- Moloch v2 to Moloch v3
- Moloch V3 to v3x-v4...
- Bring your own token
- Bring your own treasury

## Moloch V2 to V3

### DAO proposals to transfer all funds

This requires a proposal for every asset in the treasury. So if you only have one asset it's not too big of an issue but if you have many assets this can be a lot of overhead and coordination.

Beforehand the new v3 DAO should clone the existing members loot and share holdings. This can be done during summoning or in a proposal.

### Coordinated Ragequit and Restake

All members ragequit, withdraw their funds and then stake into the new dao.

This has very high coordination effort and there is no guarantee that all members will make the transition.

This keeps funds under control of the members at all times

### Single ‘royal ragequit’ and transfer

**(maybe best option of all of them)**

Beforehand the new v3 DAO should be setup to clone the existing members loot and share holdings at a snapshot.

create a new member proposal (v3 target safe) on the v2 dao for 1000x more Loot then the current total supply of loot and shares. When they ragequit they will be able to withdraw all funds except for a very small amount of dust.

This new member should be the target safe of the new v3 DAO, it will require a single multi-call proposal to withdraw all funds from the v2 into the v3 'target' safe

funds remain ragequitable except for the short period during the proposal to withdraw funds, this could even be timed to limit that period to almost instant.

* ^ this is probably the version that makes the most sense to build an automation tool around.

**alternate** - A safe with a delegated trusted team of signers that will summon a new v3 module on the safe that ragequits

### Minion spool
Transfer all funds from the main treasury to a DAO controlled Minion Safe. 'Upgrade' that safe with the Moloch v3 module

This might be especially good if the DAO already has most funds in a minion safe.

**notes**
- if the DAO has many minion Safes than only one can be the primary target of the v3 but the others can be side vaults where the v3 is a module but the safe is not marked as the 'target' in the v3 dao contract. 
- Some minion safes are not to be ragequitable, these should not be set as the primary 'target' treasury of the new dao.
- Every transfer of a minion would require a proposal on the v2 DAO.


### Combo
Mature DAOs will have many tokens in the main treasury and many Minion Safes. It will probably require some mix of the above options to do a full migration. Timing and orchestration will be important considerations.

## Moloch V3(baal) to V3x migrate/eject Patterns
The loot/shares tokens are erc20s and can be used like any other token without being attached to the governance contract (no dependencies on baal.sol)

> With any upgrades make sure you do not lose control of the treasury. The governance contract baal.sol may be the only signer/module on the Safe. So if baal.sol is disabled because it is not attached to valid loot/shares, there can be no dao proposals and no way to access the funds. Before doing any upgrade it would make sense to add a delegated team of signers or another module that can access funds in the Safe.

### Eject token by changing ownership
The loot and shares token are erc20s with ownership by the Baal.sol contract, the DAO can change ownership to another contract which would disable the baal contract.

This should be done with caution for a few reasons.
- if ownership is renounced or changed to a contract that can not call the 'onlyOwner' functions (mint/burn/upgrade/change owner) will be disabled.
- if the token is no longer attached to baal it will be disabled and this could disable the current treasury as well.

### Eject token with upgrade
The erc20 tokens are upgradable which means the current logic can be changed and new logic can be added, while keeping the state (vote power/delegations) and the same address. This would usually happen through dao proposal, or if the token has been ejected, by the new owner.

### Upgrade existing token to baal governance
Any current token that implements the same interface as lootToken.sol or sharesToken.sol or an upgradable token could be used in baal. 

### Migration from v3 to v3x-v4

This can be done by adding a new factory function that takes token addresses for new deploys and/or a upgrade token addresses function in baal.sol (later)

An alternate option is a community upgrade.
If you DAO has non transferable tokens this is very easy. Just clone the existing dao membership into the new V3 and transfer all assets to the new treasury.

If you have transferable tokens, this will require current members staking/burning their current tokens for the new DAO loot/share tokens.

## Bring your own treasury

Migrating a current Safe to a Moloch v3 is as easy as adding the module to the Safe. When adding it you can add any new members or any onboarding strategy you would like. 

notes:
This will make assets in the safe ragequitable to new members in the moloch v3 governance module
Current signers may still be on the safe, they will have the ability to transfer funds and essentially veto any proposals from the dao. If this is not intended the signers can be removed leaving the Safe under control of the Moloch V3 module only.
Any account that works with the zodiac interface could be used as a treasury, currently this is limited to the Safe

## Resources

Need help with migration? Reach out to one of these groups
Daohaus
Raidguild
