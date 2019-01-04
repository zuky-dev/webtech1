<template>
    <div>
        <div v-for='(article, index) in text' v-if="article.source == $route.meta.path" class="art">
            <h1>{{article.title}}</h1>
            <div v-html="article.text"></div>
            <div class="grid">
                <a v-bind:href="article.ref" class="butt gc-6">Zdroj</a>
                <router-link v-bind:to="$route.path + '/game'" class="butt gc-6">Hra (Autor: {{article.auth}})</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Txt from '../data/text.json';
export default {
    mounted: textCss,
    data(){
        return{
            text: Txt
        }
    }
}
function textCss(){
    $('p').css('padding-bottom', '0.5rem').css('text-indent', '1rem');
    $('h2').css('padding-top', '.5rem').css('padding-bottom', '1rem').css('padding-left', '2rem');
}
</script>
<style lang="scss" scoped>
    .art{
        font-family: 'Monsterrat';
        padding: 0 6vw;
    }
    h1{
        font-size: 3rem;
        padding-top: 1rem;
        padding-bottom: 2rem;
        padding-left: 2rem;
    }
    p{
        padding-bottom: .25rem;
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
</style>
