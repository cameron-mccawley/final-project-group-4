var monsterData = {
    name: "Monster",
    size: "medium",
    type: "humanoid",
    tag: "",
    alignment: "neutral",
    typeString: "",

    speed: 30,
    burrowSpeed: 0,
    climbSpeed: 0,
    flySpeed: 0,
    swimSpeed: 0,
    speedString: "",

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

    sensesString: "",

    hpText: "4 (1d8)", //screw actually calculating, trust the user to enter in these things correctly
    acText: "16 (natural armor)"

};



//gets ability score modifier
function getMod(score){
    return Math.floor(score / 2) - 5;
}

function updateMod(stat){
    $("#" + stat + "-mod").html(getPlusOrMinus(getMod($("#" + stat + "-score").val())));
}

function getPlusOrMinus(stat){
    if(stat > 0){
        return "+" + stat;
    }else{
        return stat;
    }
}

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

    //hp and ac stuff
    monsterData.hpText = $('#hp-input').val();
    monsterData.acText = $('#ac-input').val();

    //speed
    monsterData.speed = $('#normal-input').val();
    monsterData.burrowSpeed = $('#burrow-input').val();
    monsterData.climbSpeed = $('#climb-input').val();
    monsterData.flySpeed = $('#fly-input').val();
    monsterData.swimSpeed = $('#swim-input').val();

    //cr
    monsterData.cr = $('#cr-input').val();

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
        sensesArr.push("blindsite " + monsterData.blindsight + " ft.");
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

//called when the user clicks the generate statblock button
function generateStatblock(){
    getAllVariables();
    let statBlock = $('#stat-block');

    $('#monster-name').html(monsterData.name);
    $('#monster-type').html(monsterData.size + " " + monsterData.type + (monsterData.tag == "" ? ", " : " (" + monsterData.tag + "), ") + monsterData.alignment);
    $('#armor-class').html(monsterData.acText); //need to format this properly
    $('#hit-points').html(monsterData.hpText);
    $('#speed').html(getSpeed());
    $('#strpts').html(monsterData.strPoints + " (" + getPlusOrMinus(getMod(monsterData.strPoints)) + ")");
    $('#dexpts').html(monsterData.dexPoints + " (" + getPlusOrMinus(getMod(monsterData.dexPoints)) + ")");
    $('#conpts').html(monsterData.conPoints + " (" + getPlusOrMinus(getMod(monsterData.conPoints)) + ")");
    $('#intpts').html(monsterData.intPoints + " (" + getPlusOrMinus(getMod(monsterData.intPoints)) + ")");
    $('#wispts').html(monsterData.wisPoints + " (" + getPlusOrMinus(getMod(monsterData.wisPoints)) + ")");
    $('#chapts').html(monsterData.chaPoints + " (" + getPlusOrMinus(getMod(monsterData.chaPoints)) + ")");
    $('#senses').html(getSenses());

    $('#challenge-rating').html(monsterData.cr);
}



/*Misc. string formatting funcitons*/

function uppercase_first(some_string){
  /*some_string.toLowerCase();*/    //Change all to lowercase
  return some_string.charAt(0).toUpperCase() + some_string.slice(1);
}

function uppercase_all(some_string){
  return some_string.toUpperCase;
}

function lowercase_all(some_string){
  return some_string.toLowerCase;
}

function italics(some_string){
  var temp = some_string.italics();
  alert(temp.italics());
  return temp;
}

function bold(some_string){
  var temp = some_string.bold();
  alert(temp.bold());
  return temp;
}

/*
Function to do:
1.Underline
2.Revert to normal
3.??
4.??
*/

//Feel free to add to the list above.
