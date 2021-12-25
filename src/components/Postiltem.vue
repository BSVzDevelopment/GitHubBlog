<template>

    <div class="post">
        <p class="title"> {{ post.title }} </p>
        <hr>
        <p class="description"> {{ post.body }} </p>
        <hr>
        <p class="comment">Комментарии: 5</p>
    </div>

</template>


<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true,
            }
        }

    }

</script>


<style>

    
</style>