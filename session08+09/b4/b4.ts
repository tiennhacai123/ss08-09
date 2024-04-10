function binhPhuong(para:number|number[]){
    if(typeof(para)==="number"){
        return console.log(para**2);
    }else if(Array.isArray(para)){
        let result:any = para.map((item,index,arr)=>{
            return item**2;
        });
    console.log(result);
    }
}
binhPhuong(5);
binhPhuong([1,2,3,4]);