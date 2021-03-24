<template>
    <!-- <div class="task"> -->
    <div :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{task.text}}
            <i @click = 'onDel(task.id)' class="fas fa-times"></i>
        </h3>
        <p>{{task.day}}</p>
    </div>
</template>

<script>

export default {
    name: 'TaskItem',
    props:{
       task: Object 
    },
    methods:{
        onDel(id) {
            // console.log(id)
            this.$emit('del-task', id)
        }
    },
}
</script>

<style scoped>
    .fa-times{
        color: red
    }
    .reminder{
        border-left: 5px solid green;
    }
</style>