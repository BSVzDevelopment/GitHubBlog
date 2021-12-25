<template>

    <div class="blockPost">
        <div class="oneStr">
            <p>Страница поста с ID = {{ $route.params.id }} </p>
        </div>

        <div class="twoStr">
            <p>Полное описание {{ comment.length }} </p>
        </div>

    </div>

    <div class="blockComment">

        <div class="titleComment">
            <p>Поделитесь свои мнением в комметариях</p>
        </div>

        <div @submit.prevent class="dblInput">
            <input 
            class="inputCom nameCom"
            :value="authorName" 
            @input="authorName = $event.target.value" 
            type="text" 
            placeholder="Как Вас Зовут ?" >

            <br>

            <input 
            class="inputCom txtCom"
            :value="textComment" 
            @input="textComment = $event.target.value" 
            @keypress.enter="createComment"          
            type="text" 
            placeholder="Напишите что думаете о протичанном" >

            <br>

            <button class="btn_Comment" @click="createComment">Опубликовать</button>
        </div>

        
        <div class="comment" v-for="com in comment">
            <span class="name"> {{ com.authorName }} </span>
            <div class="txt"> {{ com.textComment }} </div>
        </div>
    </div>


</template>


<script>
    export default {
        data() {
            return {
                comment: [
                    { id: 1, authorName: 'Jon', textComment: 'Ну и делаааа...' },
                    { id: 2, authorName: 'Poul', textComment: 'Полностью поддерживаю' },
                ],
                authorName: '',
                textComment: ''
            }
        },

        methods: {
            createComment() {

                if (this.authorName && this.textComment !== '') {

                    const newComment = {
                        id: Date.now(),
                        authorName: this.authorName,
                        textComment: this.textComment,
                    }
                    this.comment.push(newComment);
                    this.authorName = '';
                    this.textComment = '';

                }

            },

        }

    }

</script>


<style>
    .name {
        font-family: 'Inter', Helvetica, Arial, sans-serif;
    }

    .oneStr {
        text-align: center;
        padding-top: 5px;
    }


    .blockPost, 
    .blockComment {
        margin: 0 auto;
        margin-top: 50px;
        width: 70%;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        font-family: 'Inter', Helvetica, Arial, sans-serif;
        font-weight: bold;
        font-size: 24px;
        color: #202020;
    }

    .twoStr {
        text-align: justify;
        padding-left: 5px;
        font-weight: normal;
        font-size: 15px;
        color: #7c7c7c;
        padding-bottom: 10px;

    }

    .blockComment {
        margin-top: 15px;
    }

    .titleComment {
        padding-top: 15px;
        font-size: 15px;
        text-align: center;
     

    }

    .inputCom {
        background-color: rgba(216, 216, 216, 0.692);
        border-radius: 3px;
        width: 100%;
        border: solid 0 white;
        height: 30px;
    }

    .txtCom {
        margin-top: 10px;
        height: 60px;
    }

    .dblInput {
        width: 90%;
        margin: 0 auto;
    }

    .btn_Comment{
        align-self: flex-end;
        padding: 10px 15px; 
        background-color: rgb(255, 255, 255);
        color: gray;
        border: 1px solid black;
        border-radius: 6px;
        margin-top: 10px;
        display: block;
        margin-left: auto;
    }

    .comment {
        width: 90%;
        margin: 0 auto;
    }

    .name {
        font-size: 12px;
        background-color: yellowgreen;
    }

    .txt {
        padding-bottom: 10px;


    }
</style>