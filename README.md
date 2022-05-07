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

- N이 1000일 떄의 연산 횟수를 시간 복잡도 별로 나누면 아래와 같다.
    1. O(N): 1000
    2. O(NlogN): 10000
    3. O(N<sup>2</sup>): 1000000
    4. O(N<sup>3</sup>): 1000000000 <-- 일반적으로 이 케이스의 경우 코딩테스트에서 문제풀이에 사용하기 어렵다.

## 공간복잡도
- `프로그램`을 `실행`시킨 후 `완료`하는데 `필요로하는 자원공간의 양`을 말한다.
- 공식으로 표현하면 `총 공간요구 = 고정공간요구 + 가변공간요구`이다.
- `고정공간`: `입력`과 `출력의 횟수`나 `크기와 관계없는 공간`의 요구(`코드 저장공간`, `단순 변수 고정 크기`의 구조 `변수`, `상수`)를 말한다.
- `가변공간`: 해결하려는 문제의 특정 인스턴스에 의존하는 크기를 가진 구조화 변수들을 위해서 필요로 하는 공간, `함수가 순환 호출을 할 경우 요구되는 추가공간`,즉 **동적으로 필요한 공간**을 말한다. <- **함수가 호출될 때마다 스레드에 스택이 쌓이게되기 때문이다.**
- 공간복잡도를 표현할 때 역시 `Big-O(빅오)` 표기법을 사용한다.

- **O(N)** 케이스: 아래의 코드는 재귀적 호출 시 발생하는 상황이다.
```js
function factorial(n) {
    // 함수가 n이 1이 될때까지 연속적으로 호출하기 때문에 공간복잡도는 O(N)이 된다.
    console.log(n);
    if (n > 1) return factorial(n - 1);
    return 1;
}

// 10을 넣으면 총 10번호출되는 N을 넣으면 N번 호출되는 O(N)
console.log("O(N) ==> ", factorial(10));
```

- **O(1)** 케이스
```js
function OneCase(n) {
    // 이 케이스에선 n의 값과 상관없이 스택에 n, i, result 변수만 저장되기 때문에 O(1)이다.
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result
}

console.log("O(1) ==> ", OneCase(10));
```

## 결론
- 시간복잡도는 `얼마나 빠르게 실행되느냐` 그리고 공간 복잡도는 `얼마나 많은 자원이 필요한가`인데, 여기서 결론은 좋은 알고리즘은 `시간도 적게 걸리고 자원의 사용도 적은` 알고리즘이다.
- 그러나, 시간과 공간은 서로 `반비례적인 경향`이 있기 때문에 요즘과 같은 대용량 시대에는 `시간 복잡도`로 알고리즘을 판단함