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
    });
});


function close(){
    $('#game').remove();
}