<template>
    <div>
        <h1>O nás</h1>
        <div class="glider-cont">
            <button class="glider-prev"><i class="fa fa-chevron-left"></i></button>
            <div class="glider">
                <figure v-for='(person, index) in people' class="fig">
                    <img v-bind:src="person.img" alt="Fotka" class="personImg">
                    <h2>{{person.name}}</h2>
                    <span class="role">"{{person.tldr}}"</span>
                    <h3>Zodpovedný za:</h3>
                    <ul class="stuff">
                        <li v-for="(thing,index) in person.done">
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span>{{thing}}</span>
                        </li>
                    </ul>
                </figure>
            </div>

            <button class="glider-next"><i class="fa fa-chevron-right"></i></button>
        </div>
    </div>
</template>
<script defer>
    import People from '../data/people.json';
    export default {
        mounted: gldr,
        data(){
            return{
                people: People
            }
        }
    }

    function gldr(){
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            draggable: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive:[
                {
                    breakpoint: 576,
                    settings:{
                        slidesToShow: 1.5,
                    }
                },
                {
                    breakpoint: 769,
                    settings:{
                        slidesToShow: 3,
                    }
                }
            ]
        });
        $('.glider-track').css('padding-bottom', '20px').css('padding-top', '20px');
    }
</script>
<style lang="scss" scoped>
@import '../scss/responsive.scss';

.glider-cont{
    width: 90%;
    margin: 0 auto;
    padding: 5vh;
    @media #{$phone}{
        padding: 0;
    }

    .fig{
        margin: 0 1rem;
        height: 70vh !important;
        background: linear-gradient(to bottom right, white,#d1d1d1);
        box-shadow: 7px 7px 16px rgba(0,0,0,0.5);
        padding: 1.5rem;
        transition: 300ms all ease-in-out;
        position: relative;
        font-family: 'Monsterrat';
        color: #161616;
        &:hover{
            transform: translateY(-1.5vh);
            $distance: 7px + 5px;
            box-shadow: $distance $distance 16px rgba(0,0,0,0.5);
        }
        .personImg{
            width: 70%;
            margin: 0 auto;
            border: .3rem solid white;
            box-shadow: 7px 7px 16px rgba(0,0,0,0.5);
            border-radius: 100%;
            margin-bottom: 2vh;
            @media #{$tablet}{
                width: 50%;
            }
            
        }
        h2{
            text-align: center;
            padding: .5rem;
            font-size: 2rem;
            font-weight: 100;
        }
        .role{
            text-align: center;
            font-style: italic;
            opacity: 0.6;
            font-weight: 100;
        }
        h3{
            font-weight: 100;
            padding: .5rem;
            padding-left: 1.5rem;
        }
        .stuff{
            width: 80%;
            margin: 0 auto;
            overflow-y: auto;
            height: 25%;
            li{
                padding: .3rem 0;
                display: flex;
                span{
                    padding-left: .7rem;
                }
            }
        }
    }
    .glider-prev,.glider-next{
        top: 50%;
    }
    .glider-prev{
        left: 30px;
    }
    .glider-next{
        right: 30px;
    }
}
h1{
    font-size: 3rem;
    padding-left: 2rem;
    padding-top: 1rem;
}
</style>
