const caesar = function(string, shift) {
    let decrypted = "";

    while (Math.abs(shift)>26){
        if (shift<-26){shift +=26;}
        if (shift>26){shift-=26;}
    }
    for (let i = 0; i<string.length; i++){
        
        let charASCII = string.charCodeAt(i);

        if (65<=charASCII && charASCII<=90){
            charASCII += shift;
            if (charASCII<65){charASCII+=26;}
            if (charASCII>90){charASCII-=26;}
            decrypted += String.fromCharCode(charASCII);
            continue;
        }

        if (97<=charASCII && charASCII<=122){
            charASCII += shift;
            if (charASCII<97){charASCII+=26;}
            if (charASCII>122){charASCII-=26;}
            decrypted += String.fromCharCode(charASCII);
            continue;
        }

        decrypted += String.fromCharCode(charASCII);

    }

    return decrypted;
};

// Do not edit below this line
module.exports = caesar;
