// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

function getDrinkByProfession(param) {
    var list = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal"
    }
    return list[param.toLowerCase()] || "Beer";
}

// Given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

function stringDuplicateRemoval(s) {
    var newArray = [];
    s.forEach(word => {
        var last = "";
        var result = "";
        for (var i = 0; i < word.length; i++) {
            var char = word.charAt(i);
            if (char !== last) {
                result += char;
                last = char;
            }
        }
        newArray.push(result);
    })
    return newArray;
};

function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

function quarterOf(month) {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }
}

//  Capitalise the first letter of the first word of each sentence.

function capitalizeFirstLetter(paragraph) {
    if (paragraph === "") {
        return "";
    } else {
        return paragraph.split('. ').map(word => word[0].toUpperCase() + word.slice(1)).join('. ')
    }
}

// Given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

function findNum(arr) {
    var soloNum = 0;
    arr.forEach(number => {
        if (arr.indexOf(-number) == -1) {
            soloNum = number;
        }
    })
    return soloNum;
}

function findNum(arr) {
    for (var i = 0; i < arr.length; ++i)
        if (arr.indexOf(-arr[i]) == -1)
            return arr[i];
}

function findNum(arr) {
    return arr.filter(number => arr.indexOf(-number) == -1);
}