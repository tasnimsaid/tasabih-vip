// function countWords() {

// let text = document.getElementById("text").value;
// let wordsCounts = text.split(" ").length;


// document.getElementById("best4").innerHTML=wordsCounts;

// }

// // const words = text => {

// return text.split('/\S+/').length ;

// };




// //best code lettre
// let textWithoutSpace = text.replace(/\s/g, '');
// let arrayOfLetters = textWithoutSpace.split("");


// function countWord() {
// let counts = {};
// let text = document.getElementById("text").value;
// let wordsCount = text.split(" ").length;

// let textWithoutSpace = text.replace(/\s/g, '');
//  let arrayOfLetters = textWithoutSpace.split("");


// document.getElementById("best3").innerHTML=wordsCount;

// }








function countWord() {

let text = document.getElementById("text").value;
 text =text.trim();


  
   

  

  

let Counter1 = 0 ;
let Counter2 = 0 ;
let Counter3 = 0 ;
let Counter4 = 0 ;

 let Counter5 = 0 ;
 let Counter6 = 0 ;
let Counter7 = 0 ;
let Counter8 = 0 ;
let Counter9 = 0 ;
let Counter10 = 0 ;

let Counter11 = 0 ;
let Counter12 = 0 ;
let Counter13 = 0 ;
let Counter14 = 0 ;
let Counter15 = 0 ;
let Counter16 = 0 ;
let Counter17 = 0 ;
let Counter18 = 0 ;
let Counter19 = 0 ;
let Counter20 = 0 ;
let Counter21 = 0 ;
let Counter22 = 0 ;
let Counter23 = 0 ;
let Counter24 = 0 ;
let Counter25 = 0 ;
let Counter26 = 0 ;
let Counter27 = 0 ;
let Counter28 = 0 ;
let Counter29 = 0 ;











let alif = ['ا','أ','إ','آ'];

let laa = ['ل'];
let haa = ['ح'];
let mim = ['م'];
let dal = ['د'];
let haae = ['ه' ,'ة'];
let raa = ['ر'];
let baa = ['ب'];
let ine = ['ع'];
let yaa = ['ي','ى','ئ'];
 let noon = ['ن'];
let kaf = ['ك'];
let ouaou = ['و','ؤ'];
let sin = ['س'];
let taa = ['ت'];
let saad = ['ص'];
let ttae = ['ط'];
let ppaf = ['ق'];
let ddal = ['ذ'];
let gaa = ['غ'];
let daa = ['ض'];
let faa = ['ف'];
let zay = ['ز'];
let kha = ['خ'];
let chine = ['ش'];
let ddda = ['ظ'];
let jim = ['ج'];
let ttta = ['ث'];



for(ch of text) {

    let words = text.split(" ").length ;


   
document.getElementById("best4").innerHTML=words;

 if (alif.includes(ch)){
    Counter1++
 }
 if (laa.includes(ch)){
    Counter2++
 }

 if (haa.includes(ch)){
   Counter3++
}

if (mim.includes(ch)){
   Counter4++
   
}

if (dal.includes(ch)){
   Counter5++
}

if (haae.includes(ch)){
   Counter6++
}


if (raa.includes(ch)){
   Counter7++
}
if (baa.includes(ch)){
   Counter8++
}
if (ine.includes(ch)){
   Counter9++
}
if (yaa.includes(ch)){
   Counter10++
}

if (noon.includes(ch)){
   Counter11++
}


if (kaf.includes(ch)){
   Counter12++
}


if (ouaou.includes(ch)){
   Counter13++
}



if (sin.includes(ch)){
   Counter14++
}


if (taa.includes(ch)){
   Counter15++
}


if (saad.includes(ch)){
   Counter16++
}


if (ttae.includes(ch)){
   Counter17++
}


if (ppaf.includes(ch)){
   Counter18++
}


if (ddal.includes(ch)){
   Counter19++
}


if (gaa.includes(ch)){
   Counter20++
}


if (daa.includes(ch)){
   Counter21++
}


if (faa.includes(ch)){
   Counter22++
}


if (zay.includes(ch)){
   Counter23++
}


if (kha.includes(ch)){
   Counter24++
}


if (chine.includes(ch)){
   Counter25++
}


if (ddda.includes(ch)){
   Counter26++
}


if (jim.includes(ch)){
   Counter27++
}


if (ttta.includes(ch)){
   Counter28++
}



}



document.getElementById("alif").innerHTML=Counter1;
document.getElementById("alif1").innerHTML=Counter1;
document.getElementById("tasnim1").innerHTML= Counter1 * 52655 ;

document.getElementById("laa").innerHTML=Counter2;
document.getElementById("laa2").innerHTML=Counter2*2;
document.getElementById("tasnim2").innerHTML=Counter2 * 38102;

document.getElementById("noon").innerHTML=Counter11;
document.getElementById("noon11").innerHTML=Counter11*3;
document.getElementById("tasnim3").innerHTML=Counter11 * 27268;


document.getElementById("mim").innerHTML=Counter4;
document.getElementById("mim4").innerHTML=Counter4*4;
document.getElementById("tasnim4").innerHTML=Counter4 * 26735;

document.getElementById("ouaou").innerHTML=Counter13;
document.getElementById("ouaou13").innerHTML=Counter13*5;
document.getElementById("tasnim5").innerHTML=Counter13 * 25767;

document.getElementById("yaa").innerHTML=Counter10;
document.getElementById("yaa10").innerHTML=Counter10*6;
document.getElementById("tasnim6").innerHTML=Counter10 * 25764;






document.getElementById("haae").innerHTML=Counter6;
document.getElementById("haae6").innerHTML=Counter6*7;
document.getElementById("tasnim7").innerHTML=Counter6 * 17194;

document.getElementById("raa").innerHTML=Counter7;
document.getElementById("raa7").innerHTML=Counter7*8;
document.getElementById("tasnim8").innerHTML=Counter7 * 12403;

document.getElementById("baa").innerHTML=Counter8;
document.getElementById("baa8").innerHTML=Counter8*9;
document.getElementById("tasnim9").innerHTML=Counter8 *11491;

document.getElementById("kaf").innerHTML=Counter12;
document.getElementById("kaf12").innerHTML=Counter12*10;
document.getElementById("tasnim10").innerHTML=Counter12 * 10497;

document.getElementById("taa").innerHTML=Counter15;
document.getElementById("taa15").innerHTML=Counter15*11;
document.getElementById("tasnim11").innerHTML=Counter15 * 10520;

document.getElementById("ine").innerHTML=Counter9;
document.getElementById("ine9").innerHTML=Counter9*12;
document.getElementById("tasnim12").innerHTML=Counter9 * 9405;

document.getElementById("faa").innerHTML=Counter22;
document.getElementById("faa22").innerHTML=Counter22*13;
document.getElementById("tasnim13").innerHTML=Counter22 * 8747;



document.getElementById("ppaf").innerHTML=Counter18;
document.getElementById("ppaf18").innerHTML=Counter18*14;
document.getElementById("tasnim14").innerHTML=Counter18 * 7034;

document.getElementById("sin").innerHTML=Counter14;
document.getElementById("sin14").innerHTML=Counter14*15;
document.getElementById("tasnim15").innerHTML=Counter14 * 6010;

document.getElementById("dal").innerHTML=Counter5;
document.getElementById("dal5").innerHTML=Counter5*16;
document.getElementById("tasnim16").innerHTML=Counter5 * 5991;


document.getElementById("ddal").innerHTML=Counter19;
document.getElementById("ddal19").innerHTML=Counter19*17;
document.getElementById("tasnim17").innerHTML=Counter19 * 4932;

document.getElementById("haa").innerHTML=Counter3;
document.getElementById("haa3").innerHTML=Counter3*18;
document.getElementById("tasnim18").innerHTML=Counter3 * 4140;


document.getElementById("jim").innerHTML=Counter27;
document.getElementById("jim27").innerHTML=Counter27*19;
document.getElementById("tasnim19").innerHTML=Counter27 * 3317;

document.getElementById("kha").innerHTML=Counter24;
document.getElementById("kha24").innerHTML=Counter24*20;
document.getElementById("tasnim20").innerHTML=Counter24 * 2497 ;

document.getElementById("chine").innerHTML=Counter25;
document.getElementById("chine25").innerHTML=Counter25*21;
document.getElementById("tasnim21").innerHTML=Counter25 * 2124;


document.getElementById("saad").innerHTML=Counter16;
document.getElementById("saad16").innerHTML=Counter16*22;
document.getElementById("tasnim22").innerHTML=Counter16 * 2074;



document.getElementById("daa").innerHTML=Counter21;
document.getElementById("daa21").innerHTML=Counter21*23;
document.getElementById("tasnim23").innerHTML=Counter21 * 1686;



document.getElementById("zay").innerHTML=Counter23;
document.getElementById("zay23").innerHTML=Counter23*24;
document.getElementById("tasnim24").innerHTML=Counter23 * 1599;






document.getElementById("ttta").innerHTML=Counter28;
document.getElementById("ttta28").innerHTML=Counter28*25;
document.getElementById("tasnim25").innerHTML=Counter28 * 1414;


document.getElementById("ttae").innerHTML=Counter17;
document.getElementById("ttae17").innerHTML=Counter17*26;
document.getElementById("tasnim26").innerHTML=Counter17 * 1273;




document.getElementById("gaa").innerHTML=Counter20;
document.getElementById("gaa20").innerHTML=Counter20*27;
document.getElementById("tasnim27").innerHTML=Counter20 * 1221;

document.getElementById("ddda").innerHTML=Counter26;
document.getElementById("ddda26").innerHTML=Counter26*28;
document.getElementById("tasnim28").innerHTML= Counter26 * 853;




document.getElementById("text").addEventListener("keyup",countWord);


document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter11*3 + Counter4*4 + Counter13*5 + Counter10*6 + Counter6*7 + Counter7*8 + Counter8*9 + Counter12*10 + Counter15*11 + Counter9*12 + Counter22*13 + Counter18*14 + Counter14*15 + Counter5*16 + Counter19*17 + Counter3*18 + Counter27*19 + Counter24*20 + Counter25*21 + Counter16*22 + Counter21*23 + Counter23*24 + Counter28*25 + Counter17*26 + Counter20*27 + Counter26*28 ;
document.getElementById("said").innerHTML= Counter1*52655 + Counter2*38102 + Counter11*27268 + Counter4*26735 + Counter13*25767 + Counter10*25764 + Counter6*17194 + Counter7*12403 + Counter8*11491 + Counter12*10497 + Counter15*10520 + Counter9*9405 + Counter22*8747 + Counter18*7034 + Counter14*6010 + Counter5*5991 + Counter19*4932 + Counter3*4140 + Counter27*3317 + Counter24*2497 + Counter25*2124 + Counter16*2074 + Counter21*1686 + Counter23*1599 + Counter28*1414 + Counter17*1273 + Counter20*1221 + Counter26*853 ;

document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;



}


