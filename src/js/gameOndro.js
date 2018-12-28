import data from "../data/ondroStarWarsGame.json";



console.log(data);
$("document").ready(function (){
    var iconX = $("<span></span>").attr('id', 'close');
        iconX.append($("<i></i>").addClass("fa").addClass("fa-times"));
        iconX.append($("<p></p>").text("close"));
    var iconRestart = $("<span></span>").attr('id', 'restart');
        iconRestart.append($("<i></i>").addClass("fa").addClass("fa-repeat"));
        iconRestart.append($("<p></p>").text("restart"));
    var iconMagic = $("<span></span>").attr('id', 'close');
        iconMagic.append($("<i></i>").addClass("fa").addClass("fa-magic"));
        iconMagic.append($("<p></p>").text("auto-complete"));
    
    var game =  document.createElement("div");
        game.setAttribute("id", "game");
        game.classList.add("invis");
        game.classList.add("gameDiv");
    var field =  document.createElement("div");
        field.setAttribute("id","gameField");
    var menu =  document.createElement("div");
        menu.setAttribute("id","gameMenu");
    var navMenu =  document.createElement("div");
        navMenu.setAttribute("id","gameNavMenu");
    
    let InsaneDumbFix= document.createElement('script');
        InsaneDumbFix.setAttribute('src',"https://code.jquery.com/ui/1.12.1/jquery-ui.js");
    $('body').append(InsaneDumbFix);

    $('#play').click(function(){
        $('body').append(game);
        $('#game').removeClass("invis");
        $('#game').append(field);
        $('#game').append(menu);
        $("#gameMenu").append(iconX);
        $("#gameMenu").append(navMenu);
        $("#gameNavMenu").append(iconRestart);
        $("#gameNavMenu").append(iconMagic);
        $("#close").click(function(){
            close(); 
        });
        magic(data);
    });
});


function close(){
    $('#game').remove();
}

function magic(data){
    let unsort = [];
    var placed = [];
    for (var i = 0; i <data.tiles.length; i++) {
      unsort.push(i);
      var div = document.createElement("div");
      var img = document.createElement("img");
      div.setAttribute("id", "divTile"+(i+1));
      img.setAttribute("id","tile"+(i+1));
      img.setAttribute("src",data.tiles[i].src);
      div.classList.add("tile");
      img.classList.add("tileImage")
      $('#gameField').append(div);
      $("#divTile"+(i+1)).append(img);
      $("#tile"+(i+1)).draggable();
      $("#divTile"+(i+1)).droppable({
          drop: function( event, ui ) {
            if (this.getAttribute('id').toLowerCase() == "div"+ui.draggable[0].getAttribute('id')) {
                placed.push("#"+ui.draggable[0].getAttribute('id'));
                $("#"+ui.draggable[0].getAttribute('id')).draggable("disable");
                $("#"+ui.draggable[0].getAttribute('id')).css("top",data.tiles[ui.draggable[0].getAttribute('id').replace( /^\D+/g, '')-1].top);
                $("#"+ui.draggable[0].getAttribute('id')).css("left",data.tiles[ui.draggable[0].getAttribute('id').replace( /^\D+/g, '')-1].left);
                $("#"+ui.draggable[0].getAttribute('id')).css("zIndex","-1");
                check(placed,unsort);
            }
          }
        });
    }
    shuffleTiles(shuffle(unsort));
  }
  
  function check(placed,unsort){
    if(placed.length === unsort.length){
      alert("wheee dal si to");
    }
  }
  
  function shuffleTiles(unsort){
      for (var i = 0; i < unsort.length; i++) {
        $("#tile"+(unsort[i]+1)).css("top",((2-Math.floor(unsort[i]/5))*130)+"px");
        $("#tile"+(unsort[i]+1)).css("left",((((5-(unsort[i]%5))*200)+400)-150)+"px");
        $("#tile"+(i+1)).css("zIndex",(unsort[i]+1))
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