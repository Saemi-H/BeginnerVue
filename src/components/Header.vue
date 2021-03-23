<template>
    <header>
        <h1>{{title}}</h1>
        <Button text='Add Task' color='green'/>
         <Button text='Del Task' color='Coral'/>
          <Button text='Update Task' color='Blue'/>
    </header>
</template>

<script>

import Button from './Button'
export default {
    name: 'Header', 
    props: {
        title: String,
    },
    components: {
        Button,
    }
}
</script>

<style scoped>

</style>