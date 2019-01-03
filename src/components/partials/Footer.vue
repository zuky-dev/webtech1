<template>
    <footer class="grid">
        <div class="gc-7"></div>
        <div id="content" class="gc-5 grid">
            <span class="gc-12" id="cpy">{{copyright}}</span>
        </div>
    </footer>
</template>
<script>
    import people from '../../data/people.json';

    export default {
      methods: {
          cpr: getCopyright
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
        width: 100%;
        height: 20vh;
        background: #181818;
        position: fixed;
        bottom: 0;
        left: 0;
        


        #content{
            height: 100%;
            position: relative;
            #cpy{
                position: absolute;
                bottom: 0;
                text-align: right;
                padding-right: 3rem;
                color: #404040;
            }
        }
    }
</style>
