<template>
    <footer class="grid">
        <div class="gc-5"></div>
        <div id="content" class="gc-7">
            <calendar class="cont"></calendar>
            <hr>
            <counter class="cont"></counter>
            <hr>
            <span class="cont" id="cpy">{{copyright}}</span>
        </div>
    </footer>
</template>
<script>
    import people from '../../data/people.json';
    import Calendar from './Nameday.vue';
    import Counter from './Counter.vue';

    export default {
      methods: {
          cpr: getCopyright
      },
      components: {
        'calendar': Calendar,
        'counter': Counter
      },
      data () {
        return {
          copyright: getCopyright()
        }
      }
    }

    function getCopyright(){
        let strStart = "\u00A9 ",
            strEnd = '; 2018/19';
        for(let i = 0; i < people.length; i++){
            strStart += i==0?'':', ';
            strStart += people[i].name

        }
        return strStart + strEnd;
    }
</script>
<style lang="scss" scoped>
    footer{
        flex-wrap: 1;
        height: 20vh;
        background: #181818;
        position: fixed;
        bottom: 0;
        left: 0;
        /*background: rgba(0,0,0,0.7);
        z-index: 2000;*/


        #content{
            height: calc(100% - 2rem);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            color: #404040;
            padding: 1rem 0;
            position: relative;
            *{
                flex-basis: 100%
            }
            hr{
                color: #404040;
                border-color: #404040;
                box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
            }
            .cont{
                height: 33.3%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 2rem;
                transition: 300ms all ease-in-out;
                &:hover{
                    color: #eaeaea;
                }
            }

        }
    }
</style>
