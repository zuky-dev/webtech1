import pic1 from "../data/ondroStarWarsGame.json";
import pic2 from "../data/ondroStarWars2.json";

var count = 0;
var clearTime; 
var seconds = 0, minutes = 0, hours = 0; 
var clearState; 
var secs, mins, gethours;
var data;

$("document").ready(function () {
    var iconX = $("<span></span>").attr('id', 'close');
        iconX.append($("<i></i>").addClass("fa").addClass("fa-times"));
        iconX.append($("<p></p>").text("close"));
    var iconRestart = $("<span></span>").attr('id', 'restart');
        iconRestart.append($("<i></i>").addClass("fa").addClass("fa-repeat"));
        iconRestart.append($("<p></p>").text("restart"));
    var iconMagic = $("<span></span>").attr('id', 'autoComp');
        iconMagic.append($("<i></i>").addClass("fa").addClass("fa-magic"));
        iconMagic.append($("<p></p>").text("auto-complete"));
    var iconArrow = $("<span></span>").attr('id', 'arrow');
        iconArrow.append($("<i></i>").addClass("fa").addClass("fa-angle-down"));

    var game = document.createElement("div");
        game.setAttribute("id", "game");
        game.classList.add("invis");
        game.classList.add("gameDiv");
    var time = $("<span></span>").attr("id",'timer');
    var field = document.createElement("div");
        field.setAttribute("id", "gameField");
    var container = document.createElement("div");
        container.setAttribute("id", "cont");
    var spawn = document.createElement("div");
        spawn.setAttribute("id", "spawn");
    var menu = document.createElement("div");
        menu.setAttribute("id", "gameMenu");
    var navMenu = document.createElement("div");
        navMenu.setAttribute("id", "gameNavMenu");
    
    $('#pic1').click(function () {
        data = pic1;
        $('body').append(game);
        $('#game').removeClass("invis");
        $('#game').append(time);
        $('#game').append(container);
        $('#cont').append(field);
        $('#cont').append(spawn);
        $('#game').append(menu);
        $("#gameMenu").empty();
        $("#gameMenu").append(iconArrow);
        $("#close").click(function () {
            close();
        });
        $("#autoComp").click(function () {
            autoComplete(data.tiles.length, 0);
        });
        $("#restart").click(function () {
            reset(data);
        });
        
        $("#gameMenu").hover(function () {
            $("#gameMenu").empty();
            $("#gameMenu").css("height", "100%");
            $("#gameMenu").append(iconX);
            $("#gameMenu").append(navMenu);
            $("#gameNavMenu").append(iconRestart);
            $("#gameNavMenu").append(iconMagic);
            $("#close").click(function () {
                close();
            });
            $("#autoComp").click(function () {
                autoComplete(data.tiles.length, 0);
            });
            $("#restart").click(function () {
                reset(data);
            });
        }, function () {
            $("#gameMenu").empty();
            $("#gameMenu").css("height", "70px");
            $("#gameMenu").append(iconArrow);
        });
        reset(data);
    });
    $('#pic2').click(function () {
        data = pic2;
        $('body').append(game);
        $('#game').removeClass("invis");
        $('#game').append(time);
        $('#game').append(container);
        $('#cont').append(field);
        $('#cont').append(spawn);
        $('#game').append(menu);
        $("#gameMenu").empty();
        $("#gameMenu").append(iconArrow);
        $("#close").click(function () {
            close();
        });
        $("#autoComp").click(function () {
            autoComplete(data.tiles.length, 0);
        });
        $("#restart").click(function () {
            reset(data);
        });
        
        $("#gameMenu").hover(function () {
            $("#gameMenu").empty();
            $("#gameMenu").css("height", "100%");
            $("#gameMenu").append(iconX);
            $("#gameMenu").append(navMenu);
            $("#gameNavMenu").append(iconRestart);
            $("#gameNavMenu").append(iconMagic);
            $("#close").click(function () {
                close();
            });
            $("#autoComp").click(function () {
                autoComplete(data.tiles.length, 0);
            });
            $("#restart").click(function () {
                reset(data);
            });
        }, function () {
            $("#gameMenu").empty();
            $("#gameMenu").css("height", "70px");
            $("#gameMenu").append(iconArrow);
        });
        reset(data);
    });
});


function close() {
    $('#gameField').empty();
    $('#spawn').empty();
    $('#game').empty();
    $('#game').remove();
    resetTime();
}

function magic(data) {
    console.log(data.tiles);
    let unsort = [];
    var placed = [];
    for (var i = 0; i < data.tiles.length; i++) {
        unsort.push(i);
        var divSpawn = document.createElement("div");
        var div = document.createElement("div");
        divSpawn.setAttribute("id", "divSpawnTile" + (i + 1));
        div.setAttribute("id", "divTile" + (i + 1));
        divSpawn.classList.add("tileSpawn");
        div.classList.add("tile");
        $('#spawn').append(divSpawn);
        $('#gameField').append(div);
    }
    unsort = shuffle(unsort);
    for (var i = 0; i < data.tiles.length; i++) {
        var img = document.createElement("img");
        img.setAttribute("id", "tile" + (i + 1));
        img.setAttribute("src", data.tiles[i].src + "");
        img.classList.add("tileImage")
        $("#divSpawnTile" + (unsort[i] + 1)).append(img);
        $("#divTile" + (i + 1)).append("<span class='hitbox'>*</span>");
        $("#tile" + (i + 1)).draggable();
        $("#divTile" + (i + 1)).droppable({
            drop: function (event, ui) {
                if (this.getAttribute('id').toLowerCase() == "div" + ui.draggable[0].getAttribute('id')) {
                    var temp = $("#" + ui.draggable[0].getAttribute('id'));
                    $("#" + ui.draggable[0].getAttribute('id')).draggable("disable");
                    $("#" + ui.draggable[0].getAttribute('id')).remove();
                    $("#" + this.getAttribute('id') + "").empty();
                    $("#" + this.getAttribute('id')).append(temp);
                    placed.push("#" + ui.draggable[0].getAttribute('id'));
                    $("#" + ui.draggable[0].getAttribute('id')).css("top", data.tiles[ui.draggable[0].getAttribute('id').replace(/^\D+/g, '') - 1].top);
                    $("#" + ui.draggable[0].getAttribute('id')).css("left", data.tiles[ui.draggable[0].getAttribute('id').replace(/^\D+/g, '') - 1].left);
                    $("#" + ui.draggable[0].getAttribute('id')).css("zIndex", "-1");
                    check(placed, unsort);
                }
            }
        });
    }
    startWatch();
}

function check(placed, unsort) {
    if (placed.length === unsort.length) {
        alert("puzzle boli dostavane :)");
        resetTime();
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


function autoComplete(len, i) {
    console.log(len + " " + i);
    var placed = [];
    if (len > i) {
        $("#tile" + (i + 1)).draggable("disable");
        var temp = $("#tile" + (i + 1));
        $("#tile" + (i + 1)).remove();
        $("#divTile" + (i + 1)).empty();
        $("#divTile" + (i + 1)).append(temp);
        $("#tile" + (i + 1)).css("top", data.tiles[i].top);
        $("#tile" + (i + 1)).css("left", data.tiles[i].left);
        $("#tile" + (i + 1)).css("zIndex", "-1");
        placed.push(i);
        setTimeout(function () {
            autoCompleteRec(len, (i + 1),placed);
        }, 850);
    }
    check(data.tiles,placed);
}

function autoCompleteRec(len, i,placed) {
    console.log(len + " " + i);

    if (len > i) {
        $("#tile" + (i + 1)).draggable("disable");
        var temp = $("#tile" + (i + 1));
        $("#tile" + (i + 1)).remove();
        $("#divTile" + (i + 1)).empty();
        $("#divTile" + (i + 1)).append(temp);
        $("#tile" + (i + 1)).css("top", data.tiles[i].top);
        $("#tile" + (i + 1)).css("left", data.tiles[i].left);
        $("#tile" + (i + 1)).css("zIndex", "-1");
        placed.push(i);
        setTimeout(function () {
            autoCompleteRec(len, (i + 1),placed);
        }, 850);
    }
    check(data.tiles,placed);
}

function reset(data) {
    console.log("a");
    for (let i = 0; i < data.tiles.length; i++) {
        console.log("a");
        $("#divTile" + (i + 1)).empty();
        $("#divSpawnTile" + (i + 1)).empty();
    }
    resetTime();
    magic(data);
} 

function startWatch( ) { 
    if ( seconds === 60 ) {
        seconds = 0; 
        minutes = minutes + 1; 
    } 
    mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); 
    if ( minutes === 60 ) { 
        minutes = 0; 
        hours = hours + 1; 
    } 
    gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); 
    secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
    
    $("#timer").text(""+ gethours + mins + secs); 
    seconds++; 
    clearTime = setTimeout( startWatch, 1000 ); 
} 

function resetTime( ) {
    if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) {   
        var stopTime = gethours + mins + secs;
        $("#timer").text(""+ stopTime);
        seconds = 0; 
        minutes = 0; 
        hours = 0; 
        secs = '0' + seconds;
        mins = '0' + minutes + ': '; gethours = '0' + hours + ': ';   
         
        clearTimeout( clearTime ); 
    }  
}