
import {createStore} from 'vuex'
// Vue.use(Vuex);
const store=createStore({
    state(){
        return {
        progress: 0,
        i: 0,
        score:0,
          quizz: [
      {
          question: "Which of the following is correct about PHP?",
          answers:["PHP can access cookies variables and set cookies","Using PHP, you can restrict users to access some pages of your website",
          "It can encrypt data","All of the above"],
          trueAnswer: 3,
          selected: false
      },
      {
          question: "Which of the following type of variables are sequences of characters, like 'PHP supports string operations.'?",
          answers:["If the value is an array, it is false if it contains no other values, and it is true otherwise. For an object, containing a value means having a member variable that has been assigned a value",
          "Valid resources are true (although some functions that return resources when they are successful will return FALSE when unsuccessful)",
          "Don't use double as Booleans","All of the above"],
          trueAnswer:3,
          selected: false    
      },
      {
          question: "Which of the following is correct about determine the truth of any value not already of the Boolean type?",
          answers:["Strings","Arrays","Resources","Objects"],
          trueAnswer:0,
          selected: false    
      },
      {
          question: "Which of the following array represents an array with a numeric index?",
          answers:["Associative Array","Numeric Array","Multidimentional Array","None of the above"],
          trueAnswer:1,
          selected: false    
      },
      {
          question: "Which of the following can be used to get information sent via get/post method in PHP?",
          answers:["$REQUEST","$REQUEST_PAGE","$_REQUEST","None of the above"],
          trueAnswer:2,
          selected: false    
      },
      {
          question: "Which of the following function checks if a specified value exists in an array?",
          answers:["extract()","in_array()","key()","krsort()"],
          trueAnswer:1
      }]   
    }},
    mutations:{
        nextQuestion (state) {
            state.i+=1;
        },
        correctAnswer(state){   
           state.score++ ;
        },
        progressQuestion(state){
           state.progress=((state.i+1)/(state.quizz.length-1))*100;
        }
       
    }
})
export default store;