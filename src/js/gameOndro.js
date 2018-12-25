$("document").ready(function (){
    var game =  document.createElement("div");
        game.setAttribute("id", "game");
        game.classList.add("invis");
        game.classList.add("gameDiv");
        $('body').append(game);
    var field =  document.createElement("div");
        field.setAttribute("id","gameField");
    $('#play').click(function(){
        $('#game').removeClass("invis");
        $('#game').append(field);
    });
});
