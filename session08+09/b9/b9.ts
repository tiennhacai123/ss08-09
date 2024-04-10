function checkPara(para:number|string|any[]){
    if(typeof(para)=='number'){
        return para**2;
    }else if(typeof(para)=='string'){
        return para.length;
    }else if(Array.isArray(para)){
        return para.length;
    }
}
console.log(checkPara(10));
console.log(checkPara('le dien tien'));
console.log(checkPara([1,2,3]));


