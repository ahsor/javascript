# 09  function
- 처리 작업을 하나로 모아 이름을 지정하고 싶을 때 
- 처리 작업을 반복하여 사용하고 싶을 때 
- 서브프로그램, 재사용 가능, 
- **한가지 작업** 또는 값을 계산하기 위해 사용
- 변수는 명사형태로 이름을 지정하는 것과 달리 함수명은 동사형태로 지정
자바스크립트에서 함수는 object 이므로 함수를 변수에 할당할 수도 있고 
함수를 리턴할 수도 있고 함수를 파라미터로 전달할 수도 있다. 


|syntex| 의미|
|---|---|
|function 함수명(파라미터) {  처리할 내용 }| 함수를 정의|
|return 값|함수 내부의 값을 반환|
|함수명()|함수 실행|


```
function myFunction(a) {  // 매개변수 
    const result = a + 2; 
    return resulte;  // 반환값
};

myFunction(5); // 인수
```

# 함수 구성요소 
|함수구성요소| 설명|
|---|---|
|함수명| - 함수 이름은 식별자로 네이밍 규칙을 준수해야 한다. - 함수이름은 함수 몸체 내에서만 참조할 수 있는 식별자. 함수명은 생략할 수 있고 이를 무기명함수라 하고 이름이 있는 함수를 기명함수라 한다. |
| 매개변수 목록| 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다. 매개변수는 함수를 호출할 때 지정한 인수를 순서대로 할당한다. 매개변수는 함수내에서 변수와 동일하게 취급. |
|함수 몸체 | 함수가 호출 되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드블럭 |



# 09-01 다양한 함수 정의

## 함수 선언문 
```javascript
let a = 10;

function myFunction() {
// 전달되는 파라미터가 없는 함수도 가능하다. 
    const result = a + 2; 
    return result; 
};

## 함수 표현식 
// 전달되는 파라미터가 없는 함수도 가능하다. 
var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출
foo(); // -> 1

// 생성자 함수로서 호출
new foo(); // -> foo {}

// 메서드로서 호출
var obj = { foo: foo };
obj.foo(); // -> 1
```

```javascript
let a = 10;
function myFunction(a, b, c) {
// 함수의 파라미터 개수는 제한이 없으며, 콤마(,)로 구분하여 전달한다. 
    const result = a + b + c; 
    return result; 
};

// 전달되는 파라미터가 없는 함수도 가능하다. 
var foo = function (a, b, c) {
// 함수의 파라미터 개수는 제한이 없으며, 콤마(,)로 구분하여 전달한다. 
    const result = a + b + c; 
    return result; 
};
```

```javascript
// 반환되는 결과를 반환값이라고 하며 return으로 처리한다. 
let a = 10;
function myFunction(a, b, c) {
    const result = a + b + c; 
    return result; 
};

function myFunction(a, b, c) {
    const result = a + b + c; 
    // 반환값이 없는 경우 생략가능 하다. 
};

function myFunction(a, b, c) {
    const result = a + b + c; 
    return 100; 
    // 실행되지 않음
    console.log('실행되지 않음');
};

```


```
//하나의 함수 내에서 return 은 몇번이라도 사용이 가능하다. 
function myFunction(a, b, c) {
    if(a>=100){
        return a; 
    } 
    return b; 
};

```

# example  세금계산 
주어진 원금에 따라 세금을 계산하는 함수를 만드시오.
```
function calcFunction(price, tax){
    const result = price + price * tax;
    return srsult; 
}

const myResult = calFunction(100, 0.1);
console.log( myResult);
```
## 생성자 함수 9-14
var add = new Function('x', 'y', 'return x+y');
생성자 함수로 함수를 생성하는 것은 일반적이지 않으며 바람직하지도 않다. 
부가적인 기능보다 함수처럼 동작하는 것만 확인 

# 09-02

```javascript
var foo = function () {};

// ES6 이전의 모든 함수는 callable이면서 constructor다.
foo(); // -> undefined
new foo(); // -> foo {}
```

# 09-03

```javascript
// 프로퍼티 f에 바인딩된 함수는 callable이며 constructor다.
var obj = {
  x: 10,
  f: function () { return this.x; }
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(obj.f()); // 10

// 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
var bar = obj.f;
console.log(bar()); // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f()); // f {}
```

# 09-04

```javascript
// 콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor이며 프로토타입을 생성한다.
[1, 2, 3].map(function (item) {
  return item * 2;
}); // -> [ 2, 4, 6 ]
```

# 09-05

```javascript
const obj = {
  x: 1,
  // foo는 메서드이다.
  foo() { return this.x; },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수이다.
  bar: function() { return this.x; }
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1
```
# example  
이름과 나이를 저장하는 함수를 제작하세요.
이름과 나이는 객체로 제작하여야 하고 함수는 객체를 리턴하는 함수이어야 함 
```
/*
function mObject(name, age) {
  return {
    name: name, // 변수명이 동일함
    age: age,
    hobby: "read book",
  };
}
*/

function mObject(name, age) {
  return {
    name, // 변수명이 동일하므로 생략할 수 있음
    age,
    hobby: "read book",
  };
}

const kim = mObject("kim", 30);
console.log(kim);
```

# example  
// 객체를 이용한 미성년자 구분하여 출력하세요. 
```
function isAdult(person) {
  if ("age" in person || person.age < 20) {
    // if (!("age" in person || person.age < 20)) { // 성년인지 구분
    return false;
  }
  return true;
}

const kim = {
  name: "kim",
  age: 30,
};

const park = {
  name: "park",
};

console.log(isAdult(kim));
console.log(isAdult(park));
```
# 09-06

```javascript
new obj.foo(); // -> TypeError: obj.foo is not a constructor
new obj.bar(); // -> bar {}
```

# 09-07

```javascript
// obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
obj.foo.hasOwnProperty('prototype'); // -> false

// obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있다.
obj.bar.hasOwnProperty('prototype'); // -> true
```

# 09-08

```javascript
String.prototype.toUpperCase.prototype; // -> undefined
String.fromCharCode.prototype           // -> undefined

Number.prototype.toFixed.prototype; // -> undefined
Number.isFinite.prototype;          // -> undefined

Array.prototype.map.prototype; // -> undefined
Array.from.prototype;          // -> undefined
```

# 09-09

```javascript
const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  // sayHi는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
  // sayHi의 [[HomeObject]]는 sayHi가 바인딩된 객체인 derived를 가리키고
  // super는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  }
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?
```

# 09-10

```javascript
const derived = {
  __proto__: base,
  // sayHi는 ES6 메서드가 아니다.
  // 따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없다.
  sayHi: function () {
    // SyntaxError: 'super' keyword unexpected here
    return `${super.sayHi()}. how are you doing?`;
  }
};
```

# 09-11 화살표 함수
- 함수를 간략히 정의하고 싶을 때 
- this를 지정하고 싶을 때 
- 함수의 실행방식은 일반 함수와 같다. 

|syntex| 의미|
|---|---|
|(파라미터)=>{  처리할 내용 }| 함수를 정의|


```javascript
const multiply = (x, y) => x * y;
// 처리할 내용이 1개인 경우 {}를 생략할 수 있다. 
multiply(2, 3); // -> 6
```

# 09-12

```javascript
const arrow = (x, y) => { ... };
```

# 09-13

```javascript
const arrow = x => { ... };
// 전달하는 파라미터가 1개인 경우 ()를 생략할 수 있다. 
```

# 09-14

```javascript
const arrow = () => { ... };
```

# 09-15

```javascript
// concise body
const power = x => x ** 2;
power(2); // -> 4

// 위 표현은 다음과 동일하다.
// block body
const power = x => { return x ** 2; };
```

# 09-16

```javascript
const arrow = () => const x = 1; // SyntaxError: Unexpected token 'const'

// 위 표현은 다음과 같이 해석된다.
const arrow = () => { return const x = 1; };
```

# 09-62  파라미터 초기값 설정
- 함수 파라미터의 초깃값을 설정하고 싶을 때 
- 함수 파라미터를 생략 가능하도록 설정하고 싶을 때 

```javascript
function sum(x, y = 0) {
// 함수의 파라미터 초깃값을 설정할 수 있다. 
  console.log(arguments);
}

console.log(sum.length); // 1

sum(1);    // Arguments { '0': 1 }
sum(1, 2); // Arguments { '0': 1, '1': 2 }
```

# example 세금이 포함된 가격을 반환하는 함수 
```
function calcFunction(price, tax = 0.08) {
  const result = price + price * tax; 
  return result; 
}

const result1 = calcFunction(100);
console.log(result);

const result2 = calcFunction(100, 0.1);
console.log(result2);
```

# 다수의 파라미터를 가지는 함수
```
function calcSum(...prices) {
    let result = 0; 
    for( const value of prices){
        result += value; 
    }
    
    return result; 
}

const result1 = calcSum(10, 20);
console.log(result); // 30

const result2 = calcSum(5, 10, 15);
console.log(result2);  // 30
```

# 09-17
ES6에 도입, 화살표함수는 항상 익명함수로 정의 한다. 
화살표 함수는 생성자 함수로 사용할 수 없으며 
기존의 this 바인딩이 다르고, prototype 프로퍼티가 없으며 argments생성하지 않는다. 
나중에 다시 설명

```javascript
const arrow = () => { const x = 1; };
```

# 09-18

```javascript
const create = (id, content) => ({ id, content });
create(1, 'JavaScript'); // -> {id: 1, content: "JavaScript"}

// 위 표현은 다음과 동일하다.
const create = (id, content) => { return { id, content }; };
```

# 09-19

```javascript
// { id, content }를 함수 몸체 내의 쉼표 연산자문으로 해석한다.
const create = (id, content) => { id, content };
create(1, 'JavaScript'); // -> undefined
```

# 09-20

```javascript
const sum = (a, b) => {
  const result = a + b;
  return result;
};
```

# 09-21

```javascript
const person = (name => ({
  sayHi() { return `Hi? My name is ${name}.`; }
}))('Lee');

console.log(person.sayHi()); // Hi? My name is Lee.
```

# 09-22

```javascript
// ES5
[1, 2, 3].map(function (v) {
  return v * 2;
});

// ES6
[1, 2, 3].map(v => v * 2); // -> [ 2, 4, 6 ]
```

# 09-23

```javascript
const Foo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
new Foo(); // TypeError: Foo is not a constructor
```

# 09-24

```javascript
const Foo = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다.
Foo.hasOwnProperty('prototype'); // -> false
```

# 09-25

```javascript
function normal(a, a) { return a + a; }
console.log(normal(1, 2)); // 4
```

# 09-09

```javascript
'use strict';

function normal(a, a) { return a + a; }
// SyntaxError: Duplicate parameter name not allowed in this context
```

# 09-27

```javascript
const arrow = (a, a) => a + a;
// SyntaxError: Duplicate parameter name not allowed in this context
```

# 09-28

```javascript
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
    // ①
    return arr.map(function (item) {
      return this.prefix + item; // ②
      // -> TypeError: Cannot read property 'prefix' of undefined
    });
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
```

# 09-29

```javascript
... 를 이용한 다수의 파라미터를 전달할 수도 있다.
add(arr) {
  // this를 일단 회피시킨다.
  const that = this;
  return arr.map(function (item) {
    // this 대신 that을 참조한다.
    return that.prefix + ' ' + item;
  });
}
...
```

# 09-30

```javascript
...
add(arr) {
  return arr.map(function (item) {
    return this.prefix + ' ' + item;
  }, this); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
}
...
```

# 09-31

```javascript
...
add(arr) {
  return arr.map(function (item) {
    return this.prefix + ' ' + item;
  }.bind(this)); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
}
...
```

# 09-32

```javascript
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(item => this.prefix + item);
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']
```

# 09-33

```javascript
// 화살표 함수는 상위 스코프의 this를 참조한다.
() => this.x;

// 익명 함수에 상위 스코프의 this를 주입한다. 위 화살표 함수와 동일하게 동작한다.
(function () { return this.x; }).bind(this);
```

# 09-34

```javascript
// 중첩 함수 foo의 상위 스코프는 즉시 실행 함수다.
// 따라서 화살표 함수 foo의 this는 상위 스코프인 즉시 실행 함수의 this를 가리킨다.
(function () {
  const foo = () => console.log(this);
  foo();
}).call({ a: 1 }); // { a: 1 }

// bar 함수는 화살표 함수를 반환한다.
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar다.
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다.
(function () {
  const bar = () => () => console.log(this);
  bar()();
}).call({ a: 1 }); // { a: 1 }
```

# 09-35

```javascript
// 전역 함수 foo의 상위 스코프는 전역이므로 화살표 함수 foo의 this는 전역 객체를 가리킨다.
const foo = () => console.log(this);
foo(); // window
```

# 09-36

```javascript
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
const counter = {
  num: 1,
  increase: () => ++this.num
};

console.log(counter.increase()); // NaN
```

# 09-37

```javascript
window.x = 1;

const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1
```

# 09-38

```javascript
const add = (a, b) => a + b;

console.log(add.call(null, 1, 2));    // 3
console.log(add.apply(null, [1, 2])); // 3
console.log(add.bind(null, 1, 2)());  // 3
```

# 09-39

```javascript
// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

// sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
// 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는
// window.name과 같다. 전역 객체 window에는 빌트인 프로퍼티 name이 존재한다.
person.sayHi(); // Hi
```

# 09-40

```javascript
// Good
const person = {
  name: 'Lee',
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
};

person.sayHi(); // Hi Lee
```

# 09-41

```javascript
// Bad
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const person = new Person('Lee');
// 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
person.sayHi(); // Hi
```

# 09-42

```javascript
// Good
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () { console.log(`Hi ${this.name}`); };

const person = new Person('Lee');
person.sayHi(); // Hi Lee
```

# 09-43

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
  constructor: Person,
  sayHi() { console.log(`Hi ${this.name}`); }
};

const person = new Person('Lee');
person.sayHi(); // Hi Lee
```

# 09-44

```javascript
// Bad
class Person {
  // 클래스 필드 정의 제안
  name = 'Lee';
  sayHi = () => console.log(`Hi ${this.name}`);
}

const person = new Person();
person.sayHi(); // Hi Lee
```

# 09-45

```javascript
class Person {
  constructor() {
    this.name = 'Lee';
    // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다.
    // sayHi 프로퍼티는 인스턴스 프로퍼티이다.
    this.sayHi = () => console.log(`Hi ${this.name}`);
  }
}
```

# 09-46

```javascript
// Good
class Person {
  // 클래스 필드 정의
  name = 'Lee';

  sayHi() { console.log(`Hi ${this.name}`); }
}
const person = new Person();
person.sayHi(); // Hi Lee
```

# 09-47

```javascript
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
  sayHi = () => `${super.sayHi()} how are you doing?`;
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee how are you doing?
```

# 09-48

```javascript
(function () {
  // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
  const foo = () => console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
  foo(3, 4);
}(1, 2));

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.
const foo = () => console.log(arguments);
foo(1, 2); // ReferenceError: arguments is not defined
```

# 09-49

```javascript
function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
```

# 09-50

```javascript
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);
```

# 09-51

```javascript
// 다수의 파라미터를 전달할 수있다. 
function foo(...rest, param1, param2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```

# 09-52

```javascript
function foo(...rest1, ...rest2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```

# 09-53

```javascript
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2
```

# 09-54

```javascript
// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum() {
  // 가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
  console.log(arguments);
}

sum(1, 2); // {length: 2, '0': 1, '1': 2}
```

# 09-55

```javascript
function sum() {
  // 유사 배열 객체인 arguments 객체를 배열로 변환한다.
  var array = Array.prototype.slice.call(arguments);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

# 09-56

```javascript
function sum(...args) {
  // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

# 09-57

```javascript
function sum(x, y) {
  return x + y;
}

console.log(sum(1)); // NaN
```

# 09-58

```javascript
function sum(x, y) {
  // 인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당한다.
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1));    // 1
```

# 09-59

```javascript
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1));    // 1
```

# 09-60

```javascript
function logName(name = 'Lee') {
  console.log(name);
}

logName();          // Lee
logName(undefined); // Lee
logName(null);      // null
```

# 09-61

```javascript
function foo(...rest = []) {
  console.log(rest);
}
// SyntaxError: Rest parameter may not have a default initializer
```



