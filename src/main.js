import { createApp } from 'vue'
import './assets/scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

library.add(faTrash)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
