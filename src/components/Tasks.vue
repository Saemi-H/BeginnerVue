<template>
    <div>
        <div :key='task.id' v-for="task in tasks">
            <!-- tasks = 아래있는 props에서 온 것? -->
            <TaskItem @del-task="$emit('del-task', task.id)" :task='task'/>
        </div>
    </div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
    name: 'Tasks',
    props:{
        tasks: Array
    },
    components: {
        TaskItem,
    },
    emits: ['del-task']
}
</script>

<style scoped>

</style>