<template>

    <div v-show="posts.length > 0">
        <transition-group name="user-list">
            <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>


    </div>
    <div class="positionBot">
        <h3 v-show="posts.length === 0" class="rezerveTxt">Записей пока нет</h3>
    </div>

</template>


<script>
    import PostItem from "@/components/PostItem"
    export default {
        components: { PostItem },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }

    }

</script>


<style>
    .rezerveTxt {
        color: black;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;

    }

    .user-list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .user-list-enter-active,
    .user-list-leave-active {
        transition: all 0.4s ease;
    }

    .user-list-enter-from,
    .user-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }

    .positionBot {
        margin-top: 100px;
    }
</style>