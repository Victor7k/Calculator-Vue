import { createApp } from 'vue'
import App from './App.vue'

// Vai renderizar um componente Vue, dentro da div, e a partir desse componente raiz(App), todos os componentes da sua aplicação serão filhos dele.
createApp(App).mount("#app")