alert(route.path);

/*
THOUGHT: stale viac rozmyslam ze spravit to cez jsony bude asi mensi pain, asi hej ked uz mame json nato :D

const corsEscape = 'https://cors-anywhere.herokuapp.com/';
const namedaySiteUrl = ''; //site url
const regex = /<body(.*?)>[\s\S]*?<\/body>/i;

var namedaySite;

$(document).ready(function () {
    $.ajax({
        url: corsEscape + namedaySiteUrl,
        type: "GET",
        headers: {
            "x-requested-with": "xhr"
        },
        success: function (result) {
            namedaySite = $(result.match(regex)[0]);
            console.log(namedaySite.find('')); //find elements 
        },
        error: function (error) {
            console.log('ERR: ' + error);
        }
    });
});
*/