var gameData = {
    //Basic Resources
    eggs: 0,
    milk: 0,
    feathers: 0,

    //Clicking Stats
    eggsPerClickBase: 1,
    eggsPerClickFinal: 0,
    eggsPerClickCost: 12,
    milkPerClickBase: 0,
    milkPerClickFinal: 0,
    milkPerClickCost: 3600,

    //Turkeswine Numbers
    turkeswineCount: 0,

    //Pedogeon Numbers
    pedogeonCount: 0,

    //Boosters and Multipliers
    costMult: 2,
    eggMult: 1,
    milkMult: 1,
    featherMult: 1,
    verdantBoost: 0,
    verdantMult: 1,

    //Nestpecker Numbers
    nestpeckerCount: 0,
    nestpeckerCost: 4119,
    nestpeckerEggsTotal: 0,
    nestpeckerMilkTotal: 0,

    //Sulphur Chicken Production
    sulphurHenCount: 0,
    sulphurHenCost: 18,
    sulphurRoosterCount: 0,
    sulphurRoosterCost: 680,
    sulphurRoosterBoost: 0,
    sulphurChickenIndiv: 0,
    sulphurChickenBase: 0,
    sulphurChickenFinal: 0,

    //Buttewren Production
    buttewrenCount: 0,
    butteWrenCost: 71,
    butteWrenBase: 0,
    butteWrenTotal: 0,
    butteWrenFinal: 0,

    //Albamoth Production
    albamothCount: 0,
    albamothCost: 450,

    //Bruthrush Production
    bruthrushCount: 0,
    bruthrushCost: 719,
    bruthrushBase: 0,
    bruthrushAdded: 0,
    bruthrushIndiv: 0,
    bruthrushTotal: 0,
    bruthrushFinal: 0,

    //Swarm Duck Production
    swarmDuckCount: 0,
    swarmDuckCost: 209,
    swarmDuckBase: 1,
    swarmDuckBoost: 0,
    swarmDuckMult: 1,
    swarmDuckIndiv: 0,
    swarmDuckTotal: 0,
    swarmDuckFinal: 0,

    //Prokareagle Production
    prokareagleCount: 0,
    prokareagleCost: 6500000,
    prokareagleBase: 0,
    prokareagleFinal: 0,
    prokareagleTimer: 0,
    prokareagleLimit: 1,

    //Cragowary Production
    cragowaryCount: 0,
    cragowaryCost: 850,
    cragowaryBoost: 0,

    //Dromingo Production
    dromingoCount: 0,
    dromingoCost: 25,
    dromingoBase: 0,
    dromingoTotal: 0,
    dromingoFinal: 0,

    //Udder Hen Production
    udderHenCount: 0,
    udderHenCost: 103,
    udderHenBase: 0,
    udderHenTotal: 0,
    udderHenFinal: 0,

    //Sulphur Matriarch Production
    sulphurMatriarchCount: 0,
    sulphurMatriarchCost: 11000,
    sulphurMatriarchAdd: 0,

    //Apiform Hummingbird Production
    apiformHummingbirdCount: 0,
    apiformHummingbirdCost: 780,
    apiformHummingbirdBoost: 0,

    //Tepid Brahma Production
    tepidBrahmaCost: 2500,
    tepidBrahmaCount: 0,

    //Gaiix Production
    gaiixCount: 0,
    gaiixCost: 1000000000, //1 billion; multiplies by 1000 each time
    gaiixBuff: 1,

    //Commandture Variables
    commandtureCount: 0,
    commandtureCost: 1000000, //1 million; only one Commandture per run.
    commandtureBoost: 1,

    //Buzzerker Variables
    buzzerkerCount: 0,

    //Wizird Variables
    wizirdCount: 0,
    wizirdCost: 1200000,

    //Dungeon Variables
    dungeonClass: 0,
    dungeonHealth: 1,
    dungeonHealthCurrent: 1,
    dungeonDamage: 1,
    playerHealth: 10,
    playerHealthCurrent: 10,
    playerDamage: 1,
    playerAutoDamage: 0,
    playerAutoDamageCost: 1400000,
    playerMana: 0,
    playerCurrentMana: 0,
    playerManaRegen: 0,
    playerAutoHeal: 0,
    autoReviveTimer: 0,

    //Attack Spell
    fireSpellCost: 8,

    //Dungeon Rewards
    eggIdol: 0,
    eggIdolReward: 0,
    milkIdol: 0,
    milkIdolReward: 0,
    featherIdol: 0,
    featherIdolReward: 0,

    //Idol Variables
    eggIdolRaw: 0,
    eggIdolMult: 0,
    eggIdolFinal: 0,
    milkIdolRaw: 0,
    milkIdolMult: 0,
    milkIdolFinal: 0,
    featherIdolRaw: 0,
    featherIdolMult: 0,
    featherIdolFinal: 0,

    //Special Treasure Variables
    bronzebustard: 0,
    bronzeBustardReward: 0,
    bronzeBustardEggs: 0,
    bronzebustardMilk: 0,
    bronzeBustardFeathers: 0,
    silverLamiavian: 0,
    silverLamiavianReward: 0,
    silverLamiavianBoost: 1,
    goldSmew: 0,
    goldSmewReward: 0,
    platinumGoose: 0,
    platinumGooseReward: 0,
    platinumGooseMult: 1,
}

//EggMult Calculation
function eggMultCalc() {
    gameData.eggMult = 1
    gameData.eggMult += gameData.cragowaryBoost
    gameData.eggMult += gameData.eggIdolMult
    gameData.eggMult *= gameData.gaiixBuff
}

//MilkMult Calculation
function milkMultCalc() {
    gameData.milkMult = 1
    gameData.milkMult += gameData.milkIdolMult
    gameData.milkMult *= gameData.commandtureBoost
    gameData.milkMult *= gameData.gaiixBuff
}

//FeatherMult Calculation
function featherMultCalc() {
    gameData.featherMult = 1
    gameData.featherMult += gameData.featherIdolMult
    gameData.featherMult *= gameData.gaiixBuff
}

//Total Verdant Boost Calculation
function verdBoostCalc() {
    gameData.verdantBoost = gameData.apiformHummingbirdBoost
}

function verdMultCalc() {
    gameData.verdantMult = 1
}

//Click Production
function collectResources() {
    clickCalc()
    gameData.eggs += gameData.eggsPerClickFinal
    gameData.milk += gameData.milkPerClickFinal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
}

//Click Calculation
function clickCalc() {
    gameData.eggsPerClickFinal = gameData.eggsPerClickBase * gameData.eggMult
    gameData.milkPerClickFinal = gameData.milkPerClickBase * gameData.milkMult
}

//Increases Base Eggs Per Click
function addEggsPerClick() {
    if (gameData.eggs >= gameData.eggsPerClickCost) {
        gameData.eggs -= gameData.eggsPerClickCost
        gameData.eggsPerClickCost *= gameData.costMult
        gameData.eggsPerClickBase += 1
        gameData.turkeswineCount += 1
        clickCalc()
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("clickUpgrade").innerHTML = "Hatch a new Turkeswine (Current Count: " + gameData.turkeswineCount + ") Cost: " + gameData.eggsPerClickCost + " Eggs"
    }
}

//Increases Base Milk Per Click
function addMilkPerClick() {
    if (gameData.eggs >= gameData.milkPerClickCost) {
        gameData.eggs -= gameData.milkPerClickCost
        gameData.milkPerClickCost *= gameData.costMult
        gameData.milkPerClickBase += 1
        gameData.pedogeonCount += 1
        clickCalc()
        document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
        document.getElementById("clickMilkUpgrade").innerHTML = "Hatch a new Pedogeon (Current Count: " + gameData.pedogeonCount + ") Cost: " + gameData.milkPerClickCost + " Eggs"
    }
}

//Nestpecker Production
function nestpecker() {
    gameData.nestpeckerEggsTotal = gameData.nestpeckerCount * gameData.eggsPerClickFinal
    gameData.nestpeckerMilkTotal = gameData.nestpeckerCount * gameData.milkPerClickFinal
    gameData.eggs += gameData.nestpeckerEggsTotal
    gameData.milk += gameData.nestpeckerMilkTotal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
}

//Buying New Nestpecker (Autoclicker)
function newNestpecker() {
    if (gameData.eggs >= gameData.nestpeckerCost) {
        gameData.eggs -= gameData.nestpeckerCost
        gameData.nestpeckerCost *= gameData.costMult
        gameData.nestpeckerCount += 1
        clickCalc()
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addNestpecker").innerHTML = "Hatch a new Nestpecker (Current Count: " + gameData.nestpeckerCount + ") Cost: " + gameData.nestpeckerCost + " Eggs"
    }
}

//Sulphur Chicken Egg Calculations
function sulphurChickenCalc() {
    gameData.sulphurChickenIndiv = 1 + gameData.sulphurRoosterBoost
    gameData.sulphurChickenBase = gameData.sulphurChickenIndiv * gameData.sulphurHenCount
    gameData.sulphurChickenFinal = gameData.sulphurChickenBase * gameData.eggMult
    gameData.eggs += gameData.sulphurChickenFinal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
}

//Purchasing Sulphur Hens (Most basic egg producer.)
function newSulphurHen() {
    if (gameData.eggs >= gameData.sulphurHenCost) {
        gameData.eggs -= gameData.sulphurHenCost
        gameData.sulphurHenCost *= gameData.costMult
        gameData.sulphurHenCount += 1
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addSulphurHen").innerHTML = "Hatch a new Sulphur Hen (Current Count: " + gameData.sulphurHenCount + ") Cost: " + gameData.sulphurHenCost + " Eggs"
    }
}

//Purchasing Sulphur Roosters (Boosts Sulphur Hen egg production.)
function newSulphurRooster() {
    if (gameData.eggs >= gameData.sulphurRoosterCost) {
        gameData.eggs -= gameData.sulphurRoosterCost
        gameData.sulphurRoosterCost *= gameData.costMult
        gameData.sulphurRoosterCount += 1
        gameData.sulphurRoosterBoost += 1
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addSulphurRooster").innerHTML = "Hatch a new Sulphur Rooster (Current Count: " + gameData.sulphurRoosterCount + ") Cost: " + gameData.sulphurRoosterCost + " Eggs"
    }
}

//Buttewren Egg Calculations
function buttewren() {
    gameData.butteWrenTotal = 0.25 * gameData.buttewrenCount
    gameData.butteWrenFinal = gameData.eggMult * gameData.butteWrenTotal
    gameData.eggs += gameData.butteWrenFinal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
}

//Purchasing New Buttewrens (Tier 2 egg producer.)
function newButtewren() {
    if (gameData.eggs >= gameData.butteWrenCost) {
        gameData.eggs -= gameData.butteWrenCost
        gameData.butteWrenCost *= gameData.costMult
        gameData.buttewrenCount += 1
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addButtewren").innerHTML = "Hatch a new Buttewren (Current Count: " + gameData.buttewrenCount + ") Cost: " + gameData.butteWrenCost + " Eggs"
    }
}

//Purchasing New Albamoths (Reduces Buttewren Cost greatly.)
function newAlbamoth() {
    if (gameData.milk >= gameData.albamothCost) {
        gameData.milk -= gameData.albamothCost
        gameData.albamothCost *= gameData.costMult
        gameData.albamothCount += 1
        gameData.butteWrenCost /= 4
        document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
        document.getElementById("addAlbamoth").innerHTML = "Hatch a new Albamoth (Current Count: " + gameData.albamothCount + ") Cost: " + gameData.albamothCost + " Milk"
        document.getElementById("addButtewren").innerHTML = "Hatch a new Buttewren (Current Count: " + gameData.buttewrenCount + ") Cost: " + gameData.butteWrenCost + " Eggs"
    }
}

//Bruthrush Egg Calculations
function bruthrush() {
    gameData.bruthrushAdded = 7 + gameData.verdantBoost
    gameData.bruthrushBase = gameData.bruthrushAdded * gameData.verdantMult
    gameData.bruthrushTotal = gameData.bruthrushBase * gameData.bruthrushCount
    gameData.bruthrushFinal = gameData.bruthrushTotal * gameData.eggMult
    gameData.eggs += gameData.bruthrushFinal
}

//Purchasing new Bruthrushes (Tier 1 Verdant egg producer.)
function newBruthrush() {
    if (gameData.eggs >= gameData.bruthrushCost) {
        gameData.eggs -= gameData.bruthrushCost
        gameData.bruthrushCost *= gameData.costMult
        gameData.bruthrushCount += 1
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addBruthrush").innerHTML = "Hatch a new Bruthrush (Current Count: " + gameData.bruthrushCount + ") Cost: " + gameData.bruthrushCost + " Eggs"
    }
}

//Swarmduck Egg Calculations
function swarmDuck() {
    gameData.swarmDuckBase = 1
    gameData.swarmDuckBoost = 0.1 * gameData.swarmDuckCount
    gameData.swarmDuckMult = 1 + gameData.swarmDuckBoost
    gameData.swarmDuckIndiv = gameData.swarmDuckBase * gameData.swarmDuckMult
    gameData.swarmDuckTotal = gameData.swarmDuckIndiv * gameData.swarmDuckCount
    gameData.swarmDuckFinal = gameData.swarmDuckTotal * gameData.eggMult
    gameData.eggs += gameData.swarmDuckFinal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
}

//Purchasing New Swarm Ducks (Self-buffing egg producer.)
function newSwarmDuck() {
    if (gameData.eggs >= gameData.swarmDuckCost) {
        gameData.eggs -= gameData.swarmDuckCost
        gameData.swarmDuckCost *= gameData.costMult
        gameData.swarmDuckCount += 1
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addSwarmDuck").innerHTML = "Hatch a new Swarm Duck (Current Count: " + gameData.swarmDuckCount + ") Cost: " + gameData.swarmDuckCost + " Eggs"
    }
}

//===================
//========================
//SPECIAL UNIT CODE
//========================
//===================

//Prokareagle Egg Calculations
function prokareagle() {
    gameData.prokareagleBase = 0.1 * gameData.prokareagleCount
    gameData.prokareagleFinal = gameData.prokareagleBase * gameData.eggMult
    gameData.eggs += gameData.prokareagleFinal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
}

//Prokareagle Timer Adding
function prokareagleTimerAdd() {
    if (gameData.prokareagleCount >= 1) {
    gameData.prokareagleTimer += 1
    document.getElementById("prokareagleTimer").innerHTML = "Current Prokareagle time is " + gameData.prokareagleTimer + "."
    }
}

//Prokareagle Auto-Duping
function autoProkareagle() {
    if (gameData.prokareagleCount >= 1) {
        if (gameData.prokareagleTimer >= gameData.prokareagleLimit) {
        gameData.prokareagleCost *= gameData.costMult * gameData.prokareagleCount
        gameData.prokareagleTimer -= gameData.prokareagleLimit
        gameData.prokareagleLimit *= 1.5
        gameData.prokareagleCount *= 2
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("prokareagleLimit").innerHTML = "Current Prokareagle limit is " + gameData.prokareagleLimit + "."
        document.getElementById("addProkareagle").innerHTML = "Force Replicate new Prokareagles (Current Count: " + gameData.prokareagleCount + ") Cost: " + gameData.prokareagleCost + " Eggs"
        }
    }
}

//Purchasing/Duping Prokaeagles (Special self-replicating egg producer.)
function newProkareagle() {
    if (gameData.prokareagleCount == 0) {
        if (gameData.eggs >= gameData.prokareagleCost) {
            gameData.eggs -= gameData.prokareagleCost
            gameData.prokareagleCost = 10000
            gameData.prokareagleCount += 1
            document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
            document.getElementById("addProkareagle").innerHTML = "Force Recplicate new Prokareagles (Current Count: " + gameData.prokareagleCount + ") Cost: " + gameData.prokareagleCost + " Eggs"
        }
    } else {
        if (gameData.eggs >= gameData.prokareagleCost) {
            gameData.eggs -= gameData.prokareagleCost
            gameData.prokareagleCost *= gameData.costMult * gameData.prokareagleCount
            gameData.prokareagleCount *= 2
            document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
            document.getElementById("addProkareagle").innerHTML = "Force Replicate new Prokareagles (Current Count: " + gameData.prokareagleCount + ") Cost: " + gameData.prokareagleCost + " Eggs"
        }
    }
}

//Coding for Cragowaries (Tier 2 egg multiplier.)
function newCragowary() {
    if (gameData.milk >= gameData.cragowaryCost) {
        gameData.milk -= gameData.cragowaryCost
        gameData.cragowaryCost *= gameData.costMult
        gameData.cragowaryCount += 1
        gameData.cragowaryBoost += 0.15
        eggMultCalc()
        document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
        document.getElementById("addCragowary").innerHTML = "Hatch a new Cragowary (Current Count: " + gameData.cragowaryCount + ") Cost: " + gameData.cragowaryCost + " Milk"
    }
}

//===================
//========================
//MILK PRODUCER CODE
//========================
//===================

//Dromingo Milk Calculations
function dromingo() {
    gameData.dromingoTotal = 0.6 * gameData.dromingoCount
    gameData.dromingoFinal = gameData.milkMult * gameData.dromingoTotal
    gameData.milk += gameData.dromingoFinal
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
}

//Hatching new Dromingoes (Tier 1 Milk Producer)
function newDromingo() {
    if (gameData.milk >= gameData.dromingoCost) {
        gameData.milk -= gameData.dromingoCost
        gameData.dromingoCost *= gameData.costMult
        gameData.dromingoCount += 1
        document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
        document.getElementById("addDromingo").innerHTML = "Hatch a new Dromingo (Current Count: " + gameData.dromingoCount + ") Cost: " + gameData.dromingoCost + " Milk"
    }
}

//Udder Hen Milk Calculations
function udderHen() {
    gameData.udderHenTotal = 4 * gameData.udderHenCount
    gameData.udderHenFinal = gameData.udderHenTotal * gameData.milkMult
    gameData.milk += gameData.udderHenFinal
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
}

//Hatching new Udder Hens (Tier 2 Milk Producer)
function newUdderHen() {
    if (gameData.milk >= gameData.udderHenCost) {
        gameData.milk -= gameData.udderHenCost
        gameData.udderHenCost *= gameData.costMult
        gameData.udderHenCount += 1
        document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
        document.getElementById("addUdderHen").innerHTML = "Hatch a new Udder Hen (Current Count: " + gameData.udderHenCount + ") Cost: " + gameData.udderHenCost + " Milk"
    }
}

//Sulphur Matriarch Unit Production
function sulphurMatriarch() {
    gameData.sulphurMatriarchAdd = 1 * gameData.sulphurMatriarchCount
    gameData.sulphurHenCount += gameData.sulphurMatriarchAdd
    document.getElementById("addSulphurHen").innerHTML = "Hatch a new Sulphur Hen (Current Count: " + gameData.sulphurHenCount + ") Cost: " + gameData.sulphurHenCost + " Eggs"
}

//Hatching new Sulphur Matriarchs (Produces Sulphur Hens)
function newSulphurMatriarch() {
    if (gameData.milk >= gameData.sulphurMatriarchCost) {
        gameData.milk -= gameData.sulphurMatriarchCost
        gameData.sulphurMatriarchCost *= gameData.costMult
        gameData.sulphurMatriarchCount += 1
        document.getElementById("milkCollected").innerHTML = gameData.milk + "Milk"
        document.getElementById("addSulphurMatriarch").innerHTML = "Hatch a new Sulphur Matriarch (Current Count: " + gameData.sulphurMatriarchCount + ") Cost: " + gameData.sulphurMatriarchCost + " Milk"
    }
}

//Apiform Hummingbird Calculation
function apiformHummingbirdBoost() {
    gameData.apiformHummingbirdBoost = 2 * gameData.apiformHummingbirdCount
    verdBoostCalc()
}

//Hatching new Apiform Hummingbirds (Tier 1 Additive Verdant Boost)
function newApiformHummingbird() {
    if (gameData.eggs >= gameData.apiformHummingbirdCost) {
        gameData.eggs -= gameData.apiformHummingbirdCost
        gameData.apiformHummingbirdCost *= gameData.costMult
        gameData.apiformHummingbirdCount += 1
        apiformHummingbirdBoost()
        document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
        document.getElementById("addApiformHummingbird").innerHTML = "Hatch a new Apiform Hummingbird (Current Count: " + gameData.apiformHummingbirdCount + ") Cost: " + gameData.apiformHummingbirdCost + " Eggs"
    }
}

//Coding for Tepid Brahmas (Direct import from first build; reduces costMult.)
function newTepidBrahma() {
    if (gameData.tepidBrahmaCount <= 29) {
        if (gameData.eggs >= gameData.tepidBrahmaCost) {
            gameData.eggs -= gameData.tepidBrahmaCost
            gameData.tepidBrahmaCost *= 2
            gameData.tepidBrahmaCount += 1
            gameData.costMult -= 0.025
            document.getElementById("addTepidBrahma").innerHTML = "Hatch a new Tepid Brahma (Current Count: " + gameData.tepidBrahmaCount + ") Cost: " + gameData.tepidBrahmaCost + " Eggs"
        }
    } else {
        document.getElementById("addTepidBrahma").innerHTML = "Maximum Tepid Brahmas reached! (Current Count: " + gameData.tepidBrahmaCount + ")"
    }
}

//Gaiix Buff Calculation
function gaiixBoost() {
    gameData.gaiixBuff = 1 + gameData.gaiixCount
    eggMultCalc()
    milkMultCalc()
}

//Hatching New Gaiix (First Tier Prestige)
function newGaiix() {
    if (gameData.eggs >= gameData.gaiixCost) {
        gameData.eggs -= gameData.gaiixCost
        gameData.gaiixCost *= 1000
        gameData.gaiixCount += 1
        gaiixBoost()
        document.getElementById("addGaiix").innerHTML = "Hatch a new Gaiix (Current Count: " + gameData.gaiixCount + ") Cost: " + gameData.gaiixCost + " Eggs"
        gameData.eggsPerClickCost = 12
        document.getElementById("clickUpgrade").innerHTML = "Hatch a new Turkeswine (Current Count: " + gameData.turkeswineCount + ") Cost: " + gameData.eggsPerClickCost + " Eggs"
        gameData.milkPerClickCost = 3600
        document.getElementById("clickMilkUpgrade").innerHTML = "Hatch a new Pedogeon (Current Count: " + gameData.pedogeonCount + ") Cost: " + gameData.milkPerClickCost + " Eggs"
        gameData.nestpeckerCost = 4119
        document.getElementById("addNestpecker").innerHTML = "Hatch a new Nestpecker (Current Count: " + gameData.nestpeckerCount + ") Cost: " + gameData.nestpeckerCost + " Eggs"
        gameData.sulphurHenCost = 18
        document.getElementById("addSulphurHen").innerHTML = "Hatch a new Sulphur Hen (Current Count: " + gameData.sulphurHenCount + ") Cost: " + gameData.sulphurHenCost + " Eggs"
        gameData.sulphurRoosterCost = 680
        document.getElementById("addSulphurRooster").innerHTML = "Hatch a new Sulphur Rooster (Current Count: " + gameData.sulphurRoosterCount + ") Cost: " + gameData.sulphurRoosterCost + " Eggs"
        gameData.sulphurMatriarchCost = 11000
        document.getElementById("addSulphurMatriarch").innerHTML = "Hatch a new Sulphur Matriarch (Current Count: " + gameData.sulphurMatriarchCount + ") Cost: " + gameData.sulphurMatriarchCost + " Milk"
        gameData.butteWrenCost = 71
        document.getElementById("addButtewren").innerHTML = "Hatch a new Buttewren (Current Count: " + gameData.buttewrenCount + ") Cost: " + gameData.butteWrenCost + " Eggs"
        gameData.albamothCost = 450
        document.getElementById("addAlbamoth").innerHTML = "Hatch a new Albamoth (Current Count: " + gameData.albamothCount + ") Cost: " + gameData.albamothCost + " Milk"
        gameData.bruthrushCost = 719
        document.getElementById("addBruthrush").innerHTML = "Hatch a new Bruthrush (Current Count: " + gameData.bruthrushCount + ") Cost: " + gameData.bruthrushCost + " Eggs"
        gameData.swarmDuckCost = 209
        document.getElementById("addSwarmDuck").innerHTML = "Hatch a new Swarm Duck (Current Count: " + gameData.swarmDuckCount + ") Cost: " + gameData.swarmDuckCost + " Eggs"
        gameData.cragowaryCost = 850
        document.getElementById("addCragowary").innerHTML = "Hatch a new Cragowary (Current Cost: " + gameData.cragowaryCount + ") Cost: " + gameData.cragowaryCost + ""
        gameData.dromingoCost = 25
        document.getElementById("addDromingo").innerHTML = "Hatch a new Dromingo (Current Count: " + gameData.dromingoCount + ") Cost: " + gameData.dromingoCost + " Milk"
        gameData.udderHenCost = 103
        document.getElementById("addUdderHen").innerHTML = "Hatch a new Udder Hen (Current Count: " + gameData.udderHenCount + ") Cost: " + gameData.udderHenCost + " Milk"
        gameData.prokareagleCost = 10000
        gameData.prokareagleLimit = 1
        document.getElementById("addProkareagle").innerHTML = "Force Replicate new Prokareagles (Current Count: " + gameData.prokareagleCount + ") Cost: " + gameData.prokareagleCost + " Eggs"
        gameData.apiformHummingbirdCost = 780
        document.getElementById("addApiformHummingbird").innerHTML = "Hatch a new Apiform Hummingbird (Current Count: " + gameData.apiformHummingbirdCount + ") Cost: " + gameData.apiformHummingbirdCost + " Eggs"
    }
}

//===================
//========================
//DUNGEONS AND COMBAT CODE
//========================
//===================

//Commandture Multiplier
function commandtureBoost() {
    gameData.commandtureBoost = 2 * gameData.commandtureCount
    milkMultCalc()
}

//Hatch a Commanture; the gatekeeper of the realm of combat.
function hatchCommandture() {
    if (gameData.commandtureCount == 0) {
        if (gameData.milk >= gameData.commandtureCost) {
            gameData.milk -= gameData.commandtureCost
            gameData.commandtureCount += 1
            gameData.eggIdolReward = 1
            gameData.milkIdolReward = 1
            gameData.featherIdolReward = 1
            commandtureBoost()
            document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
            document.getElementById("addCommandture").innerHTML = "Your Commandture has been hatched, granting you access to the depths of the dungeoneering system (as well as a large bonus to milk production)."
            document.getElementById("playerHealth").innerHTML = "Player Party Health: " + gameData.playerHealthCurrent + "/" + gameData.playerHealth + ""
            document.getElementById("playerMana").innerHTML = "Player Mana: " + gameData.playerCurrentMana + "/" + gameData.playerMana + ""
            document.getElementById("playerManaRegen").innerHTML = "Player Mana regeneration is " + gameData.playerManaRegen + " per 3 seconds."
            document.getElementById("playerAttack").innerHTML = "Player Attack: " + gameData.playerDamage + ""
            document.getElementById("playerAutoAttack").innerHTML = "Player Party Attack: " + gameData.playerAutoDamage + ""
            document.getElementById("attackDungeon").innerHTML = "Attack the dungeon"
            document.getElementById("castFireSpell").innerHTML = "Cast Fire Spell (Cost: 8 Mana)"
            document.getElementById("addWizird").innerHTML = "Hatch a new Wizird (Current Count: " + gameData.wizirdCount + ") Cost: " + gameData.wizirdCost + " Eggs"
            document.getElementById("addBuzzerker").innerHTML = "Hatch a new Buzzerker (Current Count: 0) Cost: 1400000 Eggs"
            
            document.getElementById("dungeonName").innerHTML = "Stone Dungeon"
            document.getElementById("dungeonHealth").innerHTML = "Dungeon Health: " + gameData.dungeonHealthCurrent + "/" + gameData.dungeonHealth + ""
            document.getElementById("dungeonAttack").innerHTML = "Dungeon Attack: " + gameData.dungeonDamage + ""
        }
    }
}

//Player auto-attack damage.
function autoAttackDamage() {
    gameData.playerAutoDamage = 0
    gameData.playerAutoDamage += 2 * gameData.buzzerkerCount
    document.getElementById("playerAutoAttack").innerHTML = "Player Party Attack: " + gameData.playerAutoDamage + ""
}

//Player health.
function playerHealth() {
    gameData.playerHealth = 10
    gameData.playerHealth += 1 * gameData.buzzerkerCount
    document.getElementById("playerHealth").innerHTML = "Player Party Health: " + gameData.playerHealthCurrent + "/" + gameData.playerHealth + ""
}

//Hatch a Buzzerker (Basic player stat buffing unit).
function hatchBuzzerker() {
    if (gameData.commandtureCount == 1) {
        if (gameData.eggs >= gameData.playerAutoDamageCost) {
            gameData.eggs -= gameData.playerAutoDamageCost
            gameData.playerAutoDamageCost *= gameData.costMult
            gameData.buzzerkerCount += 1
            autoAttackDamage()
            playerHealth()
            document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
            document.getElementById("addBuzzerker").innerHTML = "Hatch a new Buzzerker (Current Count: " + gameData.buzzerkerCount + ") Cost: " + gameData.playerAutoDamageCost + " Eggs"
        }
    }
}

function autoAttackDungeon() {
    if (gameData.commandtureCount == 1) {
        if (gameData.dungeonHealthCurrent > 0) {
            if (gameData.playerHealthCurrent > 0) {
                gameData.dungeonHealthCurrent -= gameData.playerAutoDamage
                document.getElementById("dungeonHealth").innerHTML = "Dungeon Health: " + gameData.dungeonHealthCurrent + "/" + gameData.dungeonHealth + ""
                document.getElementById("playerHealth").innerHTML = "Player Party Health: " + gameData.playerHealthCurrent + "/" + gameData.playerHealth + ""
            }
        }
    }
}

//Wizird hatching (Click damage buff and basic mana generator.)
function hatchWizird() {
    if (gameData.commandtureCount == 1) {
        if  (gameData.eggs >= gameData.wizirdCost) {
            gameData.eggs -= gameData.wizirdCost
            gameData.wizirdCost *= gameData.costMult
            gameData.wizirdCount += 1
            playerDamage()
            playerMana()
            document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
            document.getElementById("addWizird").innerHTML = "Hatch a new Wizird (Current Count: " + gameData.wizirdCount + ") Cost: " + gameData.wizirdCost + " Eggs"
        }
    }
}

function playerDamage() {
    gameData.playerDamage = 1
    gameData.playerDamage += 1 * gameData.wizirdCount
    document.getElementById("playerAttack").innerHTML = "Player Attack: " + gameData.playerDamage + ""
}

function playerManaRegen() {
    if (gameData.playerCurrentMana < gameData.playerMana) {
        gameData.playerCurrentMana += gameData.playerManaRegen
        document.getElementById("playerMana").innerHTML = "Player Mana: " + gameData.playerCurrentMana + "/" + gameData.playerMana + ""
    }
}

function playerMana() {
    gameData.playerMana = 0
    gameData.playerMana += 2 * gameData.wizirdCount
    gameData.playerMana += 15 * gameData.silverLamiavian
    gameData.playerManaRegen = 0
    gameData.playerManaRegen += 1 * gameData.wizirdCount
    gameData.playerManaRegen += 6 * gameData.silverLamiavian
    document.getElementById("playerMana").innerHTML = "Player Mana: " + gameData.playerCurrentMana + "/" + gameData.playerMana + ""
    document.getElementById("playerManaRegen").innerHTML = "Player Mana regeneration is " + gameData.playerManaRegen + " per 3 seconds."
}

function attackDungeon() {
    if (gameData.commandtureCount == 1) {
        if (gameData.dungeonHealthCurrent > 0) {
            gameData.dungeonHealthCurrent -= gameData.playerDamage
            document.getElementById("dungeonHealth").innerHTML = "Dungeon Health: " + gameData.dungeonHealthCurrent + "/" + gameData.dungeonHealth + ""
        } else {
            loot()
            newDungeon()
        }
    }
}

function fireSpell() {
    if (gameData.commandtureCount == 1) {
        if (gameData.playerCurrentMana >= gameData.fireSpellCost) {
            gameData.playerCurrentMana -= gameData.fireSpellCost
            gameData.dungeonHealthCurrent -= 10 * gameData.playerDamage
            document.getElementById("dungeonHealth").innerHTML = "Dungeon Health: " + gameData.dungeonHealthCurrent + "/" + gameData.dungeonHealth + ""
            document.getElementById("playerMana").innerHTML = "Player Mana: " + gameData.playerCurrentMana + "/" + gameData.playerMana + ""
        }
    }
}

//Idol Boosts
function idolProductionCalc() {
    gameData.eggIdolRaw = 100 * gameData.eggIdol
    gameData.milkIdolRaw = 10 * gameData.milkIdol
    gameData.featherIdolRaw = 1 * gameData.featherIdol
    gameData.eggIdolMult = 0.25 * gameData.eggIdol
    gameData.milkIdolMult = 0.25 * gameData.milkIdol
    gameData.featherIdolMult = 0.25 * gameData.featherIdol
    eggMultCalc()
    milkMultCalc()
    featherMultCalc()
    gameData.eggIdolFinal = gameData.eggIdolRaw * gameData.eggMult
    gameData.milkIdolFinal = gameData.milkIdolRaw * gameData.milkMult
    gameData.featherIdolFinal = gameData.featherIdolRaw * gameData.featherMult
}

//Idol Standalone Production
function idolProduction() {
    gameData.eggs += gameData.eggIdolFinal
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
    gameData.milk += gameData.milkIdolFinal
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
    gameData.feathers += gameData.featherIdolFinal
    document.getElementById("feathersCollected").innerHTML = gameData.feathers + " Feathers"
}

//Bronze Buzzard Production
function specialDungeonCalcs() {
    gameData.bronzeBustardEggs = 10000 * gameData.bronzebustard
    gameData.bronzebustardMilk = 1000 * gameData.bronzebustard
    gameData.bronzeBustardFeathers = 10 * gameData.bronzebustard
}

//
function platinumMultiplier() {
    gameData.platinumGooseMult = 1
    gameData.platinumGooseMult += 0.1 * gameData.platinumGoose
    gameData.eggs *= gameData.platinumGooseMult
    gameData.milk *= gameData.platinumGooseMult
    gameData.feathers *= gameData.platinumGooseMult
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
    document.getElementById("feathersCollected").innerHTML = gameData.feathers + " Feathers"
}

function specialDungeonProduction() {
    gameData.eggs += gameData.bronzeBustardEggs
    document.getElementById("eggsCollected").innerHTML = gameData.eggs + " Eggs"
    gameData.milk += gameData.bronzebustardMilk
    document.getElementById("milkCollected").innerHTML = gameData.milk + " Milk"
    gameData.feathers += gameData.bronzeBustardFeathers
    document.getElementById("feathersCollected").innerHTML = gameData.feathers + " Feathers"
}

//Grants Dungeon Rewards
function loot() {
    gameData.eggIdol += gameData.eggIdolReward
    document.getElementById("eggIdolsRetrieved").innerHTML = "Egg Idols Retrieved: " + gameData.eggIdol + ""
    gameData.milkIdol += gameData.milkIdolReward
    document.getElementById("milkIdolsRetrieved").innerHTML = "Milk Idols Retrieved: " + gameData.milkIdol + ""
    gameData.featherIdol += gameData.featherIdolReward
    document.getElementById("featherIdolsRetrieved").innerHTML = "Feather Idols Retrieved: " + gameData.milkIdol + ""
    
    gameData.bronzebustard += gameData.bronzeBustardReward
    document.getElementById("bronzeBustardsRetrieved").innerHTML = "Bronze Bustards Retrieved: " + gameData.bronzebustard + ""
    gameData.silverLamiavian += gameData.silverLamiavianReward
    //Silver Lamiavians provide massive mana boosts.
    document.getElementById("silverLamiaviansRetrieved").innerHTML = "Silver Lamiavians Retrieved: " + gameData.silverLamiavian + ""
    playerMana()

    //Only run this part of the command if the player is looting a gold smew (performance aid).
    if (gameData.goldSmewReward > 0) {
    gameData.goldSmew += gameData.goldSmewReward
    document.getElementById("goldSmewsRetrieved").innerHTML = "Gold Smews Retrieved: " + gameData.goldSmew + ""
        gameData.eggsPerClickCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("clickUpgrade").innerHTML = "Hatch a new Turkeswine (Current Count: " + gameData.turkeswineCount + ") Cost: " + gameData.eggsPerClickCost + " Eggs"
        gameData.milkPerClickCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("clickMilkUpgrade").innerHTML = "Hatch a new Pedogeon (Current Count: " + gameData.pedogeonCount + ") Cost: " + gameData.milkPerClickCost + " Eggs"
        gameData.nestpeckerCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addNestpecker").innerHTML = "Hatch a new Nestpecker (Current Count: " + gameData.nestpeckerCount + ") Cost: " + gameData.nestpeckerCost + " Eggs"
        gameData.sulphurHenCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addSulphurHen").innerHTML = "Hatch a new Sulphur Hen (Current Count: " + gameData.sulphurHenCount + ") Cost: " + gameData.sulphurHenCost + " Eggs"
        gameData.sulphurRoosterCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addSulphurRooster").innerHTML = "Hatch a new Sulphur Rooster (Current Count: " + gameData.sulphurRoosterCount + ") Cost: " + gameData.sulphurRoosterCost + " Eggs"
        gameData.sulphurMatriarchCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addSulphurMatriarch").innerHTML = "Hatch a new Sulphur Matriarch (Current Count: " + gameData.sulphurMatriarchCount + ") Cost: " + gameData.sulphurMatriarchCost + " Milk"
        gameData.butteWrenCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addButtewren").innerHTML = "Hatch a new Buttewren (Current Count: " + gameData.buttewrenCount + ") Cost: " + gameData.butteWrenCost + " Eggs"
        gameData.albamothCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addAlbamoth").innerHTML = "Hatch a new Albamoth (Current Count: " + gameData.albamothCount + ") Cost: " + gameData.albamothCost + " Milk"
        gameData.bruthrushCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addBruthrush").innerHTML = "Hatch a new Bruthrush (Current Count: " + gameData.bruthrushCount + ") Cost: " + gameData.bruthrushCost + " Eggs"
        gameData.swarmDuckCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addSwarmDuck").innerHTML = "Hatch a new Swarm Duck (Current Count: " + gameData.swarmDuckCount + ") Cost: " + gameData.swarmDuckCost + " Eggs"
        gameData.cragowaryCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addCragowary").innerHTML = "Hatch a new Cragowary (Current Cost: " + gameData.cragowaryCount + ") Cost: " + gameData.cragowaryCost + ""
        gameData.dromingoCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addDromingo").innerHTML = "Hatch a new Dromingo (Current Count: " + gameData.dromingoCount + ") Cost: " + gameData.dromingoCost + " Milk"
        gameData.udderHenCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addUdderHen").innerHTML = "Hatch a new Udder Hen (Current Count: " + gameData.udderHenCount + ") Cost: " + gameData.udderHenCost + " Milk"
        gameData.prokareagleCost *= 0.9 ** gameData.goldSmewReward
        gameData.prokareagleLimit *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addProkareagle").innerHTML = "Force Replicate new Prokareagles (Current Count: " + gameData.prokareagleCount + ") Cost: " + gameData.prokareagleCost + " Eggs"
        gameData.apiformHummingbirdCost *= 0.9 ** gameData.goldSmewReward
        document.getElementById("addApiformHummingbird").innerHTML = "Hatch a new Apiform Hummingbird (Current Count: " + gameData.apiformHummingbirdCount + ") Cost: " + gameData.apiformHummingbirdCost + " Eggs"
    }

    gameData.platinumGoose += gameData.platinumGooseReward
    document.getElementById("platinumnGeeseRetrieved").innerHTML = "Platinum Geese Retrieved: " + gameData.platinumGoose + ""

    //After doling out rewards, set all rewards back to 0
    gameData.eggIdolReward = 0
    gameData.milkIdolReward = 0
    gameData.featherIdolReward = 0
    gameData.bronzeBustardReward = 0
    gameData.silverLamiavianReward = 0
    gameData.goldSmewReward = 0
    gameData.platinumGooseReward = 0
    
    //Update production values
    idolProductionCalc()
    specialDungeonCalcs()
}

//Randomly generates a new Dungeon
function newDungeon() {
    gameData.dungeonHealth *= 2
    gameData.dungeonDamage += 2
    gameData.dungeonHealthCurrent = gameData.dungeonHealth
    document.getElementById("dungeonHealth").innerHTML = "Dungeon Health: " + gameData.dungeonHealthCurrent + "/" + gameData.dungeonHealth + ""
    document.getElementById("dungeonAttack").innerHTML = "Dungeon Attack: " + gameData.dungeonDamage + ""
    var d = Math.floor(Math.random() * 10)
    switch(d) {
        case 0:
            gameData.dungeonClass = 0
            gameData.eggIdolReward = 2
            gameData.milkIdolReward = 0
            gameData.featherIdolReward = 1
            gameData.bronzeBustardReward = 1
            document.getElementById("dungeonName").innerHTML = "Bronze Dungeon"
        break;
        case 1:
            gameData.dungeonClass = 0
            gameData.eggIdolReward = 1
            gameData.milkIdolReward = 1
            gameData.featherIdolReward = 1
            gameData.bronzeBustardReward = 1
            document.getElementById("dungeonName").innerHTML = "Bronze Dungeon"
        break;
        case 2:
        gameData.dungeonClass = 0
            gameData.eggIdolReward = 0
            gameData.milkIdolReward = 2
            gameData.featherIdolReward = 1
            gameData.bronzeBustardReward = 1
            document.getElementById("dungeonName").innerHTML = "Bronze Dungeon"
        break;
        case 3:
            gameData.dungeonClass = 0
            gameData.eggIdolReward = 1
            gameData.milkIdolReward = 0
            gameData.featherIdolReward = 2
            gameData.bronzeBustardReward = 1
            document.getElementById("dungeonName").innerHTML = "Bronze Dungeon"
        break;
        case 4:
            gameData.dungeonClass = 1
            gameData.eggIdolReward = 3
            gameData.milkIdolReward = 2
            gameData.featherIdolReward = 1
            gameData.silverLamiavianReward = 1
            document.getElementById("dungeonName").innerHTML = "Silver Dungeon"
        break;
        case 5:
            gameData.dungeonClass = 1
            gameData.eggIdolReward = 1
            gameData.milkIdolReward = 3
            gameData.featherIdolReward = 2
            gameData.silverLamiavianReward = 1
            document.getElementById("dungeonName").innerHTML = "Silver Dungeon"
        break;
        case 6:
            gameData.dungeonClass = 1
            gameData.eggIdolReward = 2
            gameData.milkIdolReward = 1
            gameData.featherIdolReward = 3
            gameData.silverLamiavianReward = 1
            document.getElementById("dungeonName").innerHTML = "Silver Dungeon"
        break;
        case 7:
            gameData.dungeonClass = 2
            gameData.eggIdolReward = 4
            gameData.milkIdolReward = 2
            gameData.featherIdolReward = 3
            gameData.goldSmewReward = 1
            document.getElementById("dungeonName").innerHTML = "Gold Dungeon"
        break;
        case 8:
            gameData.dungeonClass = 2
            gameData.eggIdolReward = 2
            gameData.milkIdolReward = 4
            gameData.featherIdolReward = 3
            gameData.goldSmewReward = 1
            document.getElementById("dungeonName").innerHTML = "Gold Dungeon"
        break;
        case 9:
            gameData.dungeonClass = 3
            gameData.eggIdolReward = 4
            gameData.milkIdolReward = 4
            gameData.featherIdolReward = 4
            gameData.platinumGooseReward = 1
            document.getElementById("dungeonName").innerHTML = "Platinum Dungeon"
        break;
    }
}

//10 Minute Loop
var mainGameLoop = window.setInterval(function() {
    sulphurMatriarch()
}, 600000)

//5 Minute Loop
var mainGameLoop = window.setInterval(function() {
}, 300000)

//1 Minute Loop
var mainGameLoop = window.setInterval(function() {
    prokareagleTimerAdd()
    autoProkareagle()
}, 60000)

//10 Second Loop
var mainGameLoop = window.setInterval(function() {
    prokareagle()
}, 10000)

//5 Second Loop
var mainGameLoop = window.setInterval(function() {
    platinumMultiplier()
}, 5000)

//3 Second Loop
var mainGameLoop = window.setInterval(function() {
    autoAttackDungeon()
    playerManaRegen()
}, 3000)

//1 Second Loop
var mainGameLoop = window.setInterval(function() {
    sulphurChickenCalc()
    swarmDuck()
    udderHen()
    bruthrush()
    idolProduction()
}, 1000)

//0.5 Second Loop
var mainGameLoop = window.setInterval(function() {
    dromingo()
    nestpecker()
    specialDungeonProduction()
}, 500)

//0.1 Second Loop
var mainGameLoop = window.setInterval(function() {
    buttewren()
    eggMultCalc()
}, 100)