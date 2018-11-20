<template>
    <ul>
        <li v-for="(link,i1) in node" :key="i1">
            <router-link v-if="link.name" :to="link.path">{{link.name}}</router-link>
            <node v-if="link.children && link.children.length" :node="link.children"></node>
        </li>
    </ul>
</template>
<script>
export default {
    name: "node",
    props: {
        node: Array
    }
};
</script>