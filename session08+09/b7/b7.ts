function checkDataType(para:any):void{
    if(typeof(para)=="number"){
        console.log('number');        
    }else if(Array.isArray(para)){
        console.log(typeof(para));        
    }else if(typeof(para)=='object'){
        console.log('object');
        }
}
checkDataType(1)
checkDataType([1,2,3,4,54]);
checkDataType({id:1,name:"tien"})