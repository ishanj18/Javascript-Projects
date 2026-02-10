function repeatStringNumTimes(str, num) {
    let result = "";

    if (num <= 0) {
        return "";
    }

    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
}
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("abc", 0);   