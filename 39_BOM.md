# 경고 표시하기 

```
<main>
    <h2>알림창 샘플</h2>
    <button>알림창 표시</button>
</main>
// 버튼 참조
const btn = document.querySelector('button');

// 버튼 클릭 시 작업
btn.addEventListener('click', (event) => {
  // 알림창 표시
  alert('안녕하세요! \n좋은 하루 보내세요.');
});

```

# 확인창 표시 
```
<main>
    <h2>확인창 샘플</h2>
    <button>확인창 표시</button>
    <p class="log"></p>
  </main>
// 버튼을 참조
const btn = document.querySelector('button');

// 버튼 클릭 시 작업
btn.addEventListener('click', (event) => {
  // 확인창 표시
  const isYes = confirm('날씨가 화창한가요?');
  // 유저가 입력한 결과를 화면에 표시
  document.querySelector('.log').innerHTML = isYes;
});

```

# 입력 프롬프트 표시 
```
<main>
    <h2>확인창 샘플</h2>
    <button>확인창 표시</button>
    <p class="log"></p>
</main>
// 버튼 참조
const btn = document.querySelector('button');
// 버튼 클릭 시 이벤트
btn.addEventListener('click', (event) => {
  const text = prompt('오늘의 날씨는 어떤가요？', '여기 입력해 주세요');
  // 입력한 문자열을 화면에 표시
  document.querySelector('.log').innerHTML = text;
});

```

# 윈도우 사이즈 확인
- 화면을 브라우저 크기에 맞춰 표시하고 싶을 때
- 화면 폭에 맞춰 처리 작업과 레이아웃을 변경하고 싶을 때
- window 객체는 생략해도 상관 없으며 읽기 전용 속성이므로 수정이 불가능
- resize 이벤트는 window의 resize를 사용하여 확인한다. 

|syntex| 의미|반환|
|---|---|----|
|window.innerWidth| 브라우저 뷰포트의 가로 길이  | 숫자 |
|window.innerHeight| 브라우저 뷰포트의 세로 길이  | 숫자 |

```
<body>
 <main class="centering">
    <p class="value-width"></p>
    <p class="value-height"></p>
  </main>
</body>
```
```
window.addEventListener('resize', resizeHandler);

function resizeHandler(event) {
  // 새로운 화면의 가로 길이
  const w = window.innerWidth;
  // 새로운 화면의 세로 길이
  const h = window.innerHeight;

  document.querySelector('.value-width').innerHTML = `가로 길이는 ${w}px입니다.`;
  document.querySelector('.value-height').innerHTML = `세로 길이는 ${h}px입니다.`;
}

```
# 디바이스 화소 확인하기 
- 디바이스 화소 비율에 따라 제어방식을 구분하고 싶을 때 
- 고해상도 디바이스에서 큰 이미지를 사용하고 싶을 때

|syntex| 의미|반환|
|---|---|----|
|window.devicePixelRatio| 화소 비율의 값 | 숫자 |

픽셀화질 저하시켜서 그림 생성
https://webtongs.com/521

```
body {
  background: url("bg.jpg") center;
}

#myCanvas {
  background: rgba(255, 255, 255, 0.2);
}
```
```
<main>
    <p class="log"></p>
    <div>
      <canvas id="myCanvas"></canvas>
    </div>
</main>
```
```
// 디바이스 픽셀 비율 가져오기
const dpr = window.devicePixelRatio;
// 캔버스의 논리적 크기
const w = 200;
const h = 200;

// 캔버스 요소 사이즈 조정
const canvas = document.querySelector('canvas');
canvas.width = w * dpr; // 실제 크기는 배가 됨
canvas.height = h * dpr;
canvas.style.width = w + 'px'; // 화면 표시 단위 설정
canvas.style.height = h + 'px';

const context = canvas.getContext('2d');
// 스케일 설정
context.scale(dpr, dpr); // 내부적으로 두 배의 사이즈
// 원을 그림
context.fillStyle = 'red';
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
context.fill();

// 화면에 로그를 표시
document.querySelector('.log').innerHTML = `디바이스의 픽셀 비율은 ${dpr}입니다.`;

```

#  터치 디바이스 사용 확인하기 
- 데스크탑과 모바일 브라우저에 따라 처리를 구분하고 싶을 때
- 터치 사용 여부의 확인을 하고 싶을 때 

|syntex| 의미|반환|
|---|---|----|
|window.ontouchstart| 터치 기능 시작 이벤트 | 함수 |
|navigator.pointerEnabled| 포인터 사용 가능 여부 | 진리값 |
|navigator.maxTouchPoints| 포인터 최대치 | 숫자 |

```
const isSupported = !!(
    'ontouchstart' in window || 
    (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
)

//ontouchstartfh 단말기를 확인할 수 있다. 
//navigator.pointerEnabled 로 터치디바이스를 확인할 수 있고 
// navigator.maxTouchPoints > 0 이상인 경우도 터치 가능한 디바이스를 확인할 수 있다. 
```

# 페이지 이동하기 
- a 태그 이외의 방법으로 페이지를 이동하고 싶을 때 

```
// 현재 페이지의 URL 읽어오기 
console.log( location.href )

// URL 변경하기 
 location.href = 'another.html' ;

```

# 페이지 Reload 하기 
- 화면을 새로고침하고 싶을 때 
- 게시판의 새글을 확인할 때 새로고침 버튼 등에 사용 
- 웹게임등의 콘텐츠에서 게임종료시 시작 화면으로 전환하는 기능 
- 메소드를 요청하는 순간  새로고침이 실행됨 


```
// 전달 인수가 없으면 캐시를 사용하여 새로고침이 실행
location.reload();

// true 로 전달하면 캐시를 무시하고 새로고침이 실행
location.reload(true);
```

# 페이지 이동하기 
- 브라우저 앞으로 뒤로 버튼 제어 

|syntex| 의미|반환|
|---|---|----|
|history.back()| 뒤로가기로 화면이동 | 없음 |
|history.forward()| 앞으로가기 화면이동 | 없음 |
|history.go()| 임의의 수만큼 화면이동 | 없음 |

```
// 뒤로가기 화면이동 
history.back()

// 앞으로가기 화면이동 
history.forward()

// 페이지 이동이 있었다는 전제하에서 값지정
history.go(3);

// 뒤로가기와 같음 
history.go(-1);

```
# 새 윈도우 창 열기 
```
window.open('another.html');
win.forcus();
```


# 스크롤 크기 확인하기 
- 

|syntex| 의미|반환|
|---|---|----|
|window.scrollX| 수평방향 스크롤의 크기| 숫자 |
|window.scrollY| 수평방향 스크롤의 크기| 숫자 |

```
const x = window.scrollX; 
const y = window.scrollY; 
console.log( x, y)
```

# 스크롤 설정하기 
- 페이지 원하는 부분에 스크롤 하고 싶을 때 
- 상단으로 가기 버튼을 사용하고 싶을 때 

|syntex| 의미|반환|
|---|---|----|
|scrollTo(X,Y)| 지정한 좌표까지 스크롤 하고 싶을 때 | 없음 |

```
window.scrollTo(0, 1000);
```

# 타이틀 변경하기 
- 페이지 원하는 부분에 스크롤 하고 싶을 때


|syntex| 의미|반환|
|---|---|----|
|scrollTo(X,Y)| 지정한 좌표까지 스크롤 하고 싶을 때 | 없음 |

```
window.scrollTo(0, 1000);
```


```
```
```
```
```
```
```
```

