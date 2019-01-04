<template>
    <footer class="grid">
        <div class="gc-5 tbl"></div>
        <div id="content" class="gc-7">
            <calendar class="cont"></calendar>
            <hr>
            <counter class="cont"></counter>
            <hr>
            <span class="cont">{{copyright}}</span>
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
    @import '../../scss/responsive.scss';

    footer{
        flex-wrap: 1;
        height: 20vh;
        background: #181818;
        position: fixed;
        bottom: 0;
        left: 0;
        @media #{$phone}{
            height: 30vh;
        }
        @media #{$tablet}{
          height: 30vh;
        }

        .tbl{
            @media #{$phone}{
                display: none
            }
            @media #{$tablet}{
              display: none;
            }
        }


        #content{
            height: calc(100% - 2rem);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            color: #404040;
            padding: 1rem 0;
            position: relative;
            @media #{$phone}{
                grid-column: span 12;
            }
            @media #{$tablet}{
                grid-column: span 12;
            }
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
                text-align: right;
                &:hover{
                    color: #eaeaea;
                }
            }

        }
    }
</style>
