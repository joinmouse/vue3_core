<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div v-if="todo.loading">Loading todo!</div>
    <div v-else>{{todo.result && todo.result.title}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import useUrlLoader from './useUrlLoader'
interface PostProps {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld
    },
    setup() {
        const todo = useUrlLoader<PostProps>("https://jsonplaceholder.typicode.com/todos/1")
        todo.result
        return {
            todo
        }
    }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>