<template>
    <div id="cont">
        <div id="stars"></div>
        <div id="inside">
            <div id="window"> transparent window</div>
            <div id="floor"> flooring</div>
            <img id="vader" src="../assets/images/vader.png">
            <div id="text" class="grid">
                <h1 class="gc-12">404</h1>
                <span class="gc-12">I find your lack of web searching disturbing</span>
                <router-link :to="'./'" class="gc-12 link">Force repulse</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import particles from 'particles.js';
export default {
    mounted: particlesJS.load('stars', 'particles.json', null),
}
</script>

<style lang="scss">
    #cont{
        width: 100vw;
        height: 100vh;
        background: black;
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
                background-image: url('../assets/images/window.png');
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
                background: #030303;
                //background-image: url('../assets/images/deathstarfloormockup.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                left: 50%;
                transform: translateX(-50%) translateY(-15%) translateZ(-20vw) rotateX(75deg);
                transform-origin: top center;
            }
            #vader{
                width: 40%;
                height: auto;
                position: absolute;
                bottom: 10%;
                right: 20%;
                filter: drop-shadow(15px 15px 5px black);
            }
            #text{
                width: 20%;
                background: rgba(0,0,0,0.5);
                color: #eaeaea;
                position: absolute;
                top: 35%;
                right: 60%;
                font-family: 'Monsterrat';
                h1{
                    font-size: 3rem;
                    padding: .5rem;
                }
                span{
                    text-transform: uppercase;
                    text-align: center;
                    opacity: 0.8;
                }
                .link{
                    text-transform: uppercase;
                    text-align: center;
                    opacity: 0.5;
                    color:red;
                    transition: 300ms all ease-in-out;

                    &:hover,&:focus{
                        font-size: 2rem;
                        opacity: 1;
                        padding-top: .5rem;
                         padding-bottom: .5rem;
                    }
                }
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
