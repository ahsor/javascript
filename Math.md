# Math
# 어림 계산 
|syntex| 의미|반환|
|---|---|----|
|Math.round(값)|반올림하기 | 숫자 |
|Math.foor(값)|버림하기 | 숫자 |
|Math.ceil(값)|올림하기 | 숫자 |
|Math.trunc(값)|값의 정수부분만 반환 | 숫자 |


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


# 임의의 수 다루기 

- 임의의 확률을 사용해 작업을 처리하고 싶을 때
- 애니메이션에 임의의 값을 부여하고 싶을 때

|syntex| 의미|반환|
|---|---|----|
|Math.random()| 부동 소수점의 유사 난수를 반환 | 숫자 |

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

# 절대값 계산 
