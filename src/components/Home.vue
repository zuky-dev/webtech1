<template>
    <div id="landing">
        <div id="text">
            <h3>Episode VIII</h3>
            <h2>Transcendation</h2>
            <span>
taaan tan,
ta ta ta taaan tan
ta ta ta taaan
bla bla blabal blaa
bla bla bla bla
blaaa bla
bal bla bla blaaa
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
    </div>
</template>
<script>
import particles from 'particles.js';
export default {
    mounted: particlesJS.load('stars', 'particles.json', null),
}

</script>
<style lang="scss" scoped>
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
        transform: $rotation translateY(65vh);
        /*background: red;*/
        color: #ffcd0a;
        animation: sw 40s linear forwards;
        animation-delay: 7s;

        @keyframes sw {
            0%{
                transform: $rotation translateY(65vh);
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
        background-image: url('../assets/images/deathstarmockup.jpg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: right;
        background-position-y: 200px;
        transform: translateY(500vh);
        animation: lkdwn 5s linear forwards;
        animation-delay: 20s;

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

