let a :number|boolean
a = 1;
a = true;
//không lỗi do 1 là kiểu dữ liệu number đã đc khai báo trong a
// a = "dsadadasd"    //lỗi ra kiểu dữ liệu ở a là 1 chuỗi, không được khai báo trong a
type D ={
    id:number,
}
type E ={
    name:string,
}
type F = D&E
let F ={
    id:1,
    name:"Tien",
}
//Nó sẽ lấy những thành phần giao nhau để tạo ra 1 kiểu mới vừa có id vừa có name
//nếu 2 kiểu ban đầu có cùng 1 thuộc tính những khác kiểu dữ liệu thì khi kết hợp sẽ báo lỗi