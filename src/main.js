// import { createApp } from 'vue'
// import App from './App'
// import router from '@/router/router';


// createApp(App).mount('#app')

// app

//     .use(router)
//     .mount('#app');



import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/router';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


// app.mount('#app')


app

    .use(router)
    .mount('#app');
