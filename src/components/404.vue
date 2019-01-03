<template>
    <div id="cont">
        <div id="stars"></div>
        <div id="inside">
            <div id="window"> transparent window</div>
            <div id="floor"> flooring</div>
            <img id="vader" src="../assets/images/vader.png">
            <div id="text">
                <h1>404</h1>
                <span>I find your lack of web searching disturbing</span>
                <router-link :to="'./'">Force repulse</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import particles from 'particles.js';
particlesJS.load('stars', 'particles.json', null);

export default {
}
</script>

<style lang="scss">
    #cont{
        width: 100vw;
        height: 100vh;
        background: red;
        overflow: hidden;

        #stars{
            width: 100vw;
            height: 100vh;
            background: black;
            z-index: 10;
            animation: myOrbit2 3s linear infinite forwards;
        }

        #inside{
            perspective: 1000px;
            width: 100vw;
            height: 100vh;
            transform: scale(1);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
            animation: myOrbit 5s linear infinite forwards;
            *{
                display: flex;
                justify-content: center;
                align-items: center;
            }


            #window{
                width: 140%;
                height: 100%;
                /*background: rgba(0,0,0,0.5);*/
                background-image: url('../assets/images/deathstarmockup.png');
                background-repeat: no-repeat;
                background-size: cover;
                box-shadow: 0 10px 10px black;
                position: relative;
                left: 50%;
                transform: translateX(-50%) translateY(-15%) translateZ(-20vw);
                transform-origin: bottom center;
            }
            #floor{
                width: 140%;
                height: 100%;
                /*background: blue;*/
                background-image: url('../assets/images/deathstarfloormockup.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                left: 50%;
                transform: translateX(-50%) translateY(-15%) translateZ(-20vw) rotateX(75deg);
                transform-origin: top center;
            }
            #vader{
                width: 20%;
                height: auto;
                position: absolute;
                bottom: 10%;
                right: 20%;
                filter: drop-shadow(15px 15px 5px black);
            }
            #text{
                width: 20%;
                background: orange;
                position: absolute;
                top: 35%;
                right: 60%;
            }
        }
    }

    @keyframes myOrbit {
        from { transform: rotate(0deg) translateX(.6%) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(.6%) rotate(-360deg); }
    }
    @keyframes myOrbit2 {
        from { transform: rotate(0deg) translateX(-2%) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(-2%) rotate(-360deg); }
    }
</style>
