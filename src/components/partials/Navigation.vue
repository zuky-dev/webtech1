<template>
    <ul>
        <li v-for="(link,i1) in node" :key="i1">
            <div v-if="link.name" class="menuItem grid" v-bind:class="{drp:link.children && link.children.length}">
                <router-link class="link gc-9 grid" :to="link.path">
                    <i class="fa gc-3" v-bind:class="link.meta.icon" aria-hidden="true"></i>
                    <span class="gc-9">{{link.name}}</span>
                </router-link>
                <i v-if="link.children && link.children.length" v-on:click="dropdown('icon'+link.name,'drop'+link.name)" v-bind:id="'icon'+link.name" class="fa fa-caret-down gc-3" aria-hidden="true"></i>
            </div>
            <node v-bind:id="'drop'+link.name" class="children hidden" v-if="link.children && link.children.length" :node="link.children"></node>
        </li>
    </ul>
</template>
<script>
export default {
    name: "node",
    props: {
        node: Array
    },
    methods: {
        dropdown(idIcon,idMenu){
            $('#'+idIcon).toggleClass('open').parent().toggleClass('open');
            $('#'+idMenu).toggleClass('hidden');
        }
    }
};

/*function dropdown(obj){
    console.log(obj);
}
/*$(document).ready(function(){
    $('#drop').click(function(){
        //alert('tadaa');
        //$(this).addClass('active');

        $(this).parent().parent().find('.children').removeClass('hidden');//.find('.children')[0].removeClass('hidden');
    });
});*/

</script>
<style lang="scss" scoped>
.menuItem{
    padding: .5rem;
    width: calc(100% - 1rem);
    display: flex;
    color: #181818;
    font-size: 1.4rem;
    &.drp{
        border-bottom: 1px solid transparent;
        transition: 500ms all ease-in-out;
        &.open{
            border-bottom-color: #181818
        }
    }

    .link{
        text-align: center;
        color: #181818;
    }
    i{
        transition: 500ms all ease-in-out;
        cursor: pointer;
        text-align: center;
        &.open{
            transform: rotateZ(-180deg) translateY(.15rem);
        }
    }
}
.children{
    margin-left: 10px;
    overflow: hidden;
    transition: 500ms all ease-in-out;
    max-height: 15vh;
    transform-origin: top center;
    &.hidden{
        max-height:0;
    }

}
</style>
