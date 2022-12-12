// let students=[
//     {
//     name: 'Сэд-Эрдэнэ',
//     age: 19,
//     gender: "male"
// },
//     {
//     name: 'Индра',
//     age: 19,
//     gender: "female"
// },
//     {
//     name: 'Хатнаа ',
//     age: 21,
//     gender: "male"
// },
//     {
//     name: 'Тэмүүлэн',
//     age: 24,
//     gender: "male"
// },
//     {
//     name: 'Намуун',
//     age: 23,
//     gender: "female"
// },
// ]
// let sexy = () => {
//     let eregtei = 0;
//     let emegtei = {};
//     for(let i = 0; i < students.length; i++){
//         if(students[i].gender === 'male'){
//             eregtei++;
//         }

//     }
//     emegtei.female = students.length - eregtei;
//     emegtei.male = eregtei;
//     emegtei.title = ('hha');
//     return emegtei;
// }
// console.log(sexy(students).female);
// console.log(sexy(students).male);


// let input = prompt("🐶 🐄 🐱Ter herhen dugardag ve?");


// let animals = [
//     {
//         type: "dog",
//         sound: "woof"
// },
//     {
//         type: "cow",
//         sound: "moo"
// },
//     {
//         type: "cat",
//         sound: "meow"
// },
//     {
//         type: "dulguun",
//         sound: "AIKAAAAAA"
// },
// {
//   type: "eazy",
//   sound: "online"
// },
// ]

// let blue = () => {
//     for(let i = 0; i < animals.length; i++){
//         if(animals[i].type === input){
//             console.log(animals[i].sound);

//             // if(input === animals[0].type){
//             //     console.log(animals[0].sound);
//             // } else if (input === animals[1].type){
//             //     console.log(animals[1].sound);
//             // } else if(input === animals[2].type){
//             //     console.log(animals[2].sound);
//             // } else if(input === animals[3].type){
//             //     console.log(animals[3].sound);
//             // }

//         }
//     }
// }
// console.log(blue(animals));



// let classmate = [
//     {
//         name: "Bilguunerkh",
//         birth: 2004,
//         hobby: "basketball",
//         nosingle: true,
// },
//     {
//         name: "Zulaa",
//         birth: 1997,
//         hooby: "shopping",
//         nosingle: false,
// },
//     {
//         name: "Dulguun",
//         birth: 2004,
//         hobby: "anime",
//         nosingle: true,
// },
//     {
//         name: "Muugii",
//         birth: 1987,
//         hobby: "code",
//         nosingle: false,
// },
//     {
//         name: "Khulan",
//         birth: 2000,
//         hobby: "nehmel",
//         nosingle: false,
//     }
// ]

// let angi = () => {
//     let o = 2022;
//     let i = 0;
//     for(i = 0; i < classmate.length; i++){
//         ognoo =  o - classmate[i].birth;
//         if(ognoo > 20 && classmate[i].nosingle === false){
//             console.log(`🟥 Сурагч ${classmate[i].name} та ${ognoo} настай single учраас буцаагдлаа`);
//         }
//     }
// }
// console.log(angi(classmate));



let supermarket = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 24,
    totalPrice: 500000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54.000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Schoko",
    unitPrice: 5900,
    amount: 3,
    totalPrice: 17700,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Milk",
    unitPrice: 4700,
    amount: 100,
    totalPrice: 470000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Condom",
    unitPrice: 6200,
    amount: 40,
    totalPrice: 248000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Panta",
    unitPrice: 4400,
    amount: 100,
    totalPrice: 440000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Ekos",
    unitPrice: 1850,
    amount: 86,
    totalPrice: 159100,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Ezegtei",
    unitPrice: 11200,
    amount: 69,
    totalPrice: 772800,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Eden",
    unitPrice: 34000,
    amount: 35,
    totalPrice: 1190000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Siesta",
    unitPrice: 6000,
    amount: 84,
    totalPrice: 504000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Nescafe",
    unitPrice: 13500,
    amount: 12,
    totalPrice: 162000,
    casherld: 1,
    date: '2022-11-01'
  },
  {
    productName: "Atar",
    unitPrice: 2200,
    amount: 0,
    totalPrice: 1100000,
    casherld: 1,
    date: '2022-11-01'
  },

]


let tailan = () => {
  let i = 0, sum = 0,goods = 0;
  for (i = 0; i < supermarket.length; i++){
    sum = sum + supermarket[i].totalPrice;
    goods = goods + supermarket[i].amount;
  }
  console.log(`Нийт борлуулалтын дүн: ${sum}₮`);
  console.log(`Нийт борлуулагдсан барааны тоо: ${goods}ширхэг`);
}
console.log(tailan());




let datas = [
    {
        name:   "Alex",
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript','CSS', 'JavaScript', 'React','MongoDB', 'Express', 'React', 'Node','CSS', 'JavaScript', 'React','MongoDB', 'Express', 'React', 'Node'],
        age: 45,
        isLoggedIn: false,
        points: 30,
      },
    {
        name:   "Job",
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript',],
        age: 25,
        isLoggedIn: false,
        points: 50,
      },
    {
        name:   "Brook",
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50,
      },
    {
        name:   "Daniel",
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python','HTML', 'CSS', 'JavaScript', 'React','MongoDB', 'Express', 'React', 'Node'],
        age: 75,
        isLoggedIn: false,
        points: 40,
      },
    {
        name:   "John",
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50,
      },
    {
        name:   "Thomas",
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React','MongoDB', 'Express', 'React', 'Node'],
        age: 48,
        isLoggedIn: false,
        points: 40,
      },
    {
        name:    "Paul",
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 50,
        isLoggedIn: false,
        points: 40,
      }
]

let mern = () => {
    let i = 0,max = 0,maxNas = 0,namess = 0,name = 0,isBaina = true;
    for(i = 0; i < datas.length; i++){
        for(j = i+1; j < datas.length; j++){
          if(maxNas < datas[j].age){
            maxNas = datas[j].age;
            name = datas[j].name;
          }
            if(max < datas[i].skills.length){
                max = datas[i].skills.length;
                namess = datas[i].name;
            }
              if(datas[i].skills[i].length === 'MongoDB' && datas[i].skills[i].length === 'React' && datas[i].skills[i].length === 'Express' ){
                isBaina = true;
              }else{
                isBaina = false;
              }
        }
    }
    if(isBaina){
      console.log(`🟩`)
    } else{
      console.log(`🟥`)
    }
    console.log(`Олон ур чадвар эзэмшсэн хүн: ${namess} нь ${max} ур чадвартай`);
    console.log(`${name}: Хамгийн их настнууд: ${maxNas}настай`);

}
console.log(mern());
