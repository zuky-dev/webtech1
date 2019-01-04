<template>
    <ul id="breadcrumbs">
        <li class="crumb" v-for="(crumb,key) in $breadcrumbs" :key="key">
            <div v-if="key == $breadcrumbs.length - 1" class="crumbLink">
                <i class="fa" v-bind:class="crumb.meta.icon" aria-hidden="true"></i>
                <span>{{crumb.meta.breadcrumb}}</span>
            </div>
            <router-link v-else class="crumbLink" v-bind:to="crumb.path">
                <i class="fa" v-bind:class="crumb.meta.icon" aria-hidden="true"></i>
                <span>{{crumb.meta.breadcrumb}}</span>
            </router-link>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
@import '../../scss/responsive.scss';

#breadcrumbs{
    display: flex;
    justify-content: flex-start;
    padding-left: .5rem;
    list-style: none;
    width: fit-content;
    /*testing
    background: #777;
    padding: 7vw;
    width: 100%;
    */

    .crumb{
        color: #181818;
        background: white;
        position: relative;
        width: 10vw;
        transform: skewX(-15deg);
        box-shadow: -5px 0px 20px -6px rgba(0,0,0,0.5);
        margin-left: -5vw;
        transition: all 500ms ease-in-out;
        @media #{$phone}{
                width: 25vw;
        }
        @media #{$tablet}{
            width: 15vw;
        }
        &:first-child{
            margin-left: 0;
        }

        &:hover,&:focus{
            background: #999;
        }

        .crumbLink{
            transform: skewX(15deg);
            padding: .5rem;
            color: inherit;
            display: flex;
            justify-content: space-around;
            span{
                text-align: center;
            }

        }

        &:last-child{
            background: rgb(167, 6, 6);
            color:white;
        }
    }
    &:hover .crumb,&:focus .crumb{
            margin-left: .5vw;
        }
}
</style>
