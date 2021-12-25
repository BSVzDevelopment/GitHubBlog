<template>

    <div class="post">

        <div>
            <div>

                <div class="all_btn_p">
                    <div class="divBtn">

                        <div class="post_btn">
                            <button class="btnx2 open" @click="$router.push(`/posts/${post.id}`)">О</button>

                            <button class="btnx2" @click="$emit('remove', post)">X</button>
                        </div>
                    </div>
                    <p class="title"> {{ post.title }} </p>
                </div>
            </div>
            <p class="description"> {{ post.body }} </p>
            <p class="comment">Комментарии: {{ post.id }} </p>
        </div>


    </div>



</template>


<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true,
            },
        }

    }

</script>


<style>
    .post {
        border: solid 1px white;
        border-radius: 10px;
        box-shadow: 0 0 2.5px rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        width: 60%;
        margin: 0 auto;
        background-color: #ffffff;
        margin-top: 33px;

    }

    .title {
        text-align: justify;
        padding: 0 10px;
    }

    .title {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 24px;

    }

    .description {
        color: #6c6969;
        font-size: 14px;


    }

    .description,
    .comment {
        text-align: justify;
        padding: 0 10px;
        font-size: 18px;

    }

    .comment {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 16px;
    }

    .post_btn {
        margin-top: 5px;
        margin-left: 40%;
    }

    .btnx2 {
        background-color: rgba(250, 6, 6, 0.9);
        color: rgb(243, 236, 236);
        border: 1px solid black;
        border-radius: 12px;
    }

    .open {
        margin-right: 5px; 
        background-color: #22855a;
    }
    
    p {
        margin: 12px;
    }

    .divBtn {
        text-align: right;
        margin-right: 5px;
    }
</style>