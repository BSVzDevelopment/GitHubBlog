<template>

    <div>

        <div class="bacgound">
            <div class="descriptionBtn">
                <p>Вспомнили о чем забыли рассказать ?</p>
            </div>

            <div class="styleBtnCreate">
                <my-button @click="showDialog">Создать пост</my-button>
                <my-dialog v-model:show="dialogVisible">
                    <post-form @create="createPost" />
                </my-dialog>
            </div>
            <p>Нажимайте эту кнопку</p>
        </div>


        <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" />

        <div v-else>Идет загрузка</div>

        <div ref="observer" class="observer"></div>



    </div>

</template>

<script>
    import PostForm from "@/components/PostForm";
    import PostList from "@/components/PostList";
    import MyDialog from "@/components/UI/MyDialog"
    import MyButton from "@/components/UI/MyButton"
    import axios from "axios";

    export default {
        components: {
            PostList, PostForm, MyDialog, MyButton
        },
        data() {
            return {
                posts: [],
                dialogVisible: false,
                isPostsLoading: false,
                page: 0,
                limit: 10,
                totalPages: 0,
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false;


            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },

            showDialog() {
                this.dialogVisible = true;
            },

            async fetchPost() {
                try {
                    this.page += 1;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data];

                } catch (e) {
                    alert('Ошибка')
                }
            }
        },
        mounted() {
            this.fetchPost();
            const options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            const callback = (entries, observer) => {
                if (entries[0].isIntersecting && this.page < this.totalPages) {
                    console.log('Пересечение')
                    this.fetchPost()

                }
            };
            const observer = new IntersectionObserver(callback, options);
            observer.observe(this.$refs.observer);
        },
    }


</script>

<style>
    .observer {
        height: 30px;
    }

    .bacgound {
        position: fixed;
        width: 175px;
        text-align: center;
        background-color: rgb(235, 235, 235);
        border-radius: 16px;
        margin-left: -7px;
        box-shadow: -2px 2px 4px 0px rgba(153, 145, 145);
        font-family: 'Inter', Helvetica, Arial, sans-serif;
        font-size: 12px;
        
    }
  
</style>