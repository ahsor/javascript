// select 요소 참조
const element = document.querySelector('#mySelect');

// 값 가져오기
const value = element.value;

// 상태를 화면에 표시
const log = `선택된 값은 ${value}입니다.`;
document.querySelector('.log').innerHTML = log;
