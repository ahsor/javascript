# 29-01

```javascript
Math.PI; // -> 3.141592653589793
```

# 29-02 절대값 구하기

```javascript
Math.abs(-1);        // -> 1
Math.abs('-1');      // -> 1
Math.abs('');        // -> 0
Math.abs([]);        // -> 0
Math.abs(null);      // -> 0
Math.abs(undefined); // -> NaN
Math.abs({});        // -> NaN
Math.abs('string');  // -> NaN
Math.abs();          // -> NaN
```

# 어림 계산 
|syntex| 의미|반환|
|---|---|----|
|Math.round(값)|반올림하기 | 숫자 |
|Math.foor(값)|버림하기 | 숫자 |
|Math.ceil(값)|올림하기 | 숫자 |
|Math.trunc(값)|값의 정수부분만 반환 | 숫자 |


# 29-03

```javascript
Math.round(1.4);  // -> 1
Math.round(1.6);  // -> 2
Math.round(-1.4); // -> -1
Math.round(-1.6); // -> -2
Math.round(1);    // -> 1
Math.round();     // -> NaN
```

# 29-04

```javascript
Math.ceil(1.4);  // -> 2
Math.ceil(1.6);  // -> 2
Math.ceil(-1.4); // -> -1
Math.ceil(-1.6); // -> -1
Math.ceil(1);    // -> 1
Math.ceil();     // -> NaN
```

# 29-05

```javascript
Math.floor(1.9);  // -> 1
Math.floor(9.1);  // -> 9
Math.floor(-1.9); // -> -2
Math.floor(-9.1); // -> -10
Math.floor(1);    // -> 1
Math.floor();     // -> NaN
```

# 29-06

```javascript
Math.sqrt(9);  // -> 3
Math.sqrt(-9); // -> NaN
Math.sqrt(2);  // -> 1.414213562373095
Math.sqrt(1);  // -> 1
Math.sqrt(0);  // -> 0
Math.sqrt();   // -> NaN
```

# 29-07
# 임의의 수 다루기 

- 임의의 확률을 사용해 작업을 처리하고 싶을 때
- 애니메이션에 임의의 값을 부여하고 싶을 때

|syntex| 의미|반환|
|---|---|----|
|Math.random()| 부동 소수점의 유사 난수를 반환 | 숫자 |

```javascript
Math.random(); // 0에서 1 미만의 랜덤 실수(0.8208720231391746)

/*
1에서 10 범위의 랜덤 정수 취득
1) Math.random으로 0에서 1 미만의 랜덤 실수를 구한 다음, 10을 곱해 0에서 10 미만의
랜덤 실수를 구한다.
2) 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10 범위의 랜덤 실수를 구한다.
3) Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어 버린 다음 정수를 반환한다.
*/
const random = Math.floor((Math.random() * 10) + 1);
console.log(random); // 1에서 10 범위의 정수
```


```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>샘플</title>
  <link rel="stylesheet" href="style.css"/>
  <style> 
  .button {
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  color: #fff;
  cursor: pointer;
  width: 120px;
}

.rectangle {
  width: 100%;
  height: calc(100% - 50px);
  --start: hsl(0, 100%, 50%);
  --end: hsl(322, 100%, 50%);
  background-image: linear-gradient(-135deg, var(--start), var(--end));
}

  </style>
  <script src="main.js" defer></script>
</head>
<body class="chapter-2">
<main>
  <!-- 버튼 -->
  <button class="button">색상 변경</button>
  <!-- 그라데이션이 표시되는 직사각형 -->
  <div class="rectangle"></div>
</main>
</body>
</html>

/** main.js 직사각형 */
const rectangle = document.querySelector('.rectangle');

// 버튼 클릭 시 onClickButton( ) 실행
document.querySelector('.button').addEventListener('click', onClickButton);

/** 버튼을 누를 때마다 그라데이션 색상을 변경 */
function onClickButton() {
  // 0~359 사이 임의의 수를 가져오기
  const randomHue = Math.trunc(Math.random() * 360);
  // 그라데이션의 시작과 끝의 색상을 결정
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  // 직사각형의 그라데이션 처리 변수(--start, --end)
  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}

```



# 29-08

```javascript
Math.pow(2, 8);  // -> 256
Math.pow(2, -1); // -> 0.5
Math.pow(2);     // -> NaN
```

# 29-09

```javascript
// ES7 지수 연산자
2 ** 2 ** 2; // -> 16
Math.pow(Math.pow(2, 2), 2); // -> 16
```

# 29-10

```javascript
Math.max(1); // -> 1
Math.max(1, 2); // -> 2
Math.max(1, 2, 3); // -> 3
Math.max(); // -> -Infinity
```

# 29-11

```javascript
// 배열 요소 중에서 최대값 취득
Math.max.apply(null, [1, 2, 3]); // -> 3

// ES6 스프레드 문법
Math.max(...[1, 2, 3]); // -> 3
```

# 29-12

```javascript
Math.min(1); // -> 1
Math.min(1, 2); // -> 1
Math.min(1, 2, 3); // -> 1
Math.min(); // -> Infinity
```

# 29-13

```javascript
// 배열 요소 중에서 최소값 취득
Math.min.apply(null, [1, 2, 3]); // -> 1

// ES6 스프레드 문법
Math.min(...[1, 2, 3]); // -> 1
```

# Math



```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>샘플</title>
  <link rel="stylesheet" href="style.css"/>
  <script src="main.js" defer></script>
</head>
<body>
<main class="large">
  <table>
    <tr><th>Math.round(6.24)</th><td class="result1"></td></tr>
    <tr><th>Math.ceil(6.24)</th><td class="result2"></td></tr>
    <tr><th>Math.floor(6.24)</th><td class="result3"></td></tr>
    <tr><th>Math.trunc(6.24)</th><td class="result4"></td></tr>
    <tr><th>Math.round(-7.49)</th><td class="result5"></td></tr>
    <tr><th>Math.ceil(-7.49)</th><td class="result6"></td></tr>
    <tr><th>Math.floor(-7.49)</th><td class="result7"></td></tr>
    <tr><th>Math.trunc(-7.49)</th><td class="result8"></td></tr>
  </table>
</main>
</body>
</html>
```

```
// main.js
document.querySelector('.result1').innerHTML = Math.round(6.24);
document.querySelector('.result2').innerHTML = Math.ceil(6.24);
document.querySelector('.result3').innerHTML = Math.floor(6.24);
document.querySelector('.result4').innerHTML = Math.trunc(6.24);
document.querySelector('.result5').innerHTML = Math.round(-7.49);
document.querySelector('.result6').innerHTML = Math.ceil(-7.49);
document.querySelector('.result7').innerHTML = Math.floor(-7.49);
document.querySelector('.result8').innerHTML = Math.trunc(-7.49);

```


