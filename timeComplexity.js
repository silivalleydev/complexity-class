function Ncase() {
    const array = [3, 5, 1, 2, 4];
    let sum = 0;

    // array N개를 입력받으면 N에 비례하는 연산을 수행하기 때문에 O(N)이 된다.
    for (let index = 0; index < array.length; index++) {
        const num = array[index];
        sum += num;
    }
    return sum;
}
console.log('O(N) => ', Ncase());

//==========================================

function OneCase() {
    let a = 7;
    let b = 3;
    // a와 b를 받아 1번의 연산만 진행되기 때문에 O(1)이 된다.
    return a + b;
}
console.log('O(1) => ', OneCase());


