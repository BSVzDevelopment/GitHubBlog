<template>

    <div class="navbar">
        <div @click="$router.push('/')">microBlog</div>
        <div class="navbar_btn">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button style="margin-left: 10px;" @click="$router.push('/about')">О сайте</my-button>
        </div>
    </div>

</template>


<script>
    export default {
        

    }

</script>


<style>
    .navbar {
        height: 50px;
        background: rgba(251, 251, 255);
        box-shadow: 1px 1px 1px rgba(153, 145, 145);
        display: flex;
        align-items: center;
        padding: 0 15px;
        position: fixed;
        width: 100%;

    }

    .navbar_btn {
        margin-left: auto;
        padding-right: 25px;
    }
</style>