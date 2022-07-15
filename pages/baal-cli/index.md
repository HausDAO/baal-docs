# Baal CLI Overview

The Baal CLI is a command line interface for Baal useing the harhat tasks.



## AVAILABLE Baal TASKS:
  ```
  cancelprop            Cancel a proposal
  infoprops             Current Proposal info
  memberprop            Submits a new member proposal
  processprop           Process a proposal
  ragequit              Ragequit shares and/or loot
  sponsorprop           Status of a proposal
  statusprop            Status of a proposal
  summon                Summons a new DAO
  tributeprop           Approve token and make a tribute proposal
  voteprop              Vote on a proposal
```

> To get help for a specific task run: ```npx hardhat help [task]```

> add the ```--network <network name>``` to run on any supported network

## cancelprop

Usage: 
```hardhat [GLOBAL OPTIONS] cancelprop --dao <STRING> --id <STRING>```

OPTIONS:
```
  --dao Dao address 
  --id  Proposal ID 
```

cancelprop: Cancel a proposal

## infoprops

Usage: 
```hardhat [GLOBAL OPTIONS] infoprops --dao <STRING>```

OPTIONS:
```
  --dao Dao address 
```

infoprops: Current Proposal info


## memberprop

Usage: 
```hardhat [GLOBAL OPTIONS] memberprop --applicant <STRING> --dao <STRING> --expiration <STRING> --loot <STRING> [--meta <STRING>] --shares <STRING>```

OPTIONS:
```
  --applicant   applicant address 
  --dao         Dao address 
  --expiration  seconds after grace that proposal expires, 0 for none 
  --loot        number loot 
  --meta        updated meta data 
  --shares      number shares 
```

memberprop: Submits a new member proposal

## processprop

Usage: 
```hardhat [GLOBAL OPTIONS] processprop --dao <STRING> --data <STRING> --id <STRING>```

OPTIONS:
```
  --dao         Dao address 
  --data        the data, need to get this from the submit events 
  --id          Proposal ID 
```

processprop: Process a proposal

## ragequit

Usage: 
```hardhat [GLOBAL OPTIONS] ragequit --dao <STRING> --loot <STRING> --shares <STRING> --to <STRING> --tokens <STRING>```

OPTIONS:
```
  --dao         Dao address 
  --loot        number of loot 
  --shares      number of shares 
  --to          RQ to 
  --tokens      the token addresses (array) (escape quotes) (no spaces) ex [\"0x123...\"] 
```

ragequit: Ragequit shares and/or loot

## sponsorprop

Usage: 
```hardhat [GLOBAL OPTIONS] sponsorprop --dao <STRING> --id <STRING>```

OPTIONS:
```
  --dao Dao address 
  --id  Proposal ID 
```

sponsorprop: Status of a proposal

## statusprop

Usage: 
```hardhat [GLOBAL OPTIONS] statusprop --dao <STRING> --id <STRING>```

OPTIONS:
```
  --dao Dao address 
  --id  Proposal ID 
```

statusprop: Status of a proposal

## summon

Usage: 
```hardhat [GLOBAL OPTIONS] summon --factory <STRING> --loot <STRING> --lootpaused <STRING> [--meta <STRING>] --name <STRING> --shaman <STRING> --shares <STRING> --sharespaused <STRING> --summoners <STRING>```

OPTIONS:
```
  --factory             Dao factory address 
  --loot                numnber of initial loot for summoners (string array, escape quotes) 
  --lootpaused          is loot transferable 
  --meta                updated meta data 
  --name                share token symbol 
  --shaman              any initial shamans 
  --shares              numnber of initial shares for summoners (string array, escape quotes) 
  --sharespaused        are shares transferable 
  --summoners           the summoner addresses (array) (escape quotes) (no spaces) ex [\"0x123...\"] 
```

summon: Summons a new DAO

## tributeprop

Usage: 
```hardhat [GLOBAL OPTIONS] tributeprop --amount <STRING> --dao <STRING> --expiration <STRING> --loot <STRING> --minion <STRING> --shares <STRING> --token <STRING>```

OPTIONS:
```  --amount      Tribute token amount 
  --dao         Dao address 
  --expiration  Tribute expiration date. 0 for none 
  --loot        Tribute loot requested 
  --minion      Tribute Minion address 
  --shares      Tribute shares requested 
  --token       Tribute token address 
```

tributeprop: Approve token and make a tribute proposal

## voteprop

Usage: 
```hardhat [GLOBAL OPTIONS] voteprop --approve <STRING> --dao <STRING> --id <STRING>```

OPTIONS:
```
  --approve     true is yes and false is no 
  --dao         Dao address 
  --id          Proposal ID 
```

voteprop: Vote on a proposal
