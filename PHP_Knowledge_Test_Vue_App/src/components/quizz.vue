<template>
    <div>
        <div class="flex justify-between gap-24 my-12 px-16">
        <div class="bg-primary px-2 py-0.5 rounded-lg">
            {{score}}/{{quizz.length}}
        </div>
        <div class="progresBar">
            <progress :value="progress" max="100" :class="bg-primary"></progress>
        </div>
        <div class="">
            <img src="../asset/award.svg" height="30px" width="40px">
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div class="shadow-lg bg-primary  rounded-lg px-9 py-10 max-w-5xl">
            <p>{{quizz[i].question}}</p>
        </div>
        <div class="flex gap-5 my-10">
            <div class="cursor-pointer shadow-lg rounded-lg py-10 px-10 btn text-white bg-primary
                hover:text-slate-200 hover:bg-scondary  transition ease-out duration-500"
                v-for="(answer,index) in quizz[i].answers" :key="index" 
                @click="checkUserAnswer(index)" :class="isClicked? 'bg-blue-400' : ''"
                >{{answer}}</div>
          
        </div>
    </div>
    <div class="flex justify-end px-10 mt-1">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 
        overflow-hidden text-sm font-medium text-slate-400 rounded-lg group bg-gradient-to-br 
        from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
         hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200
          dark:focus:ring-green-800" @click="nextQuestion">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next</span></button>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isClicked: false,
            btnClicked: ''
        }
    },
  computed: {
    quizz(){
    return this.$store.state.quizz
  },
  i(){
    return this.$store.state.i
  },
  score(){
    return this.$store.state.score
  }
},
methods: {
    nextQuestion: function(){
        return this.$store.commit('nextQuestion')
    },
    checkUserAnswer(index){
        if(index===this.quizz[this.i].trueAnswer){
            this.$set(this.quizz[this.i].answers[index], 'selected', !this.quizz[this.i].answers[index].selected)
            div.selected.classList.add('')
  }
        }
    }

};
</script>


