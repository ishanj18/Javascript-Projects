function maskEmail(email) {
    const atIndex = email.indexOf("@");
    const firstLetter = email[0];
    const lastLetter = email[atIndex - 1];
    const domain = email.slice(atIndex);

    const maskedPart = firstLetter + "*".repeat(atIndex - 2) + lastLetter;
    return maskedPart + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));