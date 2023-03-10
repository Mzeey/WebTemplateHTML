export class Helper{
    constructor(){

    }

    static resetInputFields(fields){
        for(var i = 0; i < fields.length; i++)
            fields[i].value = "";
    }

    static checkIfEmpty(field){
        let isEmpty = false;
        if (field === "") {
            isEmpty = true;
        }
        return isEmpty;
    }

    generatePassword(){
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        return password;
    }
}