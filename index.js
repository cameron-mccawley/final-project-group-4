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