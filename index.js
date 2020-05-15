var monsterData = {
    name: "Monster",
    size: "medium",
    type: "humanoid",
    tag: "",
    alignment: "neutral",

    speed: 30,
    burrowSpeed: 0,
    climbSpeed: 0,
    flySpeed: 0,
    swimSpeed: 0,

    strPoints: 10,
    dexPoints: 10,
    conPoints: 10,
    intPoints: 10,
    wisPoints: 10,
    chaPoints: 10,

    cr: 1,

    blindsight: 0,
    darkvision: 0,
    tremorsense: 0,
    truesight: 0,
    telepathy: 0,

    hpText: "4 (1d8)"
};

function getAllVariables(){
    //type data
    monsterData.name = $('#name-input').val().trim();
    monsterData.size = $('#size-input').val().toLowerCase();
    monsterData.type = $('#type-input').val();
    monsterData.tag = $('#tag-input').val().trim();
    monsterData.alignment = $('#alignment-input').val().trim();


    //stats
    monsterData.strPoints = $("#str-score").val();
    monsterData.dexPoints = $("#dex-score").val();
    monsterData.conPoints = $("#con-score").val();
    monsterData.intPoints = $("#int-score").val();
    monsterData.wisPoints = $("#wis-score").val();
    monsterData.chaPoints = $("#cha-score").val();

    //senses
    monsterData.blindsight = $("#blindsight-input").val();
    monsterData.darkvision = $("#darkvision-input").val();
    monsterData.tremorsense = $("#tremorsense-input").val();
    monsterData.truesight = $("#truesight-input").val();

    //hp stuff
    monsterData.hpText = $('#hp-input').val();
}

//returns the string to be dislpayed in the speed portion of stat block 
function getSpeed(){
    let speedArr = [monsterData.speed + " ft."];
    if(monsterData.burrowSpeed > 0){
        speedArr.push("burrow " + monsterData.burrowSpeed + " ft.");
    }
    if(monsterData.climbSpeed > 0){
        speedArr.push("climb " + monsterData.climbSpeed + " ft.");
    }
    if(monsterData.flySpeed > 0){
        speedArr.push("fly " + monsterData.flySpeed + " ft.");
    }
    if(monsterData.swimSpeed > 0){
        speedArr.push("swim " + monsterData.swimSpeed + " ft.");
    }
    return speedArr.join(", ");
}

//returns string to be displayed under senses portion of stat block
function getSenses(){
    let sensesArr = [];
    if(monsterData.blindsight > 0){
        sensesArr.push("bindsite " + monsterData.blindsight + " ft.");
    }
    if(monsterData.darkvision > 0){
        sensesArr.push("darkvision " + monsterData.darkvision + " ft.");
    }
    if(monsterData.tremorsense > 0){
        sensesArr.push("tremorsense " + monsterData.tremorsense + " ft.");
    }
    if(monsterData.truesight > 0){
        sensesArr.push("truesite " + monsterData.truesight + " ft.");
    }
    return sensesArr.join(", ");
}