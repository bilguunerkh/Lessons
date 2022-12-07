// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.at(3));



// 2 тусдаа array -г нэгтгэж нэг бологохдоо concat ашиглана.
const ekoerkhe = ['Myagmardorj'];
const khulan = ['Bilguunerkh'];
const holbolt = ekoerkhe.concat(khulan);
console.log(holbolt);



// includes() ашиглаж array дотроос хайж байгаа утга байгаа эсэхийг шалгана.
const array1 = [1,2,3,4,5];
console.log(array1.includes('1'));



//indexOf() нь тухайн хайж байгаа утга хамгийн түрүүнд хэд дэх index дээр байршиж байгаа утгыг буцаана. Хэрэв байхгүй бол -1 гэсэн утга буцаана.
const animals = ['nohoi','mori','shorgoolz'];
console.log(animals.indexOf('mori'));



//indexOf() нь тухайн хайж байгаа утга хамгийн түрүүнд хэд дэх index дээр байршиж байгаа утгыг буцаана. Хэрэв байхгүй бол -1 гэсэн утга буцаана.
const mongoljingoo = ['hhaha','nohoi','mongol','mori','shorgoolz','shorgoolz','mori'];
console.log(mongoljingoo.indexOf('mori',4));



//join() нь array -г өгөгдсөн тэмдэгт ашиглаж нийлүүлэн шинэ string үүсгэхдээ хэрэглэдэг.
const ognoo = ['on','sar','odor'];
console.log(ognoo.join());
console.log(ognoo.join(''));
console.log(ognoo.join('-'));



//pop() нь array -н хамгийн сүүлийн индексыг салгаж авдаг.
const arr = [1,2,3,4,5,6];
const mongold = arr.pop();
console.log(mongold);
console.log(arr);
arr.pop();
console.log(arr);



//push() нь array -н уртыг сунгаж шинээр сүүлчийн элемэнт нэмнэ.
const amitan = ['galuu','uher','honi'];
const count = amitan.push('mori');
console.log(amitan);
console.log(count);



//shift() нь array -н эхний элемэнт буюу 0 дэх элемэнтийг салгаж авдаг.
const arr3 = [1,2,3];
console.log(arr3);
const ehnii = arr3.shift();
console.log(arr3);
console.log(ehnii);



//unshift() нь array -н уртыг сунгаж шинээр array-н эхэнд нэмнэ.
const array4 = [1,2,3];
console.log(array4);
console.log(array4.unshift('hha'));
console.log(array4);



//sort() нь духайн array-н утгуудыг эрэмбэлэнэ.
const nernuud = ['a','c','b'];
nernuud.sort();
console.log(nernuud);

const array100 = [1,2,5,4,3,2,7,8,100];
array100.sort();
console.log(array100);



//reverse() тухайн array-н утгуудыг тонгорж шинэчлэнэ.
const array20 = ['ok','ak','uk'];
console.log('bilguunerkh:',array20);

const reversed = array20.reverse();
console.log('bilguunerkh:',reversed);



//slice(startIndex, endIndex)
const arr30 = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];
console.log(arr30.slice(2));
console.log(arr30.slice(2,4));
console.log(arr30.slice(-2));



//splice(startIndex, deleteCount, item1, item2, itemN) тухайн array-н тодорхой заагдсан индексээс эхлэн тодорхой элемэнтийг устгах болон шинээр нэмэх үйлдлийг хийнэ.
const arr40 = ['Davaa', 'Lkhagva', 'Purev', 'Byamba'];
arr40.splice(2,0, 'Bilguunerkh');
console.log(arr40);

arr40.splice(3,1, 'Mongold od baihgui hha');
console.log(arr40);




//replace(pattern, replacement) зөвхөн эхний олдсон string-г шинэчлэн солидог.
const o = ' bilguunerkh mongoliin hamgiin chadvarlag hogjauulegch';
console.log(o.replace('hogja','hogj'));

console.log(o.replaceAll('a','O'));



//split(pattern) тухайн string-г тодорхой заасан pattern бүрээр таслаж шинээр array үүсгэнэ.
const str = 'bilguunerkh hamgiin sain suragch';

const ugs = str.split(' ');
console.log(ugs);

const ekos = str.split('');
console.log(ekos[2]);

const ekoeko = str.split();
console.log(ekoeko);

const ekoekoeko = str.split('');
console.log(ekoekoeko[1]);


const mama = str.split('');
console.log(ugs[0]);

let tt = "Yier";
console.log(tt[0]);




// let p = prompt("эхний үсгээр хайх");

carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    // ["Audi", "Germany", 2016],
    // ["BMW", "Germany", 2016],
    // ["Chevrolet", "USA", 2016],
    // ["Dodge", "USA", 2016],
    // ["Ferrari", "Italy", 2016],
    // ["Honda", "Japan", 2016],
    // ["Jaguar", "UK", 2016],
    // ["Lamborghini", "Italy", 2016],
    ];
const momo = carBrands.split(' ');
console.log(momo[0]);
















