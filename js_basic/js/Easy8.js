let yearOfBirth = prompt("Та төрсөн оноо оруулна уу🎂 ");

const odoo = new Date().getFullYear();

utga = "";

let eko = Number(yearOfBirth);

if (eko <= odoo){
    old = (odoo - eko);

    if (0 <= old <=1){
        utga = "Нялх хүүхэд"; 
    } 
    if (1 < old <= 3){
        utga = "Бага насны хүүхэд";
    }
    if (3 < old <= 5){
        utga = "Цэцэрлэгийн насны хүүхэд";
    }
    if (5 < old <= 12){
        utga = "Бага сургуулийн насны хүүхэд";
    }
    if (12 < old <= 18){
        utga = "Дунд сургуулийн насны хүүхэд";
    }
    if (18 < old <= 21){
        utga = "Оюутан насны хүн";
    }
    if (old > 21){
        utga = "Идэр насны хүн";
    }
    if (old > 40){
        utga = "Ахмад насны хүн";
    }
    console.log(old + " нас бүхий " + utga);
} else{
    console.log("Зөв он оруулна уу!!!");
}
