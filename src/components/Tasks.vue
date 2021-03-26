<template>
    <div>
        <div :key='task.id' v-for="task in tasks">
            <!-- emit이 된 것은 $emit 붙여줘야함 -->
            <TaskItem @del-task="$emit('del-task', task.id)" :task='task' @toggle-item="$emit('toggle-item', task.id)"/>
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
    emits: ['del-task', 'toggle-item'],
}
</script>

<style scoped>

</style>