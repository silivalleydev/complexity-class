function factorial(n) {
    console.log(n);
    if (n > 1) return factorial(n - 1);
    return 1;
}

console.log("O(N) ==> ", factorial(10));

//========================================
function OneCase(n) {
    // 이 케이스에선 n의 값과 상관없이 스택에 n, i, result 변수만 저장되기 때문에 O(1)이다.
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result
}

console.log("O(1) ==> ", OneCase(10));