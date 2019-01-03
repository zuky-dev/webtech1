<template>
    <div>
        <h1>O nás</h1>
        <div class="glider-cont">
            <button class="glider-prev"><i class="fa fa-chevron-left"></i></button>
            <div class="glider">
                <figure v-for='(person, index) in people' class="fig">
                    <h2>{{person.name}}</h2>
                    <span>{{person.tldr}}</span>
                    <ul>
                        <li v-for="(thing,index) in person.done">
                            {{thing}}
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
            slidesToShow: 3,
            draggable: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
        $('.glider-track').css('padding-bottom', '20px').css('padding-top', '20px');
    }
</script>
<style lang="scss" scoped>
.glider-cont{
    width: 90%;
    margin: 0 auto;
    padding: 5vh;

    .fig{
        margin: 0 1rem;
        height: 70vh !important;
        background: #d1d1d1;
        box-shadow: 7px 7px 16px rgba(0,0,0,0.5);
        padding: 1.5rem;
        transition: 300ms all ease-in-out;
        position: relative;
        &:hover{
            transform: translateY(-1.5vh);
            $distance: 7px + 5px;
            box-shadow: $distance $distance 16px rgba(0,0,0,0.5);
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
