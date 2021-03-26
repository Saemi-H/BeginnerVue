<template>
  <!-- <div id="app"> -->
    <div class="container">
    <Header title='Hello Vue World'/>
    <Tasks :tasks='tasks' @del-task='delItem' @toggle-item='toggleItem'/>
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
   Header,
   Tasks
  },
  data(){
    return{
      task: []
    }
  },
  methods:{
    delItem(id){
      this.tasks=this.tasks.filter(task=> task.id !== id)
      //console.log(this.tasks)
    },
    toggleItem(id){
      console.log(id, this.tasks[id].reminder, this.tasks[id].text)
      console.log(this.task)
     this.reminder = !this.reminder
     console.log( this.reminder = !this.reminder)
    }
    // (id) = index 번호와 동일. id == index 또는 id-1을 쓴다

  },
  created(){
    this.tasks = [
      {id: 0, text: 'study', day: 'Today', reminder: true,},
      {id: 1, text: 'go home', day: 'Tomorrow', reminder: false,},
      {id: 2, text: 'work', day: 'Day after tomorrow', reminder: true,},
    ]
  }
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
