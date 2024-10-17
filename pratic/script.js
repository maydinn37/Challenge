//!ForEach Örneği
const products = [
  { name: "Laptop", price: 15000, discount: 0.1 },
  { name: "Akıllı Telefon", price: 7000, discount: 0.15 },
  { name: "Tablet", price: 4000, discount: 0.05 },
  { name: "Kamera", price: 5000, discount: 0.2 },
  { name: "Kulaklık", price: 500, discount: 0.3 },
];
products.forEach(function (product) {
  let newPrice = product.price - product.price * product.discount;
  console.log(`${product.name}'in indirimli fiyatı: ${newPrice}`);
});
//!For Örneği
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  let x2 = numbers[i] * numbers[i];
  console.log(`${numbers[i]} karesi : ${x2}'dir.`);
}

//!Map Örneği
const grades = [95, 85, 76, 64, 89, 100, 52];

let lettersGrade = grades.map(function (grade) {
  if (grade < 60) {
    return `Notun: ${grade} Harf Derecen:FF`;
  } else if (grade <= 69) {
    return `Notun: ${grade} Harf Derecen:DD`;
  } else if (grade <= 79) {
    return `Notun: ${grade} Harf Derecen:CC`;
  } else if (grade <= 89) {
    return `Notun: ${grade} Harf Derecen:BB`;
  } else {
    return `Notun: ${grade} Harf Derecen:AA`;
  }
});

console.log(lettersGrade);
for (let i = 0; i < lettersGrade.length; i++) {
  console.log(lettersGrade[i]);
}

const products2 = [
  { name: "Laptop", price: 15000 },
  { name: "Akıllı Telefon", price: 7000 },
  { name: "Tablet", price: 4000 },
  { name: "Kamera", price: 5000 },
  { name: "Kulaklık", price: 500 },
];

let productsKDV = products.map(function (pro) {
  let proKdv = pro.price + (pro.price * 20) / 100;
  return `${pro.name}'ın KDV dahil fiyatı: ${proKdv}'dır.`;
});

productsKDV.forEach(function (p) {
  console.log(p);
});

// !Switch Case ÖRNEĞİ
let day = "salı";
switch (day) {
  case "Pazartesi":
    console.log("Haftanın İlk Günü");
    break;
  case "salı":
    console.log("haftanın ikinci günü");
    break;
  case "çarşamba":
    console.log("Haftanın ortası");
    break;
  case "perşembe":
    console.log("haftanın dördüncü günü");
    break;
  case "cuma":
    console.log("mubarek gün");
    break;
  default:
    console.log("HAFTASONU");
}

function cars(item) {
  switch (item) {
    case "bmw":
      console.log("The Best CAR");
      break;
    case "mercedes":
      console.log("nice car");
      break;
    case "porsche":
      console.log("My Dream CAR");
      break;
    default:
      console.log("It isnt Car");
  }
}
cars("porsche");
cars("bmw");
cars("mercedes");
cars("fiat");

// ! Try Catch Örneği

try {
  let number = [0, 1, 2, 3];
  console.log(number[0]);
  console.log(number[5]);
} catch (error) {
  console.log("Hatalı işlem...");
}

try {
  console.log(car);
} catch (error) {
  console.log("HATALI İŞLEM YAPILDI.");
}
