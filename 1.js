var print = function customPrint(n,message){
    if(n>0){  
        console.log(message);
        return customPrint(n-1,message);   
    }
    return;
}
    print(5,"hello world")
