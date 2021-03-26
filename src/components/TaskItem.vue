<template>
    <!-- <div class="task"> -->
    <div :class="[task.reminder ? 'reminder' : '', 'task']" @click="onToggle(task.id)">
        <h3>{{task.text}}
            <i @click = 'onDel(task.id)' class="fas fa-times"></i>    
        </h3>
        <p v-if='task.reminder === true'>{{task.day}}</p>
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
            //console.log(id)
        },
        onToggle(id){
            //console.log(id)
            this.$emit('toggle-item', id)
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