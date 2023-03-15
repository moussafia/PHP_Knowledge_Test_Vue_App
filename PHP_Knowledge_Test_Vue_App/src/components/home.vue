<template>
    <div>
        <div class="px-10">
        <div class="shadow-lg bg-primary rounded-lg">
            <div class="flex justify-center">
                <p class="text-center py-9 whitespace-normal px-10">
                    PHP is a popular server-side scripting language used for web development.
                     It allows developers to create dynamic web pages and applications that interact 
                     with databases and other server-side technologies. However, it's important to keep
                      in mind the rules of online quizzes when using PHP. Once you've selected your answer,
                       you can't reselect it, and once time runs out, you can't select any options. Additionally,
                        you can't exit the quiz while playing, so it's important to be prepared and committed to 
                        completing the quiz. Finally, the number of points you receive is based on the number 
                        of correct answers you provide, so it's essential to answer as accurately as possible.
                </p>
            </div>
        </div>
    </div>
    <div class="py-5 my-3">
        <router-link :to="{ name: 'quizz'}">
        <button class="w-96 h-12 px-10 btn text-white border-primary md:border-2 hover:bg-primary 
                hover:text-blue-400 transition ease-out duration-500 uppercase">Get started</button></router-link>
    </div>
    </div>
</template>

