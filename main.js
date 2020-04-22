var gameData = {
    //Basic Resources
    eggs: 0,
    milk: 0,

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
    eggMultBase: 1,
    eggMult: 1,
    milkMult: 1,
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
    tepidBrahmaCount: 0
}

//EggMult Calculation
function eggMultCalc() {
    gameData.eggMult = gameData.cragowaryBoost + gameData.eggMultBase
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
function  clickCalc() {
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

//1 Second Loop
var mainGameLoop = window.setInterval(function() {
    sulphurChickenCalc()
    swarmDuck()
    udderHen()
    bruthrush()
}, 1000)

//0.5 Second Loop
var mainGameLoop = window.setInterval(function() {
    dromingo()
    nestpecker()
}, 500)

//0.1 Second Loop
var mainGameLoop = window.setInterval(function() {
    buttewren()
    eggMultCalc()
}, 100)