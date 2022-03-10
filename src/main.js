import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) // Vai renderizar um componente Vue, dentro da div, e a partir desse componente raiz(App), todos os componentes da sua aplicação serão filhos dele.
}).$mount("#app") // Esse é o padrão div usado quando se cria uma aplicação.