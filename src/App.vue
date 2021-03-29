<template>
  <div id="app">
    <div class="container">
    <Header title='Task Track' @toggle-add-task='toggleAddTask' :showAddTask="showAddTask"/>
    <div v-if='showAddTask'>
    <!-- <div v-show='showAddTask'> -->
       <AddTask @add-task='AddTask'/>
    </div>
   
    <Tasks :tasks='tasks' @del-task='delItem' @toggle-item='toggleItem'/>
  </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import axios from 'axios'

export default {
  name: 'App',
  components: {
   Header,
   Tasks,
   AddTask
  },
  data(){
    return{
      tasks: [],
      showAddTask: false
    }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    AddTask(task){
      this.tasks=[...this.tasks, task]
    },
    delItem(id){
      if(confirm('Are you sure?')){
        this.tasks=this.tasks.filter((task)=> task.id !== id)
      }
      
      //console.log(this.tasks)
    },
    toggleItem(id){
     this.tasks = this.tasks.map(task=> task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    fetchTasks(){
      axios.get('http://localhost:5000/tasks')
      .then(res => {
        console.log("success fetchTasks",res.data)
        this.tasks = res.data
      })
      .catch(function(error){
        console.log(error.message)
      })
    }
  },
  created(){
    this.fetchTasks()
    // [
    //   {id: 0, text: 'study', day: 'Today', reminder: true,},
    //   {id: 1, text: 'go home', day: 'Tomorrow', reminder: false,},
    //   {id: 2, text: 'work', day: 'Day after tomorrow', reminder: true,},
    // ]
  },
}
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
.btn{
  background-color: aquamarine;
  border: none;
}
</style>
