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

    strPointsS: "",
    dexPointsS: "",
    conPointsS: "",
    intPointsS: "",
    wisPointsS: "",
    chaPointsS: "",

    cr: 1,

    passivePerception: 0,
    blindsight: 0,
    darkvision: 0,
    tremorsense: 0,
    truesight: 0,

    sensesString: "",

    hpText: "4 (1d8)", //screw actually calculating, trust the user to enter in these things correctly
    acText: "16 (natural armor)",

    skillsString: ""
};

function getSkills(){
    let skills_arr = [];
    let prof_mod = 2;
    if($('#acrobatics').prop("checked")){
        skills_arr.push("Acrobatics " + getPlusOrMinus(prof_mod + getMod(monsterData.dexPoints)));
    }
    if($('#animal-handling').prop("checked")){
        skills_arr.push("Animal Handling " + getPlusOrMinus(prof_mod + getMod(monsterData.wisPoints)));
    }
    if($('#arcana').prop("checked")){
        skills_arr.push("Arcana " + getPlusOrMinus(prof_mod + getMod(monsterData.intPoints)));
    }
    if($('#athletics').prop("checked")){
        skills_arr.push("Athletics " + getPlusOrMinus(prof_mod + getMod(monsterData.strPoints)));
    }
    if($('#deception').prop("checked")){
        skills_arr.push("deception " + getPlusOrMinus(prof_mod + getMod(monsterData.chaPoints)));
    }
    if($('#history').prop("checked")){
        skills_arr.push("History " + getPlusOrMinus(prof_mod + getMod(monsterData.intPoints)));
    }
    if($('#insight').prop("checked")){
        skills_arr.push("Insight " + getPlusOrMinus(prof_mod + getMod(monsterData.wisPoints)));
    }
    if($('#intimidation').prop("checked")){
        skills_arr.push("Intimidation " + getPlusOrMinus(prof_mod + getMod(monsterData.chaPoints)));
    }
    if($('#investigation').prop("checked")){
        skills_arr.push("Investigation " + getPlusOrMinus(prof_mod + getMod(monsterData.intPoints)));
    }
    if($('#medicine').prop("checked")){
        skills_arr.push("Medicine " + getPlusOrMinus(prof_mod + getMod(monsterData.wisPoints)));
    }
    if($('#nature').prop("checked")){
        skills_arr.push("Nature " + getPlusOrMinus(prof_mod + getMod(monsterData.intPoints)));
    }
    if($('#perception').prop("checked")){
        skills_arr.push("Perception " + getPlusOrMinus(prof_mod + getMod(monsterData.wisPoints)));
    }
    if($('#performance').prop("checked")){
        skills_arr.push("Performance " + getPlusOrMinus(prof_mod + getMod(monsterData.chaPoints)));
    }
    if($('#persuasion').prop("checked")){
        skills_arr.push("Persuasion " + getPlusOrMinus(prof_mod + getMod(monsterData.chaPoints)));
    }
    if($('#religion').prop("checked")){
        skills_arr.push("Religion " + getPlusOrMinus(prof_mod + getMod(monsterData.intPoints)));
    }
    if($('#sleight-of-hand').prop("checked")){
        skills_arr.push("Sleight of Hand " + getPlusOrMinus(prof_mod + getMod(monsterData.dexPoints)));
    }
    if($('#stealth').prop("checked")){
        skills_arr.push("Stealth " + getPlusOrMinus(prof_mod + getMod(monsterData.dexPoints)));
    }
    if($('#survival').prop("checked")){
        skills_arr.push("Survival " + getPlusOrMinus(prof_mod + getMod(monsterData.wisPoints)));
    }
    if(skills_arr.length == 0){
        return "—";
    }
     return skills_arr.join(", ");
}



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
    monsterData.typeString = (monsterData.size + " " + monsterData.type + (monsterData.tag == "" ? ", " : " (" + monsterData.tag + "), ") + monsterData.alignment);


    //stats
    monsterData.strPoints = $("#str-score").val();
    monsterData.dexPoints = $("#dex-score").val();
    monsterData.conPoints = $("#con-score").val();
    monsterData.intPoints = $("#int-score").val();
    monsterData.wisPoints = $("#wis-score").val();
    monsterData.chaPoints = $("#cha-score").val();

    monsterData.strPointsS = (monsterData.strPoints + " (" + getPlusOrMinus(getMod(monsterData.strPoints)) + ")");
    monsterData.dexPointsS = (monsterData.dexPoints + " (" + getPlusOrMinus(getMod(monsterData.dexPoints)) + ")");
    monsterData.conPointsS = (monsterData.conPoints + " (" + getPlusOrMinus(getMod(monsterData.conPoints)) + ")");
    monsterData.intPointsS = (monsterData.intPoints + " (" + getPlusOrMinus(getMod(monsterData.intPoints)) + ")");
    monsterData.wisPointsS = (monsterData.wisPoints + " (" + getPlusOrMinus(getMod(monsterData.wisPoints)) + ")");
    monsterData.chaPointsS = (monsterData.chaPoints + " (" + getPlusOrMinus(getMod(monsterData.chaPoints)) + ")");


    //senses
    monsterData.blindsight = $("#blindsight-input").val();
    monsterData.darkvision = $("#darkvision-input").val();
    monsterData.tremorsense = $("#tremorsense-input").val();

    monsterData.truesight = $("#truesight-input").val();
    monsterData.passivePerception = getPP();
    monsterData.sensesString = getSenses();


    //hp and ac stuff
    monsterData.hpText = $('#hp-input').val();
    monsterData.acText = $('#ac-input').val();

    //speed
    monsterData.speed = $('#normal-input').val();
    monsterData.burrowSpeed = $('#burrow-input').val();
    monsterData.climbSpeed = $('#climb-input').val();
    monsterData.flySpeed = $('#fly-input').val();
    monsterData.swimSpeed = $('#swim-input').val();

    monsterData.speedString = getSpeed();

    //cr
    monsterData.cr = $('#cr-input').val();

    //skills
    monsterData.skillsString = getSkills();

}

//returns passive perception
function getPP(){
    let prof = 0;
    if($('#perception').prop("checked")){
        prof = 2;
    }
    return 10 + getMod(monsterData.wisPoints) + prof;
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
        sensesArr.push("blindsight " + monsterData.blindsight + " ft.");
    }
    if(monsterData.darkvision > 0){
        sensesArr.push("darkvision " + monsterData.darkvision + " ft.");
    }
    if(monsterData.tremorsense > 0){
        sensesArr.push("tremorsense " + monsterData.tremorsense + " ft.");
    }
    if(monsterData.truesight > 0){
        sensesArr.push("truesight " + monsterData.truesight + " ft.");
    }
    sensesArr.push("passive Perception " + monsterData.passivePerception);
    return sensesArr.join(", ");
}

//called when the user clicks the generate statblock button
function generateStatblock(){
    getAllVariables();
    let statBlock = $('#stat-block');

    $('#monster-name').html(monsterData.name);
    $('#monster-type').html(monsterData.typeString);
    $('#armor-class').html(monsterData.acText);
    $('#hit-points').html(monsterData.hpText);
    $('#speed').html(monsterData.speedString);
    $('#strpts').html(monsterData.strPointsS);
    $('#dexpts').html(monsterData.dexPointsS);
    $('#conpts').html(monsterData.conPointsS);
    $('#intpts').html(monsterData.intPointsS);
    $('#wispts').html(monsterData.wisPointsS);
    $('#chapts').html(monsterData.chaPointsS);

    $('#skills').html(monsterData.skillsString);

    $('#senses').html(monsterData.sensesString);

    $('#challenge-rating').html(monsterData.cr);
}

//TODO: This will need to to a POST request to server
//We should also pop up an alert or something when we were able to succesfully upload
function uploadStatBlock(){
    var jsonString = JSON.stringify(monsterData);
    var request = new XMLHttpRequest();
    var requestURL = '/generator/upload';
    request.open('POST', requestURL);
    request.setRequestHeader(
        'Content-Type', 'application/json'
    );

    request.send(jsonString);

    request.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error storing monster in database: " + message);
        }else{
            alert("Statblock successfully uploaded!");
        } 
      });
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
