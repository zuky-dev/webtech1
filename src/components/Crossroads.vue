<template>
    <div>
        <div class="glider-cont" v-bind:class="$route.path != '/trivia'?'hidden':''">
            <h1>Trivia</h1>
            <calendar></calendar>
            <counter></counter>
            <button class="glider-prev"><i class="fa fa-chevron-left"></i></button>

            <div class="glider">
                <figure v-for='(article, index) in articles' class="fig" v-bind:style="{ 'background-image': article.color  + ',url(/' + article.hero + ')'}">
                    <div v-bind:style="{ color : article.dark?'#eaeaea':'#161616'}" class="txt">
                        <h2>{{article.title}}</h2>
                        <p>{{article.tldr}}...</p>
                    </div>
                    <div class="grid butts">
                        <a v-bind:href="article.ref" class="gc-4 butt">Zdroj</a>
                        <div class="gc-8"></div>
                        <router-link v-bind:to="'trivia/'+article.source"  class="gc-4 butt">Zisti viac</router-link>
                        <div class="gc-8"></div>
                    </div>
                </figure>
            </div>

            <button class="glider-next"><i class="fa fa-chevron-right"></i></button>
        </div>
        <router-view v-bind:class="$route.path == '/trivia'?'hidden':''"></router-view>
    </div>
</template>
<script>
    import Articles from '../data/text.json';
    import Calendar from './partials/Nameday.vue';
    import Counter from './partials/Counter.vue'
    export default {
        mounted: gldr,
        created: gldr,
        components: {
            'calendar': Calendar,
            'counter': Counter
        },
        data(){
            return {
                articles: Articles
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
.hidden{
    display:none;
}
.glider-cont{
    width: 90%;
    margin: 0 auto;
    padding: 5vh;

    .fig{
        margin: 0 1rem;
        height: 70vh !important;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 7px 7px 16px rgba(0,0,0,0.5);
        padding: 1.5rem;
        transition: 300ms all ease-in-out;
        position: relative;
        &:hover{
            transform: translateY(-1.5vh);
            $distance: 7px + 5px;
            box-shadow: $distance $distance 16px rgba(0,0,0,0.5);
        }
        .butts{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem;
        }
        .butt{
            background: #eaeaea;
            color: #161616;
            text-align: center;
            padding: .5rem;
            margin: .25rem 0;
            transition: 300ms all ease-in-out;
            &:hover{
                background: #161616;
                color: #eaeaea;
            }
        }
        .txt{
            height: 80%;
        }
        h2{
            height:30%;
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
