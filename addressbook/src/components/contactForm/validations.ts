export function validate(type:string,input:string) {
    const name = /^[a-zA-Z\s]{4,256}$/;
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,}$/;
    const mobile = /^[\+]+[0-9]{2,3}[\s]?[0-9]{3}[\s]?[0-9]{5,7}$/;
    const landline = /^[0][0-9]{2,3}[\s]?[0-9]{3,4}[\s]?[0-9]{4}$/;
    const webiste = /^([https|http]:)?\/?\/?(www.)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.([a-zA-Z]+){2,}$/;
    let validRegExp=/.*/;
    switch(type){
        case "name":
            validRegExp=name;
            break;
        case "email":
            validRegExp=mail;
            break;
        case "mobile":
            validRegExp=mobile;
            break;
        case "landline":
            validRegExp=landline;
            break;
        case "website":
            validRegExp=webiste;
            break;
    }
    if (required(input)) {
        let error;
        if (input.match(validRegExp)) {
            return true;
        }
    }
    return false;

}
function required(text:string) {
    if (text == "") {
        return false;
    }
    else {
        return true;
    }
}
let valid = {
    name: /^[a-zA-Z\s]{4,256}$/,
    mail: /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,}$/,
    mobile: /^[\+]+[0-9]{2,3}[\s]?[0-9]{3}[\s]?[0-9]{5,7}$/,
    landline: /^[0][0-9]{2,3}[\s]?[0-9]{3,4}[\s]?[0-9]{4}$/,
    webiste: /^([https|http]:)?\/?\/?(www.)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.([a-zA-Z]+){2,}$/,
}
// function validate(reg, id, input) {
//     if (required(input)) {
//         if (input.match(reg)) {
//             convertToHTMLElement(getElement(id)).innerHTML = "&nbsp;";
//             return true;
//         }
//         else {
//             convertToHTMLElement(getElement(id)).innerHTML = "Enter valid Input";
//             return false;
//         }
//     }
//     else {
//         convertToHTMLElement(getElement(id)).innerHTML = "Input is required";
//         return false;
//     }
// }
// function validateName() {
//     let name = convertToInputElement(getElement('newName')).value;
//     const validname = /^[a-zA-Z\s]{4,256}$/;
//     return validate(validname, 'nameError', name);
// }
// function validateEmail() {
//     let email = convertToInputElement(getElement("newEmail")).value;
//     const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,}$/;
//     return validate(mail, 'emailError', email);
// }
// function validateMobile() {
//     let mobile = convertToInputElement(getElement('newMobile')).value;
//     const valid = /^[\+]+[0-9]{2,3}[\s]?[0-9]{3}[\s]?[0-9]{5,7}$/;
//     return validate(valid, 'mobileError', mobile);
// }
// function validateLandline() {
//     let landline = convertToInputElement(getElement('newLandline')).value;
//     const valid = /^[0][0-9]{2,3}[\s]?[0-9]{3,4}[\s]?[0-9]{4}$/;
//     return validate(valid, 'landlineError', landline);
// }
// function validateWebsite() {
//     let website = convertToInputElement(getElement('newWebsite')).value;
//     const valid = /^([https|http]:)?\/?\/?(www.)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.([a-zA-Z]+){2,}$/;
//     return validate(valid, 'websiteError', website);
// }
// function validateAddress() {
//     let address = convertToInputElement(getElement('newAddress')).value;
//     if (required(address)) {
//         convertToHTMLElement(getElement('addressError')).innerHTML = "&nbsp;";
//         return true;
//     }
//     else {
//         convertToHTMLElement(getElement('addressError')).innerHTML = "Address is required";
//         return false;
//     }
// }
// function validateForm() {
//     let name = validateName();
//     let email = validateEmail();
//     let mobile = validateMobile();
//     let landline = validateLandline();
//     let website = validateWebsite();
//     let address = validateAddress();
//     return (name && email && mobile && landline && website && address);
// }