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



let classmate = [
    {
        name: "Bilguunerkh",
        birth: 2004,
        hobby: "basketball",
        nosingle: true,
},
    {
        name: "Zulaa",
        birth: 1997,
        hooby: "shopping",
        nosingle: false,
},
    {
        name: "Dulguun",
        birth: 2004,
        hobby: "anime",
        nosingle: true,
},
    {
        name: "Muugii",
        birth: 1987,
        hobby: "code",
        nosingle: false,
},
    {
        name: "Khulan",
        birth: 2000,
        hobby: "nehmel",
        nosingle: false,
    }
]

let angi = () => {
    let o = 2022;
    let i = 0;
    for(i = 0; i < classmate.length; i++){
        ognoo =  o - classmate[i].birth;
        if(ognoo > 20 && classmate[i].nosingle === false){
            console.log(`🟥 Сурагч ${classmate[i].name} та ${ognoo} настай single учраас буцаагдлаа`);
        }
    }
}
console.log(angi(classmate));