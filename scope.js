let bonus = 20; // global scope

function sum( first , second){
    let result = first + second + bonus;
    console.log(bonus);
   /// console.log(result);
   if(result > 9){
       const mood = "happy";
       console.log(mood);
   }
   console.log(day);
   let day = "friday";
    return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);