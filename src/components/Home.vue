<template>
    <div id="landing">
        <div id="text">
            <h3>Episode VIII</h3>
            <h2>VUE STRIKES BACK</h2>
            <span>
A long time has passed since the knight of the light, also know as vanilla javascripters were mercilessly exterminated by jQueryism.
These terrible creatures, consisted mostly of lazy backend devs. Are easily fighting against clean webscripts with the power of queries and PHP.
<br>
<br>
Somewhere in the depths of a small university some of the last protectors of the light are learning new spawns their ways.
Not did they knew there was a strong influence to the dark side by terrible searching abilities of students and help of Google.
<br>
<br>
Among them, a group of self proclaimed rebels are taking what is worth by each side and making a bigger mess of it.
<br>
These are: J3LO with his knowledge off the ancient times, O2S2 with his ability of the void and and Darth Luke with his own twisted might of the dark side...
            </span>
        </div>
        <div id="hider"></div>
        <h1>[++WEBovÉ==}<br>[TeCHnolÓGie</h1>
        <div id="stars"></div>
        <div id="longtime">
            <h4>Vo vôbec nedávnych časoch,<br>presne tejto učebni....</h4>
        </div>
        <div id="after">
            <router-link id="link" to="/trivia">[VsTÚPTE}</router-link>
        </div>
        <audio id="audio" preload="auto" loop>
                <source src="../assets/sw.mp3" type="audio/mp3">
        </audio>
        <i @click.once="audioOn" id="audioB" class="fa fa-volume-up" aria-hidden="true"></i>
    </div>
</template>
<script>
import particles from 'particles.js';
export default {
    mounted: particlesJS.load('stars', 'particles.json', null),
    methods:{
        audioOn
    }
}

function audioOn(){
    $('#audio')[0].play();
}

</script>
<style lang="scss" scoped>
#audioB{
    position: fixed;
    bottom: 0;
    right: 0;
    padding: .4rem;
    font-size: 2rem;
    color: #eaeaea;
    opacity: 0.4;
    transition: 300ms all ease-in-out;
    z-index: 1000;
    &:hover,&:focus{
        opacity: 1;
    }
}
#landing{
    perspective: 500px;
    transform-origin: center center;
    /*transform-style: preserve-3d;*/
    height: 100vh;
    background: black;
    overflow: hidden;

    #hider{
        width: 100%;
        height: 50vh;
        background: black;
        position: absolute;
        box-shadow: 0 5px 15px 15px black;
    }
    #longtime{
        color: #13ecf9;
        position: absolute;
        top: 0;
        background: black;
        width: 100%;
        height: 100vh;
        animation: opacityA 2s linear forwards;
        animation-delay: 2s;

        h4{
            padding-left: 5%;
            font-family: 'Alongtime';
            font-size: 2.3rem;
            filter: blur(.6px);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            line-height: 140%;
            animation: opacityA 1s linear forwards;
            animation-delay: 1s;
        }

        @keyframes opacityA{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }

    }
    #stars{
        width: 100%;
        height: 100vh;
        position: absolute;
    }

    h1{
        color: #ffcd0a;
        font-family: 'Star Jedi Hollow';
        text-align: center;
        font-size: 10.5rem;
        line-height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        opacity: 0;
        animation: swlogo 4s linear forwards;
        animation-delay: 3s;

        @keyframes swlogo {
            0%{
                opacity: 1;
                transform: translateX(-50%) translateY(-50%) scale(1);
            }
            75%{
                opacity: 1;
            }
            100%{
                opacity: 0;
                transform: translateX(-50%) translateY(-50%) scale(0);
            }
        }
    }

    #text{
        $rotation: translateX(-50%) translateY(-50%) rotateX(60deg);

        position: absolute;
        top: 50%;
        left: 50%;
        width: 24vw;
        transform: $rotation translateY(100vh);
        /*background: red;*/
        color: #ffcd0a;
        animation: sw 60s linear forwards;
        animation-delay: 7s;

        @keyframes sw {
            0%{
                transform: $rotation translateY(100vh);
            }
            100%{
                transform: $rotation translateY(-100vh);
            }
        }

        *{
            filter: blur(.6px);
        }
        h3{
            font-family: 'Episode';
            text-align: center;
            font-size: 1.8rem;
        }
        h2{
            font-family: 'Title';
            text-align: center;
            font-size: 3rem;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        span{
            font-family: 'Episode';
            margin-bottom: 20px;
        }
    }
    #after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        background-image: url('../assets/images/deathstarmockup.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: right;
        background-position-y: 200px;
        transform: translateY(500vh);
        animation: lkdwn 5s linear forwards;
        animation-delay: 45s;

        #link{
            color: #ffcd0a;;
            font-family: 'Star Jedi Hollow';
            font-size: 4rem;
            margin-left: 10%;
            transition: 300ms all ease-in-out;
            animation: opacityB 1s linear forwards;
            opacity: 0;
            animation-delay: 25s;
            &:hover,&:focus{
                color: red;
            }

            @keyframes opacityB{
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
        }

        @keyframes lkdwn {
            0%{
                transform: translateY(500vh);
            }
            100%{
                transform: translateY(0);
            }
        }
    }
}

</style>
