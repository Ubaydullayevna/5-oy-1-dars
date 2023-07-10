// ! =============

//? 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini qaytarib bersin.

// function nuMbers(son1, son2) {
//   return son1 + son2;
// }
// let son1 = +prompt(
//   "Bu siz kiritkan sonlarni qoshib beruvchi dastur. 1-sonni kiriting"
// );
// let son2 = +prompt("2-sonni kiriting");

// let res = nuMbers(son1, son2);

// alert(res);

//! =============

//? 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

// function calcMinut(minut) {
//   return minut * 60;
// }

// let minut = +prompt(
//   " bu siz kiritkan minutni sekunda aylantirip beradigan dastur.minut kiriting "
// );

// let res = calcMinut(minut);
// alert(res + "sekund");

//! =============

//? 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// ?sondan keyingi sonni qaytarsin.

// function nextInteger(int) {
//   return int + 1;
// }

// let int = +prompt("son kiriting, bu sz kiritkan sonni birga oshirip beradi");
// let res = nextInteger(int);
// alert(res);

//! =============

// ?4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
//? Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function calcS(balandlik, asos) {
//   return (balandlik * asos)/2;
// }

// let asos = +prompt(
//   "Bu uchburchak yuzini hisonlab beruvchi dastur. uchburchakning asosini kiriting"
// );

// let balandlik = +prompt("uchburchakning balandligini kiriting");

// let res = calcS(balandlik, asos);

// alert("siz kiritkan uchburchak yuzasi" + res + "ga teng");

//! =============

// ? 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// ? yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// ? oling.

// function calcDay(days) {
//     return days*365

// }
// let days = +prompt("yoshingizni kiriting")
// let res = calcDay(days)
// alert(res + "kun")

//! =============

// ? 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// ? qismini yozing.

//? kub(3) ᔍ 27
//  ?kub(5) ᔍ 125
// ?kub(10) ᔍ 1000

// function kuba(son) {
//   return son ** 3;
// }

// let son = +prompt("son kiriting");
// let res = kuba(son);
// alert("siz kiritkan sonning kubi "  + res + " ga teng");

// ! =============

// ? 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// ? yasang.

// function firstElement(arr) {
//   return arr[0];
// }

// let arr = [5, 2, 3, 6, 5, 5];

// let res = firstElement(arr);
// console.log(res);

//  ! ==============

// ? 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// ? qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function calCulate(a, b) {
//   return a * b;
// }
// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let res = calCulate(a, b);
// alert("siz kiritkan sonlarnng o'zaro ko'paytmasi " + res + " ga teng");

// ! ============

//  ? 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// ? funksiya yasang.

// function hourToSekunds(hour) {
//   return hour * 60 * 60;
// }

// let hour = +prompt("soat kiriting");

// let res = hourToSekunds(hour);
// alert("siz kiritgan soat " + res + " sekundgaga teng");

// !============

//? 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
//? qaytaradigan funksiya yasang.
//? Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// function uchinchiTomon(tomon1, tomon2) {
//   return (tomon1 + tomon2) - 1;
// }

// let tomon1 = +prompt("tomon1 ni kititing")
// let tomon2 = +prompt("tomon2 ni kititing");

// let res = uchinchiTomon(tomon1,tomon1)

// alert("Eng uzun uchinchi tomon " + res + " ga teng" );

// !===============

//? 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
//? funksiya yasang

// function qoldiq(son1, son2) {
//   return son1 % son2;
// }
// let son1 = +prompt("1-sonni kiriting");
// let son2 = +prompt("2-sonni kiriting");

// let res = qoldiq(son1, son2);

// alert("qoldiq " + res + " ga teng");

// !================

//? 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
//? qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function turtburchakYuzi(boyi, eni) {
//   return boyi * eni;
// }
// let boyi = +prompt("turtburchakning boyini kiriting");

// let eni = +prompt("turtburchakning enini kiriting");
// let res = turtburchakYuzi(boyi, eni);
// alert("turtburchakning yuzi " + res + " ga teng");

// !==========

// ?13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ?ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// ?xstringini birlashtirib qaytarsin.

// function stringQoshish(str) {
//   return "Something " + str;
// }
// console.log(stringQoshish("a"));

// !============

// ? 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ᔍ 25
// kvadrat(9) ᔍ 81
// kvadrat(100) ᔍ 10000

// function daRaja(son) {
//   return son ** 2;
// }

// let son = +prompt("son kiriting");
// let res = daRaja(son);
// alert("siz kiritkan sonning darajasi "  + res + " ga teng");

// !============

//? 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
//? yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on

// function checkNumber(num) {
//   if (num <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkNumber(-5));
// console.log(checkNumber(0));
// console.log(checkNumber(10));
// *======================*============================*====================================*=================

// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ==> "<div></div><div></div>"
// Namuna("p*1")  ==> "<p></p>"
// Namuna("li*3")  ==> "<li></li><li></li><li></li>"

// !=================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// function sumUpTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumUpTo(5));
// console.log(sumUpTo(10));

// !=====================

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function tekshirish(number, range) {
//   return number >= range.min && number <= range.max;
// }

// const range = { min: 1, max: 10 };

// console.log(tekshirish(5, range));
// console.log(tekshirish(15, range));

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function checkNumber(number) {
//   return Math.pow(number, 2) === number;
// }

// console.log(checkNumber(4));
// console.log(checkNumber(9));

// !==============

// //? ======================================================================================================

// function ichkiBurchaklar(n) {
//   return (n - 2) * 180;
// }

//? 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// ?qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// ?yig’indisini qaytarsin. Formula (n - 2) x 180

// let n = +prompt(
//   " Bu kop burchakli shaklning burchaklar sonini qabul qilib , natijada ushbu shakling ichki burchaklar yigindisini hisoblab beruvchi dasturdir. kop burchakli shakling burchaklarini kiriting"
// );

// let res = ichkiBurchaklar(n);

// alert(res);

// !============
// ?17.?Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// ?mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// ?sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// ?qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// function ochko(ikki, uch) {
//   let son1 = ikki * 2;
//   let son2 = uch * 3;
//   let natija = son1 + son2;
//   return natija;
// }
// console.log(ochko(1, 1));

// !==========

//? 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
//? funksiya yasang

// function nameString(word) {
//   return word + "Edabit";
// }

// let word = prompt("So'z kiriting");
// let res = nameString(word);
// alert(res);
// !===========

// ?19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// ?bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// ?yasang.

// function ikkitaSon(x, y) {
//   if (x + y < 100) {
//     alert(true);
//   } else {
//     alert(false);
//   }
//   return ikkitaSon(x, y);
// }

// let x = +prompt(" 1- sonni kiriting");
// let y = +prompt("2-sonni kiriting");

// let res = ikkitaSon(x, y);

// alert(res);

// !============

// ?0.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// ?Namuna:
// ?printArray(1) ᔍ [1]
// ?printArray(3) ᔍ [1, 2, 3]
// ?printArray(6) ᔍ [1, 2, 3, 4, 5, 6]`2

// function printArray(num) {

//   let arr = [];
//   for (let i = 1; i < num; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }

// printArray(5);

// !=============

// ?21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// ?yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// ?nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// ?argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// ?qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// ?qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
//   let t2 = tovuq * 2;
//   let q4 = qoy * 4;
//   let s4 = sigir * 4;
//   let jami = t2 + q4 + s4;

//   return jami;
// }
// let tovuq = +prompt(
//   "Bu fermadagi hayvonlarining oyoqlari sonini hisoblab beruvchi dastur. fermadagi tovuqlar sonini kiriting"
// );
// let qoy = +prompt("fermadagi qoylar sonini kiriting");
// let sigir = +prompt("fermadagi sigirlar sonini kiriting");

// let res = oyoqlar(tovuq, qoy, sigir);

// alert("fermadagi jami hayvonlarning oyoqlari soni " + res + " ga teng");

// !===============

// ? 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// ? muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// ? Namuna:
// ? and(true, false) ᔍ false
// ? and(true, true) ᔍ true
// ? and(false, true) ᔍ false
// ? and(false, false) ᔍ false

// function va(qiymat1, qiymat2) {
//   return qiymat1 && qiymat2;
// }
// console.log(va(true,false));
// console.log(va(true,true));
// console.log(va(false, true));
// console.log(va(false, false));

// !==================

// ?23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// ?teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// ?qiymatning ma’lumot turi bir xil bo’lsin.

// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(5, 4));

// !==================

// ? 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// ? funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// ? qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// ? mag’lubiyat = 0 ochko hisoblanadi.

// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//   let y3 = yutishlar * 3;
//   let d1 = duranglar * 1;
//   let m0 = maglubiyatlar * 0;
//   let jami = y3 + d1 + m0;
//   return jami
// }
//  let yutishlar = +prompt("yutishlar sonini kiriting")
//  let duranglar = +prompt("duranglar sonini kiriting");
//  let maglubiyatlar = +prompt("maglubiyatlar sonini kiriting");

//  let res = futbolOchko(yutishlar, duranglar, maglubiyatlar);

//  alert( "Jami achkolar soni " + res + " ga teng")

// !==============

// ?25.Funskiya soatlar va minutlarni argument sifatida qabul
// ?qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ?ularning yig’indisini qaytarsin.

// function sekundlar(soat, minut) {
//   let s = soat * 60 * 60;
//   let min = minut * 60;
//   let umumiy = s + min;
//   return umumiy;
// }
// let soat = +prompt("soat kiriting");
// let minut = +prompt("minut kiriting");

// let result = sekundlar(soat, minut);
// alert("jami " + result + " sekund");

// !==================

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:

// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true

// let number = +prompt("Son kiriting, biz uni tub yoki tub emasligini aniqlaymiz !");
// let i = 1;
// let counter = 0;
// while(i <= number ** 0.5) {
//   if(number % i === 0) {
//     counter++;
//   }
//   i++
// }
// if (counter === 1) {
//   return true;
// } else {
//   return false;
// }

// !================

// ?27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ?ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// ?jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// ?qaytarsin.

// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(5,true));

// ?28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// ?boolean qiymatni stringga o’girib qaytarib bersin.

// function booleanToString(bool) {
//   return bool.toString();
// }
// console.log(booleanToString(true));

// ?29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// ?berilgan qiymatni qaytarsin.
``;
//  const Arrow = (qiymat) => {
//   return qiymat

//  }
//  console.log(Arrow('salom'));

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on

// const func = (a, b) => {
//   let yigindi = a + b;
//   if (a == 10 || b == 10) {
//     console.log(true);
//   } else if (yigindi == 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// func(6, 4);

// ?31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// ?funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

// const calc = (str) => {
//   const son = eval(str);
//   console.log(son);
// };

// calc("23+4");

// !============

// ?33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// ?yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// ?Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// ?keraglini funksiya qaytarib bersin.

// function litrMasofa(km) {
//   let masofa = 10 * km;
//   return masofa;
// }

// console.log(litrMasofa(5));

// !============

// ?34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// ?Namuna:
// ?fun(3, 7) ᔍ 7
// ?fun(-1, 0) ᔍ 0
// ?fun(1000, 400) ᔍ 1000

// function findBig(x, y) {
//   if (x > y) {
//     console.log(x);
//   } else {
//     console.log(y);
//   }
// }
// console.log(findBig(5, 7));

// !===========

//? 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

// function printArray(son1, son2) {
//   let arr1 = [];
//   arr1.push(son1, son2);
//   console.log(arr1);
// }

// printArray(5, 9);

// let str = prompt("Harflar kiriting !");
// let sL = str.length;
// let counter = 0;
// for (let  i = 0; i < sL; i++) {
//   if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//     counter++;
//   };
// };
// alert(counter);

// !====================

//  ?36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir
//  ?birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
//  ?yolg’on.

// function tengStrings(str1, str2) {
//   return str1 === str2;
// }
// console.log(tengStrings("salom", "xayr"));

// !========================

// ?37.Shunday funksiya yasangki, unga string argument qilib
// ?beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// ?aks holda false

// const str = prompt("String bo'sh ekanini aniqlaymiz !");
// boshStr(str);
// function boshStr(str) {
//   return str === "" ? alert(true) : alert(false);
// }

// ? 38.Shunday funksiya yasang.Unda butun son argument qilib
// ? beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// ? qaytarsin, aks holda false.

// function bolinsin5(son) {
//   if (son % 5 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// console.log(bolinsin5(44));

// !================

// ?39.Shunday funksiya yasang.Unda butun son argument qilib
// ?beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// ?qaytarsin, aks holda false.

// function bolinsin100(son) {
//     if (son % 100 === 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
//   console.log(bolinsin100(200));

// !=================

//? 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
//? nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating

// const str = prompt("Ma'lumot kiriting biz uning lengthni hisoblaymiz ?");
// strCounter(str);
// function strCounter(str) {
//   let cnt = 0;
//   for (let i of str) {
//     cnt++;
//   }
//   alert(cnt)
// !=====================
// }

// ? 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ? ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ? ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// function bolinsin(x, y) {
//   if (x < y && x % y) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// console.log(bolinsin(1,2));
// !==================

//  ?42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
//  ?ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
//  ?bersin.

// function raqam(str) {
//   return Number(str);
// }
// console.log(raqam('564'));

// !====================

// ? 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// ? Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// ? tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// ? agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// function tortYuzi(a, b) {
//   const yuzi = a * b;
//   if (a <= 0 || b <= 0) {
//     console.log(-1);
//   } else {
//     console.log(yuzi);
//   }
// }
// console.log(tortYuzi(-4, 5));

// !===============

// ?44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// ?“ism, familiya” formatdagi string qaytarsin.

// function ismFam(ism, familiya) {

//     return ism + "," +familiya

// }
// console.log(ismFam("Odina",("Ubaydullayeva")));

// !===================

// ?45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true) ᔍ "sad days"
// bug(false) ᔍ "it's a good day"

// function dayMood(isSadDay) {
//   if (isSadDay) {
// return "sad days";
//   } else {
//      return "its a good days"
//   }
// }
// console.log(dayMood(true));
// console.log(dayMood(false));

// !=================
// ?46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// ?qabul qiladi. Birinchi argument massive, ikkinchi argument
// ?ushbu massivni boshidan boshlab nechta elementni tushurib
// ?qaytarsin.

// function removeElement(arr, countRemove) {
//   for (let i = 0; i < countRemove; i++) {
//     arr.shift(i);
//   }
//   console.log(arr);
// }
// removeElement([, 2, 5, 5, 6, 7, 8, 9, 10, 12, 45], 5);

// *=============*======================*==========================*========================*
