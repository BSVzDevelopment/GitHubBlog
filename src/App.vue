<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>

</template>


<script>
    import Navbar from "@/components/Navbar";
    export default {
        components: {
            Navbar
        }
    }

</script>


<style>
    body {
        background-color: #f5f5f5;
        margin: 0;
    }

    .app {
        padding: 20px;
    }
</style>