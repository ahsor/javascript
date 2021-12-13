# html, body 요소 읽어오기 
- <html> 요소를 가져오고 싶을때 
- <body> 요소에서 클래스 작업을 하고 싶을때 

|syntex| 의미|반환|
|---|---|----|
|document.documentElement| 루트요소 | html요소 |
|document.head| head요소 | head요소 |
|document.body| body요소 | body요소 |

```
// console을 이용한 객체 출력 
console.dir(document.documentElement );
```
```
// head에 script 태그와 link 태그를 동적으로 삽입할 수 있다. 
const dark = document.createElement('script');
dark.src ='script/new-script.js';
document.head.appendChild(dark);
```

```
<style>
    body.theme-dark {
  background-color: #1e1e1e;
  color: #fff;
}

body.theme-dark .theme-change-button {
  background-color: #1e1e1e;
  color: #fff;
}
    </style>
</head>
<body>
<button class="theme-change-button">배경색 변경</button>
<script>
    const themeChangeButton =
      document.querySelector('.theme-change-button');

    // 테마 변경 버튼 클릭 시 처리
    themeChangeButton.addEventListener('click', () => {
      // body 요소 클래스 「theme-dark」 변경
      document.body.classList.toggle('theme-dark');
    });

</script>
</body>
```

