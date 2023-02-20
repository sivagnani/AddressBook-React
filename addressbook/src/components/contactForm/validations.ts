import { Contact } from "../../model";
const emptyString=" \xa0 ";
export function validate(type: string, input: string):string {
    switch (type) {
        case "name":
            return validateName(input);
        case "email":
            return validateMail(input);
        case "mobile":
            return validateMobile(input);
        case "landline":
            return validateLandline(input);
        case "website":
            return validateWebsite(input);
        case "address":
            return validateAddress(input);
    }
    return "error";
}
export function validateForm(contact:Contact){
    let nameValidation=validateName(contact.name)===emptyString;
    let mobileValidation=validateMobile(contact.mobile)===emptyString;
    let mailValidation=validateMail(contact.email)===emptyString;
    let landlineValidation=validateLandline(contact.landline)===emptyString;
    let websiteValidation=validateWebsite(contact.website)===emptyString;
    let addressValidation=validateAddress(contact.address)===emptyString;
    console.log(nameValidation,mailValidation,mobileValidation,addressValidation,landlineValidation,websiteValidation);
    console.log(nameValidation && mobileValidation && mailValidation && landlineValidation && websiteValidation && addressValidation);   
    return(nameValidation && mobileValidation && mailValidation && landlineValidation && websiteValidation && addressValidation);   
}
function required(text: string) {
    if (text == "") {
        return false;
    }
    else {
        return true;
    }
}
function validateName(input: string) {
    const validname = /^[a-zA-Z\s]{4,256}$/;
    return(required(input)
        ?(input.match(validname)?emptyString:"Enter valid name")
        :"Please Enter name")
}
function validateMail(input: string) {
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{2,}$/;
    return(required(input)
        ?(input.match(mail)?emptyString:"Enter valid email")
        :"Please Enter email")
}
function validateMobile(input: string) {
    const mobile = /^[\+]+[0-9]{2,3}[\s]?[0-9]{3}[\s]?[0-9]{5,7}$/;
    return(required(input)
        ?(input.match(mobile)?emptyString:"Enter valid mobile number")
        :"Please Enter mobile number")
}
function validateLandline(input: string) {
    const landline = /^[0][0-9]{2,3}[\s]?[0-9]{3,4}[\s]?[0-9]{4}$/;
    return(required(input)
        ?(input.match(landline)?emptyString:"Enter valid landline")
        :"Please Enter landline")
}
function validateWebsite(input: string) {
    const website = /^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return(required(input)
        ?(input.match(website)?emptyString:"Enter valid website")
        :"Please Enter website")
}
function validateAddress(input:string){
    return(required(input)?emptyString:"Please enter Address");
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