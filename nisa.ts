#! /usr/bin/env node


//================== array =============================


// let fruitchat = ["banana", "orange", "apple","mango"];
// console.log(fruitchat);
// // . push()

// fruitchat.push("grapes")
// console.log(fruitchat);
// // .pop()

// fruitchat.pop()
// console.log(fruitchat);

// // .concat([])

// fruitchat = fruitchat.concat(["melon","kiwi"])
// console.log(fruitchat);

//=========================== while loop ========================

// let i = 0;
// while (i <= 10 ){
//     console.log("ramadanfasting");
//     i++
    
    
// }

//================= inquirer ===========================

import inquirer from "inquirer";
let condetion = true;


let todos = [];
while(condetion)
{
     let addTask = await  inquirer.prompt(
       [
           {
                 name:"todos",
                 type:"input",
                  message: "what you want to add in your todos?"
           },
  
           {
                 name :"addmore",
                 type : "conform",
                 message: "do you want to add more ?",
                 default: "false"
           }
       ]

    );

  
     todos.push(addTask.todos);
    condetion = addTask.addmore 
    console.log(todos);

}















