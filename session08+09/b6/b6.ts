function print(index:string|string[]){
    if(typeof(index)=='string'){
        console.log(index);
    }else if(Array.isArray(index)){
        for (const key of index) {
            console.log(key);            
        }
    }
}
print(["helo","my","friend"]);
