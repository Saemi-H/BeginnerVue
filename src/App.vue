<template>
  <div id="app">
    <div class="container">
    <Header title='Task Track' @toggle-add-task='toggleAddTask' :showAddTask="showAddTask"/>
   <!-- <div v-if='showAddTask'>
          //<div v-show='showAddTask'>
       <AddTask @add-task='AddTask'/>
    </div>
   
    <Tasks :tasks='tasks' @del-task='delItem' @toggle-item='toggleItem'/>
    -->
    <Home ref="home"/>
  </div>
 
  <router-view :showAddTask="showAddTask"></router-view>
  <!-- Home.vue에 showAddTask props로 내려줌 -->
  <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'


export default {
  name: 'App',
  components: {
   Header,
   Home,
   Footer,
  //  Tasks,
  //  AddTask
  },
  data(){
    return{
      // tasks: [],
      showAddTask: false
    }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    /*
    async AddTask(task){
      const res = await fetch(`api/tasks`,{
        method: 'POST',
        header: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(task)
      })
      // get req가 아닌 post req여야 하므로. 

      const data= await res.json()
      this.tasks=[...this.tasks, data]
      // 새로운 data가 원래 tasks 에 추가됨
    },
    async delItem(id){
      if(confirm('Are you sure?')){
        // json에서 delete
        const res = await fetch(`api/tasks/${id}`,{
          method:'DELETE'
        })

        res.status === 200 ? (this.tasks=this.tasks.filter((task)=> task.id !== id)) : alert('error deleting task')

        // this.tasks=this.tasks.filter((task)=> task.id !== id)
      }
      
      //console.log(this.tasks)
    },
    async toggleItem(id){
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
      // json 파일 설치 후 토글

      const res=await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers:{
          'Content-type' : 'application/json'
        },
        body:JSON.stringify(updTask)
      })

      const data = await res.json()
      this.tasks = this.tasks.map(task=> task.id === id ? {...task, reminder: !data.reminder} : task)

    //  this.tasks = this.tasks.map(task=> task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    fetchTasks(){
      axios.get('api/tasks')
      .then(res => {
        console.log("success fetchTasks",res.data)
        this.tasks = res.data
      })
      .catch(error=>{
        console.log(error.message)
      })
    },
     fetchTask(id){
      axios.get(`api/tasks/${id}`)
      .then(res => {
        console.log("success fetchTasks",res.data)
        this.tasks = res.data
      })
      .catch(error=>{
        console.log(error.message)
      })
    }
    */
  },
  mounted()
  {
    console.log("mounted :"+this.$refs);
    console.log("mounted :"+this.$refs.home);
    this.$refs.home.fetchTasks();
  },
  created(){
   // console.log("created :"+this.$refs);
    //console.log("created :"+this.$refs.home);
    //console.log("created :"+this.$refs.Home);
    //this.$refs.home.fetchTasks();
   // this.fetchTasks()
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
