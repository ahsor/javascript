# 10 객체
자바스크립트를 구성하는 거의 모든 것(함수, 배열, 정규표현식)이 객체다.
함수도 프로퍼티로 사용할 수 있고 프로퍼티 값이 함수일 경우 일반함수와 구분하여 메서드라고 한다.
프로퍼티 : 객체의 상태를 나타내는 값
메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작
javascript 메서드 확인 : ctrl(command) + 함수명 클릭

# 10-01

```javascript
var person = {
  name: 'kim',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "kim", sayHello: ƒ}
```

# 10-02

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

# 10-03

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'kim'
  name: 'kim',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};
 // 프로퍼티를 나열할 때는 쉼표로 구분하고 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 
 // 사용해도 좋다.
```

# 10-04

```javascript
var person = {
  firstName: 'jemicom', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  'last-name': 'kim'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
              // 반드시 따옴표를 붙여야 한다.
};

console.log(person); // {firstName: "jemicom", last-name: "kim"}
```

# 10-05

```javascript
var person = {
  firstName: 'jemicom',
  last-name: 'kim' // SyntaxError: Unexpected token -
};
```

# 10-06

```javascript
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}
```

# 10-07


```javascript
var foo = {
  '': ''  // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}
```

# 10-08

```javascript
var foo = {
  0: 1,
  1: 2,
  2: 3
};

console.log(foo); // {0: 1, 1: 2, 2: 3}
```

# 10-09

```javascript
var foo = {
    // 예약어를 사용해도 에러가 나지 않는다. 
    // 예상치 못한 에러가 발생할 여지가 있으므로 권장하지 않는다.
  var: '',
  function: ''
};

console.log(foo); // {var: "", function: ""}

```

# 10-10

```javascript
var foo = {
  name: 'kim',
  name: 'Kim'
// 중복 선언하면 덮어쓴다. 에러는 발생하지 않는다.
};

console.log(foo); // {name: "Kim"}
```

# 10-11

```javascript
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () { // ← 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  }
};

console.log(circle.getDiameter()); // 10
```

# 10-12

```javascript
var person = {
  name: 'kim'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // kim

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // kim
```
# 10-12-1
```
const o1 = {name:'kim'}
const o2 = {name:'park'}
const o3 = {name:'lee'}

function printValue(obj, key){
    // obj의 어떤 키를 받을지 전혀 모르는 상태라면
    // console.log(obj.key );
    // 어떤 키가 전달되지 전혀 알수 없음 key 자체는 프로퍼티가 아니므로 
    // 오브젝트에 키라는 프로퍼티는 들어 있지 않아서 undefined
    console.log(obj[key]);
    // 전달받은 키를 이미 'name'로 전달하였으므로 ''는 필요없음 
}
printValue(o1, 'name');
// 키는 항상 string 타입으로 전달해야 함

```

# 10-13

```javascript
var person = {
  name: 'kim'
};

console.log(person[name]); // ReferenceError: name is not defined
console.log(person['name']); 
// key는 언제나 string으로 사용해야 함
```

# 10-14

```javascript
var person = {
  name: 'kim'
};

console.log(person.age); // undefined
```

# 10-15

```javascript
var person = {
  'last-name': 'kim',
  1: 10
};

person.'last-name';  // -> SyntaxError: Unexpected string
person.last-name;    // -> 브라우저 환경: NaN
                     // -> Node.js 환경: ReferenceError: name is not defined
person[last-name];   // -> ReferenceError: last is not defined
person['last-name']; // -> kim

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;     // -> SyntaxError: Unexpected number
person.'1';   // -> SyntaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10
```

# 10-16

```javascript
var person = {
  name: 'kim'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person);  // {name: "Kim"}
```

# 10-17

```javascript
var person = {
  name: 'kim'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: "kim", age: 20}
```

# 10-18

```javascript
var person = {
  name: 'kim'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "kim"}
```

# 10-19

```javascript
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}
```

# 10-20

```javascript
// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };
// 프로퍼티와 값이 동일하다면 생략가능

console.log(obj); // {x: 1, y: 2}
```

# 10-21

```javascript
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
// 키값은 문자열로 생성할 수 있고 다음의 연산은 문자열을 만들어 낸다.

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

# 10-22

```javascript
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

# 10-23

```javascript
// ES5
var obj = {
  name: 'kim',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! kim
```

# 10-24

```javascript
// ES6
const obj = {
  name: 'kim',
  // 메서드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! kim
```

# 10-24-1 

```
const person1 = { name:'kim' , age:1}
const person2 = { name:'park' , age:2}
const person3 = { name:'lee' , age:3}
// ... 이런식으로 객체를 생성하는 자체가 과부하
const person4 = makePerson('jemicom', 4);
console.log( person4)

function makePerson(name, age){
    return {
        name:name,
        age:age
    }
    //이런 경우 다음과 같이 축약형 코드를 사용할 수 있다.
    return {
        name,
        age
    }
}

// 즉 makePerson은 클래스 같은 역활을 하는 함수
// 자바스크립트에 클래스가 없을때 함수를 이용하여 사용했음

```

# 10-25 생성자 함수
다른 계산은 하지 않고 순수하게 Object를 생성하는 함수는 다음과 같이 클래스 처럼 
함수명을 대문자로 시작하고 프로퍼티도 this를 사용하며 함수 호출도 new 를 사용한다. 

```
const person4 = new Person('kim', 4);
console.log(person4);

function Person(name, age){
    // this = { }  생략되고
    this.name=name,
    this.age=age
    
    return this;
}
```
# 10-26 객체값 확인 in
```
"use strict";

var name = "홍길동";
var age = 30;
var card = {
  name, // name : name
  age, // age = age
  tel: "010-5475-0763",
  fax: "02-789-8878",
  email: "honggilgdong@gmail.com",
};

console.log(card);

card.gender = "male";
card.hairColor = "brown";
console.log(card);

delete card.hairColor;
console.log(card);

console.log(card.name);
console.log(card["name"]);
console.log(card.birthDay); // 존재하지 않은 속성 접근 undefined 출력
console.log("birthDay" in card); // card에 birthDay 존재하지 않음을 확인하고  결과는 false
console.log("age" in card); // true
```
# 10-25  for in
```
// 객체를 이용한 미성년자 구분
const kim = {
  name: "kim",
  age: 30,
};

const park = {
  name: "park",
};

for (key in kim) {
  console.log(key);
  // key 값은 x, y등 변수명으로 대체하면 됨
}
```

# 10-25  for of
# 10-25  Object.assign
