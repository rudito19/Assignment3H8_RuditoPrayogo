/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 

// NOTE ini saya mengerjakan sudah terlanjur dengan soal minimal 3 karakter

function threeStepsAB(text) {
    // your code here
    let status = false;
    let texttoarr = text.split("");
    //console.log(texttoarr);
    let status_a = texttoarr.includes("a");
    let status_b = texttoarr.includes("b");
    //console.log(status_a);
    //console.log(status_b);
    if (status_a && status_b == true) {
        for (let i = 0; i < texttoarr.length; i++) {
            if (texttoarr[i] == "a") {
                for (let x = i + 4 ; x < texttoarr.length - 1; x++) {
                    //console.log(x);
                    if (texttoarr[x] == "b") {
                        status = true;
                        break;
                    } 
                }
            } else if (texttoarr[i] == "b"){
                for (let x = i + 4 ; x < texttoarr.length - 1; x++) {
                    if (texttoarr[x] == "a") {
                        status = true;
                        break;
                    } 
                }
            }
            
        }
    } else {
        //console.log ("testing")
        status = false;
    } return status;

}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


