# 문자열 다루기 
- 문자열 길이를 확인하고 싶을 때 
- 문자열 검색을 하고 싶을 때 
- 문자열을 추출 하고 싶을 때 
- 문자열을 변환 하고 싶을 때 
- 문자열을 분할 하고 싶을 때 
- 문자열을 결합 하고 싶을 때 

# 문자열 길이를 확인하고 싶을 때 
|syntex| 의미|반환|
|---|---|----|
|문자열.length |문자열의 길이 | 숫자 |
|Array.from(문자열).length |문자열의 길이 | 숫자 |

# 32-07

```javascript
'Hello'.length;    // -> 5
'안녕하세요!'.length; // -> 6
'javascript'.length; // -> 4
```
# example 
```
<body>
<main>
  <textarea class="textarea"></textarea>
  <p>현재 <span class="string_num">0</span>글자를 입력하였습니다.</p>
</main>
</body>
```
```
.textarea {
  width: 100%;
  height: calc(100% - 40px);
  font-size: 40px;
  background-color: rgba(255, 255, 255, 0.9);
}

p {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: -1px -1px 1px #333333, 1px 1px #ffffff;
  margin: 0;
}
```

```
/** 텍스트영역(textarea) */
let textarea = document.querySelector('.textarea');

/** 입력중인 문자 수 */
let string_num = document.querySelector('.string_num');

//  텍스트를 입력할 때마다 onKeyUp( )을 실행
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
  // 입력된 텍스트
  const inputText = textarea.value;
  // 글자 수를 반영
  string_num.innerText = inputText.length;
}
```

## 문자에 따라 length로 확인 불가능 할 때가 있다
```
'😂'.length; // 2
'😁'.length; // 2
// 자바스크립트는 기본적으로 하나의 문자를 2byte로 취급
// 이모티콘과 특수문자는 4바이트로 표현한다.
// 4바이트 표현 문자 == 서러게이트 쌍

Array.from('👍').length; //1
Array.from('💖').length; //1
```

# 문자열 검색을 하고 싶을 때 
# 문자열을 추출 하고 싶을 때 
# 문자열을 변환 하고 싶을 때 
# 문자열을 분할 하고 싶을 때 
# 문자열을 결합 하고 싶을 때 

# 32-01

```javascript
const strObj = new String();
console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}
```

# 32-02

```javascript
const strObj = new String('Lee');
console.log(strObj);
// String {0: "L", 1: "e", 2: "e", length: 3, [[PrimitiveValue]]: "Lee"}
```

# 32-03

```javascript
console.log(strObj[0]); // L
```

# 32-04

```javascript
// 문자열은 원시값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
strObj[0] = 'S';
console.log(strObj); // 'Lee'
```

# 32-05

```javascript
let strObj = new String(123);
console.log(strObj);
// String {0: "1", 1: "2", 2: "3", length: 3, [[PrimitiveValue]]: "123"}

strObj = new String(null);
console.log(strObj);
// String {0: "n", 1: "u", 2: "l", : "l", length: 4, [[PrimitiveValue]]: "null"}
```

# 32-06

```javascript
// 숫자 타입 => 문자열 타입
String(1);        // -> "1"
String(NaN);      // -> "NaN"
String(Infinity); // -> "Infinity"

// 불리언 타입 => 문자열 타입
String(true);  // -> "true"
String(false); // -> "false"
```


# 32-08

```javascript
const strObj = new String('Lee');

console.log(Object.getOwnPropertyDescriptors(strObj));
/* String 래퍼 객체는 읽기 전용 객체다. 즉, writable 프로퍼티 어트리뷰트 값이 false다.
{
  '0': { value: 'L', writable: false, enumerable: true, configurable: false },
  '1': { value: 'e', writable: false, enumerable: true, configurable: false },
  '2': { value: 'e', writable: false, enumerable: true, configurable: false },
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}
*/
```

# 32-09

```javascript
const str = 'Hello World';

// 문자열 str에서 'l'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('l'); // -> 2


// 문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('or'); // -> 7

// 문자열 str에서 'x'를 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
str.indexOf('x'); // -> -1
```

# 32-10

```javascript
// 문자열 str의 인덱스 3부터 'l'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('l', 3); // -> 3
```

# 32-11

```javascript
if (str.indexOf('Hello') !== -1) {
  // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}
```

# 32-12

```javascript
if (str.includes('Hello')) {
  // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}
```

# 32-13

```javascript
const str = 'Hello world';

// 문자열 str에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
str.search(/o/); // -> 4
str.search(/x/); // -> -1
```

# 32-14

```javascript
const str = 'Hello world';

str.includes('Hello'); // -> true
str.includes('');      // -> true
str.includes('x');     // -> false
str.includes();        // -> false
```

# 32-15

```javascript
const str = 'Hello world';

// 문자열 str의 인덱스 3부터 'l'이 포함되어 있는지 확인
str.includes('l', 3); // -> true
str.includes('H', 3); // -> false
```

# 32-16

```javascript
const str = 'Hello world';

// 문자열 str이 'He'로 시작하는지 확인
str.startsWith('He'); // -> true
// 문자열 str이 'x'로 시작하는지 확인
str.startsWith('x'); // -> false
```

# 32-17

```javascript
// 문자열 str의 인덱스 5부터 시작하는 문자열이 ' '로 시작하는지 확인
str.startsWith(' ', 5); // -> true
```

# 32-18

```javascript
const str = 'Hello world';

// 문자열 str이 'ld'로 끝나는지 확인
str.endsWith('ld'); // -> true
// 문자열 str이 'x'로 끝나는지 확인
str.endsWith('x'); // -> false
```

# 32-19

```javascript
// 문자열 str의 처음부터 5자리까지('Hello')가 'lo'로 끝나는지 확인
str.endsWith('lo', 5); // -> true
```

# 32-20

```javascript
const str = 'Hello';

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // H e l l o
}
```

# 32-21

```javascript
// 인덱스가 문자열의 범위(0 ~ str.length-1)를 벗어난 경우 빈문자열을 반환한다.
str.charAt(5); // -> ''
```

# 32-22

```javascript
const str = 'Hello World';

// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
str.substring(1, 4); // -> ell
```

# 32-23

```javascript
const str = 'Hello World';

// 인덱스 1부터 마지막 문자까지 부분 문자열을 반환한다.
str.substring(1); // -> 'ello World'
```

# 32-24

```javascript
const str = 'Hello World'; // str.length == 11

// 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
str.substring(4, 1); // -> 'ell'

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-2); // -> 'Hello World'

// 인수 > 문자열의 길이(str.length)인 경우 인수는 문자열의 길이(str.length)으로 취급된다.
str.substring(1, 100); // -> 'ello World'
str.substring(20); // -> ''
```

# 32-25

```javascript
const str = 'Hello World';

// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
str.substring(0, str.indexOf(' ')); // -> 'Hello'

// 스페이스를 기준으로 뒤에 있는 부분 문자열 취득
str.substring(str.indexOf(' ') + 1, str.length); // -> 'World'
```

# 32-26

```javascript
const str = 'hello world';

// substring과 slice 메서드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내어 반환
str.substring(0, 5); // -> 'hello'
str.slice(0, 5); // -> 'hello'

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
str.substring(2); // -> 'llo world'
str.slice(2); // -> 'llo world'

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-5); // -> 'hello world'
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
str.slice(-5); // ⟶ 'world'
```

# 32-27

```javascript
const str = 'Hello World!';

str.toUpperCase(); // -> 'HELLO WORLD!'
```

# 32-28

```javascript
const str = 'Hello World!';

str.toLowerCase(); // -> 'hello world!'
```

# 32-29

```javascript
const str = '   foo  ';

str.trim(); // -> 'foo'
```

# 32-30

```javascript
const str = '   foo  ';

str.trim();   // -> 'foo'
// String.prototype.{trimStart,trimEnd} : Proposal stage 4
str.trimStart(); // -> 'foo  '
str.trimEnd();   // -> '   foo'

```

# 32-31

```javascript
const str = '   foo  ';

// 첫 번째 인수로 전달한 정규 표현식에 매치하는 문자열을 두 번째 인수로 전달한 문자열로 치환한다.
str.replace(/\s/g, '');   // -> 'foo'
str.replace(/^\s+/g, ''); // -> 'foo  '
str.replace(/\s+$/g, ''); // -> '   foo'
```

# 32-32

```javascript
const str = 'abc';

str.repeat();    // -> ''
str.repeat(0);   // -> ''
str.repeat(1);   // -> 'abc'
str.repeat(2);   // -> 'abcabc'
str.repeat(2.5); // -> 'abcabc' (2.5 → 2)
str.repeat(-1);  // -> RangeError: Invalid count value
```

# 32-33

```javascript
const str = 'Hello world';

// str에서 첫 번째 인수 'world'를 검색하여 두 번째 인수 'Lee'로 치환한다.
str.replace('world', 'Lee'); // -> 'Hello Lee'
```

# 32-34

```javascript
const str = 'Hello world world';

str.replace('world', 'Lee'); // -> 'Hello Lee world'
```

# 32-35

```javascript
const str = 'Hello world';

// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
str.replace('world', '<strong>$&</strong>');
```

# 32-36

```javascript
const str = 'Hello Hello';

// 'hello'를 대소문자를 구별하지 않고 전역 검색한다.
str.replace(/hello/gi, 'Lee'); // -> 'Lee Lee'
```

# 32-37

```javascript
// 카멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase) {
  // /.[A-Z]/g는 임의의 한 문자와 대문자로 이루어진 문자열에 매치한다.
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
  return camelCase.replace(/.[A-Z]/g, match => {
    console.log(match); // 'oW'
    return match[0] + '_' + match[1].toLowerCase();
  });
}

const camelCase = 'helloWorld';
camelToSnake(camelCase); // -> 'hello_world'

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase) {
  // /_[a-z]/g는 _와 소문자로 이루어진 문자열에 매치한다.
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
  return snakeCase.replace(/_[a-z]]/g, match => {
    console.log(match); // '_w'
    return match[1].toUpperCase();
  });
}

const snakeCase = 'hello_world';
snakeToCamel(snakeCase); // -> 'helloWorld'
```

# 32-38

```javascript
const str = 'How are you doing?';

// 공백으로 구분(단어로 구분)하여 배열로 반환한다.
str.split(' '); // -> ["How", "are", "you", "doing?"]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다. 즉, [\t\r\n\v\f]와 같은 의미다.
str.split(/\s/); // -> ["How", "are", "you", "doing?"]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
str.split(''); // -> ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", "?"]

// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
str.split(); // -> ["How are you doing?"]
```

# 32-39

```javascript
// 공백으로 구분하여 배열로 반환한다. 단, 배열의 길이는 3이다
str.split(' ', 3); // -> ["How", "are", "you"]
```

# 32-40

```javascript
// 인수로 전달받은 문자열을 역순으로 뒤집는다.
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('Hello world!'); // -> '!dlrow olleH'
```
