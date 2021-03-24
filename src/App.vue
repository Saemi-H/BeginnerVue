<template>
  <!-- <div id="app"> -->
    <div class="container">
    <Header title='Hello Vue World'/>
    <Tasks :tasks='tasks' @del-task='delItem'/>
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
    }
  },
  created(){
    this.tasks = [
      {id: 1, text: 'study', day: 'Today', reminder: true,},
      {id: 2, text: 'go home', day: 'Tomorrow', reminder: false,},
      {id: 3, text: 'work', day: 'Day after tomorrow', reminder: true,},
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
