console.log("Fetch");

const container = document.getElementById("container");
const dood = document.getElementById("dood");


async function getData(){
    try{
        const res = await fetch("https://randomuser.me/api");
        const doto = await res.json();
        console.log(doto);

        doto.results.forEach((eko) => {
            const item = `
            <div>
            Tomes
            ${eko.id.name}
            <br>
            ${eko.email}
            <br>
            +${eko.cell}
            </div>
            `;
            const etem = `
            <ul>
                <li></li>
                <li style="color: purple">location -  ${eko.location.city},${eko.location.state}</li>
                <li></li>
            </ul>
            `
            container.innerHTML += item;
            dood.innerHTML += etem;
        })

    }catch(err){
        console.log("ADLAA:",err.message);

    }
}
getData();
