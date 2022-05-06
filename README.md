# complexity-class

## 시간복잡도
- `특정한 크기의 입력에 대하여 알고리즘이 얼마나 걸리는지`를 의미한다. 
- 이는 코딩테스트에서 `작성한 프로그램이 모든 입력을 받아 이를 처리하고 실행 결과를 출력하는데 걸리는 시간`을 의미한다.
- 시간복잡도를 표현할 때는 `Big-O(빅오)` 표기법을 사용하는데, 이는 `가장 빠르게 증가하는 항만을 고려하는 표기법`이며, `함수의 상한만`을 나타낸다. 

- **O(N)** 케이스
```js
    const array = [3, 5, 1, 2, 4];
    let sum = 0;

    // array N개를 입력받으면 N에 비례하는 연산을 수행하기 때문에 O(N)이 된다.
    // 즉, sum에 입력된 array의 길이 5번(N번) 만큼 그 수를 더해줘서 결과를 return해줌
    for (let index = 0; index < array.length; index++) {
        const num = array[index];
        sum += num;
    }
    return sum;
```

- **O(1)** 케이스
```js
function OneCase() {
    let a = 7;
    let b = 3;
    // a와 b를 받아 1번의 연산만 진행되기 때문에 O(1)이 된다.
    return a + b;
}
console.log('O(1) => ', OneCase());
```

- **O(N<sup>2</sup>)** 케이스
```js
function SquaredCase() {
    const array = [5, 3, 2, 4, 6];
    let result;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // 입력한 N * N(5 * 5)번 연산을하기 때문에 O(N^2)이 된다.
            result = i * j;
            // console.log(result);
            count++;
        }
    }

    return count;
}
console.log('O(N^2)', SquaredCase());
```