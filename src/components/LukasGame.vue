<template>
    <div>
        <div class="puzzleCont">
            <img class="bg" src="../assets/images/LPsbg.png" alt="bg">
            <img v-for="(img, index) in puzzle.imgs" class="hider puzzle" v-bind:src="puzzle.path + (index + 1) + puzzle.ext" alt="puzzle" v-bind:data-snapx="img.x" v-bind:data-snapy="img.y">
        </div>
        <div class="options grid">
            <button @click="startSolve" class="gc-3">Start</button>
            <button @click="reset" class="gc-3">Reset</button>
            <button @click="solve" class="gc-3">Solve</button>
            <span id="time" class="gc-3"></span>
        </div>
    </div>
</template>
<script>
import Puzzle from '../data/lukasPuzzle.json';
export default {
    mounted: intrct,
    methods: {
        solve,
        reset,
        startSolve
    },
    data(){
        return{
            puzzle: Puzzle
        }
    }
}

var tag = true;
var count = 0;
var clearTime; 
var seconds = 0, minutes = 0, hours = 0; 
var clearState; 
var secs, mins, gethours;

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;



    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}


function solve(){
    $('.draggable').each(function(index){
        let spx = $(this).attr('data-snapx');
        let spy = $(this).attr('data-snapy');
        $(this).removeClass('draggable').addClass('snapped').css('transform', 'translate(' + spx + 'px, ' + spy + 'px)');
        resetTime( );
    });
}

function reset(){
    $('.draggable').addClass('snapped').removeClass('draggable');
    $('.snapped').css('transform', 'translate(' + 0 + 'px, ' + 0 + 'px)');
    setTimeout(function(){$('.snapped').addClass('draggable').removeClass('snapped')},1000);
    resetTime( );

}

function initPuzzle(){
    let parent = $('.draggable').parent();
    let parH = parent.height();
    let parW = parent.width();
    $('.draggable').each(function (index) {
        let x = (parW - $(this).width()) * Math.random();
        let y = (parH - $(this).height()) * Math.random();
        $(this).removeClass('draggable').css('transform', 'translate(' + x + 'px, ' + y + 'px)');
    });
}

function intSet(){
    interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend:
            function (event) {
                var target = event.target,
                    // keep the dragged position in the data-x/data-y attributes
                    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;


                let spx = parseFloat(target.getAttribute('data-snapx'));
                let spy = parseFloat(target.getAttribute('data-snapy'));
                let bboxx = $(target).width() * 0.2;
                let bboxy = $(target).height() * 0.2;
                //bounding box
                if ((x >= spx - bboxx && x <= spx + bboxx) && (y >= spy - bboxy && y <= spx + bboxy)) {
                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + spx + 'px, ' + spy + 'px)';
                    $(target).removeClass('draggable').addClass('snapped');
                }
            }
    });
}

function intrct(){
intSet();

    // this is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
}

function startSolve(){
    $('.hider').addClass('draggable').removeClass('hider');
    let pcont = $('.puzzleCont');
    let parH = pcont.height();
    let parW = pcont.width();
$('.puzzle').each(function(index){
    if(tag){
    $(this).height($(this).height() * 0.2);
    tag != tag;
    }

    let rand = Math.random();
    let px = 1;
    let py = (parH - $(this).height()) * rand;
    $(this).css("top",py + 'px').css("left", px + 'px');
    let sx = (pcont.width() * ($(this).data('snapx') / 100) ) - px
        ,sy = (pcont.height() * ($(this).data('snapy') / 100) ) - py;
    
    $(this).attr('data-snapx', sx).attr('data-snapy', sy);

    startWatch()
})
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
    
    $("#time").text(""+ gethours + mins + secs); 
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
</script>
<style lang="scss" scoped>
    .puzzleCont{
        width: 80vw;
        margin: 0 auto;
        height: 50vw;
        position:relative;
        .bg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) scale(0.2);
            filter: drop-shadow(7px 7px 16px rgba(0,0,0,0.5));
        }
        .puzzle{
            position: absolute;
            &.snapped{transition: 500ms transform ease-in-out;}
        }

    }
    .hider{
        display: none;
    }
    .options{
        width: 100%;
        font-size: 1rem;
        span{
            text-align: center;
            padding: .5rem;
        margin: .25rem 0;
        }

        button{
            font-size: 1rem;
        background: #eaeaea;
        color: #161616;
        text-align: center;
        padding: .5rem;
        margin: .25rem 0;
        transition: 300ms all ease-in-out;
        border:none;
        outline:none;
        &:hover{
            background: #161616;
            color: #eaeaea;
        }
    }
    }
</style>
