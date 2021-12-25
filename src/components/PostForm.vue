<template>

    <form class="createPostStyle" @submit.prevent>
        <input v-model="post.title" class="input" type="text" placeholder="О чем хотите рассказать ?">

        <input v-model="post.body" class="input" type="text" placeholder="Краткое описание">

        <input v-model="post.Bigbody" class="input" type="text" placeholder="Подробное описание">

        <my-button class="btn one" @click="createPost">В печать</my-button>
    </form>


</template>


<script>
import MyButton from "@/components/UI/MyButton"
    export default {
        components: {
            MyButton
        },
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }
            }
        }

    }
</script>


<style>
    .input {
        padding: 10px 15px;
        margin-top: 15px;
        border-radius: 7px;
        border: solid 1px black;
    }


    .createPostStyle {
        display: flex;
        flex-direction: column;
    }

    .one {
        margin-top: 15px;
    }
</style>