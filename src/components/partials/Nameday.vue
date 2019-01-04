<template>
    <div id="cldr">
        <div id="actCal">
            <span id="date" class="space"></span>
            <span class="space">Meniny má&nbsp;</span>
            <span id="name"></span>
        </div>

        <div id="srch">
            <div class="flex">
                <input type="text" id="nameInput" placeholder="Meno/dátum">
                <button id="submitBtn">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
            <span id="tooltip" class="space"></span>
        </div>
    </div>
</template>

<script>
    //import nameday from "../../js/nameday.js";
    import { log } from "util";

export default {
    mounted: initName
}

function initName(){
    $.ajax({
        type: "GET",
        url: "nameday2.xml",
        dataType: "xml",
        success: function(xml) {
            parsexml(xml);
        },
        error: function(xhr, textStatus, error) {
            console.log('status: ' + textStatus);
            console.log(xhr);
        }
    });
      
    $("#submitBtn").click(findInput);
};

function parsexml(xml) {
    var d = new Date();
    var strDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    $("#date").text(strDate);
    var zaznamy = $(xml).find('zaznam')
    var tmpDay =d.getDate()+"";
    var tmpMonth = (d.getMonth()+1)+"";
    if (tmpDay.length===1) tmpDay = "0"+tmpDay;
    if (tmpMonth.length===1) tmpMonth = "0"+tmpMonth;
    zaznamy.each(function(){
        if($.trim($(this).find("den")[0].textContent+"") === tmpMonth+""+(tmpDay)){
            if($(this).find("SK")[0] !== undefined) $("#name").text($(this).find("SK")[0].textContent);
        }
    });
}


function findInput () {    
    
    $("document").ready(function(){
        $.ajax({
            type: "GET",
            url: "nameday2.xml",
            dataType: "xml",
            success: function(xml) {
                findNameOrDate(xml);
            },
            error: function(xhr, textStatus, error) {
                console.log('status: ' + textStatus);
                console.log(xhr);
            }
        });
    });
     
}

function findNameOrDate(xml){
    var str = $("#nameInput").val();
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    var res = str.match("((0?[1-9]|[12][0123456789]|3[01])\\.(0?[1-9]|1[0-2])\\.)");
    var res2 = str.match("[0123456789]|[\t\f\v\r\n ]|[^a-z]");
    $("#tooltip").text("");
     
    if(res != null){
        var day = res[2];
        var month = res[3];
        if(day.length == 1)day = "0"+day;
        if(month.length == 1)month = "0"+month;
        var date = new Date(month+"."+day+".");
        var controlDay = date.getDate()+"";
        var controlMonth = (date.getMonth()+1)+"";
        if(controlDay.length == 1)controlDay = "0"+controlDay;
        if(controlMonth.length == 1)controlMonth = "0"+controlMonth;
        if((controlMonth == month)&&(controlDay == day)){
            var zaznamy = $(xml).find('zaznam')
            zaznamy.each(function(){
            if($.trim($(this).find("den")[0].textContent) === (month+""+day)){
                if($(this).find("SK")[0] !== undefined) $("#tooltip").text($(this).find("SK")[0].textContent);
                else $("#tooltip").text("");
                }
            });
        }else{
            $("#tooltip").text("Zvoleny datum neexistuje");
        }
        
    }else if (( res2 == null)&&(str !== "")){
        var zaznamy = $(xml).find('zaznam');
        zaznamy.each(function(){
            if($(this).find("SK")[0] != undefined)
                if($.trim($(this).find("SK")[0].textContent).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(str)){
                    var ans = $(this).find("den")[0].textContent.match("([0-9][0-9])([0-9][0-9])");
                    $("#tooltip").text(ans[2]+"."+ans[1]+".");
                }
        });
    }else{

        $("#tooltip").text("Format vstupu: Datum: DD.MM.(optional YYYY) Meno: len znaky slovenskej abecedy");
        
    }
}



</script>

<style lang="scss" scoped>
    #cldr{
        position: relative;
    }
    .space{
        padding-left: 1rem;
    }
    #actCal{
        display:flex;
        justify-content: flex-end;
        transition: 300ms all ease-in-out;
        &:hover{
            color: #eaeaea;
            ~#srch{
                width: 80%;
                padding: 0.5rem;
            }
        }
    }
    #srch{
        width: 0;
        overflow: hidden;
        background: #eaeaea;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: 300ms all ease-in-out;
        position: relative;
        .flex{
            display: flex;
            justify-content: flex-start;
        }
        input{
            outline: none!important;
            border: none;
            background: transparent;
            font-family: 'Monsterrat';
            font-size: 1rem;
            padding: 0 .3rem;
            width: 8rem;
        }
        button{
            width: 1.7rem;
            height: 1.7rem;
            color: #eaeaea;
            background: #161616;
            padding: .2rem;
            border-radius: 100%;
            border: none;
            outline: none;
        }
        span{
            font-weight: 600;
            height: 1.5rem;
            overflow-y:auto;
        }

        &:hover{
            width: 80%;
            padding: 0.5rem;
        }
    }
</style>

