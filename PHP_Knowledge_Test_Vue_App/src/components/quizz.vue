<template>
    <div class="flex justify-between gap-24 my-12 px-16">
        <div class="bg-primary px-2 py-0.5 rounded-lg">
            3/10
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque provident omnis rerum tenetur earum exercitationem voluptas ipsum.</p>
        </div>
        <div class="flex gap-5 my-10">
            <div class="cursor-pointer shadow-lg rounded-lg py-10 px-10 btn text-white bg-primary 
                hover:text-slate-200 hover:bg-scondary  transition ease-out duration-500">Lorem ipsum dolor sit amet consectetur.</div>
            <div class="cursor-pointer shadow-lg rounded-lg py-10 px-10 btn text-white bg-primary 
                hover:text-slate-200 hover:bg-scondary transition ease-out duration-500">Lorem ipsum dolor sit amet consectetur.</div>
            <div class="cursor-pointer shadow-lg rounded-lg py-10 px-10 btn text-white bg-primary 
                hover:text-slate-200 hover:bg-scondary transition ease-out duration-500">Lorem ipsum dolor sit amet consectetur.</div>
            <div class="cursor-pointer shadow-lg rounded-lg py-10 px-10 btn text-white bg-primary 
                hover:text-slate-200 hover:bg-scondary transition ease-out duration-500">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
    </div>
    <div class="flex justify-end px-10 mt-5">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 
        overflow-hidden text-sm font-medium text-slate-400 rounded-lg group bg-gradient-to-br 
        from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
         hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200
          dark:focus:ring-green-800" @click="progress+=10">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next</span></button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
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
        answers:["$REQUEST","$REQUEST_PAGE","$_REQUEST"?"None of the above"],
        trueAnswer:2,
        selected: false    
    },
    {
        question: "Which of the following function checks if a specified value exists in an array?",
        answers:["extract()","in_array()","key()","krsort()"],
        trueAnswer:1
    }
]
}
  },
  
};
</script>
