{
    // 1-masala
    function son(array) {
        let number = [];
        for (let i = 0, len = array.length; len > i; i++) {
            if (array[i] > 0) {
            number.push(array[i]);
            }
        }
    return number;
    }
//   console.log(son([-5, 3, 5, -2]));
}


{
    // 2-masala
    const foo = (str) => {
        return str.split("").reverse().join("");
    }
    // console.log(foo("salom"));
}


{
    // 3-masala
    const foo = (str) => {
        return str.split("").reverse().join("");
    }
    // console.log(foo(123 + ""));
}


{
    // 4-masalaa
    function boolen(array) {
        let sum = [];
        for (let i = 0, len = array.length; len > i; i++) {
            if (array[i] === false) {
            sum.push(array[i]);
            }
        }
        return sum;
    }
    // console.log(boolen([false, true, false]));
}


{
    // 5-masala
    function number(array) {
        let sum = 0;
        for (let i = 0, len = array.length; len > i; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
        }
        return sum;
    }
    // console.log(number([1, 2, 3, 4, 5]));
}


{
    // 6-masala
    function number(array) {
        let sum = [];
        for (let i = 0, len = array.length; len > i; i++) {
            sum.push(array[i] ** 2);
        }
        return sum;
    }
    // console.log(number([5, 2, 3]));
}


{
    // 7-masala
    function number(a) {
        let sum = [];
        for (let i = 1; a >= i; i++) {
            sum.push(i);
        }
        return sum;
    }
    // console.log(number(5));
}


{
    // 8-masala
    function number(a, b) {
        let sum = [];
        for (let i = a; b >= i; i++) {
            if (i % 2 === 0) {
            sum.push(i);
            }
        }
        return sum;
    }
    // console.log(number(2, 9));
}


{
    // 9-masala
    function toCapitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    // console.log(toCapitalize("laylo"));
}


{
    // 10-masala
    function kopaytirish(str, n) {
        let kopaytirilganString = '';
        for (let i = 0; i < n; i++) {
            kopaytirilganString += str
        }
        return kopaytirilganString;
    }
    // console.log(kopaytirish("salom", 3));
}


{
    //  11-masala
    function reverse(array) {
        array.reverse();
        console.log(array);
    }
    // console.log(reverse([1, 2, 3]));
}


{
    //  12 masala
    function number(array) {
        array.sort((a, b) => a - b);
        console.log(array);
    }
    // console.log(number([2, 1, 13, 4]));
}
