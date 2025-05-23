// index.js - Lab 12 Conditionals
// Author: Ethan Price
// Date: 22 May





function sortingHat(str){
    let length=str.length;
    const mod=length%4
    if(mod==0){
        house="You are in the Black Lodge." ;
       
    }

     if(mod==1){
        house="You're an FBI agent working on the top secret Blue Rose case.";
        
    }
    if(mod==2){
        house="You work for an insurance company in Las Vegas.";
        
    }

     if(mod==3){
        house="You have spent your life in the quaint hidden town of Twin Peaks, Washington."
    }
    return house;

}




$("#button").click(
    function(){

        let name=$("#input").val();
        console.log(name);
        let house=sortingHat(name);
        $("#output").append(house);
           
    }
)


