# 객체와 클래스 : es6 추가 
- 자바스크립트를 객체지향 프로그래밍 하고자 할때 
- 클래스는 붕어빵을 만들 수 있는 틀
- 클래스 자체에는 틀 즉 템플릿만 정의 해두고 데이터는 들어 있지 않다. 
- 클래스는 메모리에 올라가진 않고 
- 클래스에 데이터를 넣어서 만들 것을 오브젝트라고 한다. 
- 오브젝트는 메모리에도 올라감 
- 팥붕어빵, 크림붕어빵, 피자붕어빵 ....
- 클래스 안에는 객체를 나타내는 속성 = 필드가 들어 있고 
- 동작을 나타내는 메소드가 들어 있다. 
- 연관있는 데이터를 묶어놓은 묶음
- 클래스 안에는 데이터(필드)만 들어 있을 수 있음 

# 클래스와 생성자 함수 비교
| 클래스 | 생성자 함수 |
|---|---|
| new 연산자 없이 호출하면 에러발생 | new 연산 없이 호출하면 일반함수로 호출 |
| 상속을 지원하는 extends, super 키워드 제공| extends, super 키워드 제공하지 않음  | 
| 호이스팅이 발생하지 않는 것 처럼 동작 | 함수 선언문으로 선언된 생성자 함수는 호이스팅, 함수 표현식으로 정의한 생성자함수는 변수 호이스팅이발생|
| 모든 코드에 암묵적으로 strict mode지정되고 해제할 수 없다. | 암묵적으로 지정되지 않음 |

- 클래스의 constructor, 프로토타입 메서드 , 정적메서드는 모두 프로퍼티 어트리 뷰트 값이 false, 열거되지 않는다. 
- 비슷하지만 클래스는 생성자 함수기반의 객체 생성 방식보다 견고하고 명료하다.

- 

# 25-01 기본 클래스 모양 

```javascript
// ES5 생성자 함수  17.md 참고
var Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + this.name);
  };

  // 생성자 함수 반환
  return Person;
}());

// 인스턴스 생성
var me = new Person('kim');
me.sayHi(); // Hi! My name is kim
```

# 25-02

키워드 **class**를 사용해 클래스를 선언하며 클래스명은** 파스칼 케이스**를 사용하는 것이 일반적이다. 파스칼케이스를 사용하지 않아도 no error

```javascript
// 클래스 선언문
class Person {}
```

# 25-03

표현식으로 클래스를 정의할 수도 있다. 
이때 클래스는 함수와 마찬가지로 이름을 가질 수도 있고 갖지 않을 수도 있다. 
클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급객체라는 뜻

```javascript
// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};
```

# 클래스 특징
1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 실행 가능
2. 변수나 자료구조(배열, 객체 등)에 저장할 수 있다. 
3. 함수의 매개변수에게 전달할 수 있다. 
4. 함수의 변환값으로 사용할 수 있다. 
5. **클래스는 함수다**
6. 클래스는 값처럼 사용할 수 있는 일급객체다.
7. 클래스는 몸체에 정의할 수 있는 메서드는 constructor, 프로토타입 메서드, 정적 메서드 3가지


# 25-04  생성자 
- 클래스에 constructor()를 삽입하면 초기화시 해당 메소드가 실행
- constructor()문의 삽입은 한번만 가능
- 클래스를 초기화 할때 초기값을 constructor() 인수로 전달하여 외부값을 사용할 수 있다.
- 클래스는 고유의 변수와 함수를 가질 수 있으며 이를 멤버라고 한다. 

```javascript
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!');
  }
}

```

- class 선언으로 정의한 클래스를 실제 데이터로 사용하기 위해서 
  ** new ** 연산자를 사용하며 인스턴스가 필요하다. 
- 인스턴스화한 데이터는  멤버에 접근이 가능하다. 

```
// 인스턴스 생성
const me = new Person('kim');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // kim

// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is kim

// 정적 메서드 호출
Person.sayHello(); // Hello!
```

# 25-05
클래스는 런타임 이전에 먼저 평가되어 함수 객체를 생성한다. 

```javascript
// 클래스 선언문
class Person {}
// 생성자 함수를 호출하여 함수로 평가

console.log(typeof Person); // function
```

# 25-06
클래스는 let, const로 선언한 변수처럼 호이스팅이 된다.
단 클래스는 클래스 정의 이전에 참조할 수 없다. 

```javascript
console.log(Person);
// ReferenceError: Cannot access 'Person' before initialization

// 클래스 선언문
class Person {}
```

# 25-07

```javascript
const Person = '';

{
  // 호이스팅이 발생하지 않는 것처럼 보이나 그렇다면 ''이 출력되어야 한다.
  console.log(Person);
  // ReferenceError: Cannot access 'Person' before initialization
  // 단 클래스는 클래스 정의 이전에 참조할 수 없다. 
  // 클래스 선언문
  class Person {}
}
```

# 25-08

함수는 new 연산자의 호출에 따라 일반함수로 호출되거나 인스턴스 생성을 위한 생성자 함수로 호출되지만 클래스는 반드시 new 연산자와 함께 호출 되어야 한다. 

```javascript
class Person {}

// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}
```

# 25-09

```javascript
class Person {}

// 클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
const me = Person();
// TypeError: Class constructor Foo cannot be invoked without 'new'
```

# 25-10

```javascript
const Person = class MyClass {};

// 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const me = new Person();

// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
console.log(MyClass); // ReferenceError: MyClass is not defined

const you = new MyClass(); // ReferenceError: MyClass is not defined
```

# 25-11
생성자는 인스턴스를 생성하고 초기화 하기 위한 특수 메서드로 이름을 변경할 수 없다.

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}
```

# 25-12
크롬 개발자 도구로 확인할 것 
인스턴스에 constructor를 보이지 않는다. 
함수 객체의 일부가 되어 클래스가 정의되어 평가되면 constructor가 동작을 하는 함수객체가 된다. 

```javascript
// 클래스는 함수다.
console.log(typeof Person); // function
console.dir(Person);
```

# 25-13
크롬 개발자 도구로 확인할 것 
```javascript
// 인스턴스 생성
const me = new Person('kim');
console.log(me);
```
# 생성자
# 25-14  클래스 변수 = 멤버 = 필드
- 클래스 멤버 변수를 정의하기 위해서는 constructor() 내부에 
  `this.변수명`을 사용한다. 여기서 this는 자신을 가르킨다. 
- 클래스 멤버 변수는 let이나 const 선언을 사용하지 않는다. 
- 클래스 멤버 변수는 초기값 대입이 가능하며 대입하지 않은 경우 undefined로 정의 
- constructor()문의 삽입은 한번만 가능
- 인스턴스를 초기화 하려면 클래스를 생략하면 안된다. 
- constructor()는 별도의 return 문을 갖지 않아야 한다. 이유는 new로 인스턴스 생성시 암묵적으로 this를 리턴하기 때문이다.


```javascript
// 클래스
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// 생성자 함수
function Person(name) {
  // 인스턴스 생성 및 초기화
  this.name = name;
}
```

# 25-15
- constructor()문의 삽입은 한번만 가능

```javascript
class Person {
  constructor() {}
  constructor() {}
}
// SyntaxError: A class may only have one constructor
```

# 25-16
- 인스턴스를 초기화 하려면 클래스를 생략하면 안된다. 

```javascript
class Person {}
```

# 25-17

```javascript
class Person {
  // constructor를 생략하면 다음과 같이 빈 constructor가 암묵적으로 정의된다.
  constructor() {}
}

// 빈 객체가 생성된다.
const me = new Person();
console.log(me); // Person {}
```

# 25-18
- 클래스 멤버 변수는 초기값 대입이 가능하며 대입하지 않은 경우 undefined로 정의

```javascript
class Person {
  constructor() {
    // 고정값으로 인스턴스 초기화
    this.name = 'kim';
    this.address = 'Seoul';
  }
}

// 인스턴스 프로퍼티가 추가된다.
const me = new Person();
console.log(me); // Person {name: "kim", address: "Seoul"}
```

# 25-19

```javascript
class Person {
  constructor(name, address) {
    // 인수로 인스턴스 초기화
    this.name = name;
    this.address = address;
  }
}

// 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
const me = new Person('kim', 'Seoul');
console.log(me); // Person {name: "kim", address: "Seoul"}
```

# 25-20

```javascript
class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person('kim');
console.log(me); // {}
```

# 25-21

```javascript
class Person {
  constructor(name) {
    this.name = name;

    // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    // 클래스의 기본 동작을 훼손한다. 
    return 100;
  }
}

const me = new Person('kim');
console.log(me); // Person { name: "kim" }
```

# 25-22  프로토타입 메서드
생성자 함수를 사용하는 경우 명시적으로 프로토타입 메서드를 추가하여야 한다. 

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('kim');
me.sayHi(); // Hi! My name is kim
```

# 25-23
클래스에서는 prototype을 추가하지 않아도 기본적으로 프로토타입 메서드가 된다. 

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person('kim');
me.sayHi(); // Hi! My name is kim
```

# 25-24

```javascript
// me 객체의 프로토타입은 Person.prototype이다.
Object.getPrototypeOf(me) === Person.prototype; // -> true
me instanceof Person; // -> true

// Person.prototype의 프로토타입은 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; // -> true
me instanceof Object; // -> true

// me 객체의 constructor는 Person 클래스다.
me.constructor === Person; // -> true
```

# 25-25 정적메서드 

인스턴스를 생성하지 않아도 호출할 수 있는 메서드로 생성자 함수의 경우 다음과 같이 추가한다.

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 정적 메서드
Person.sayHi = function () {
  console.log('Hi!');
};

// 정적 메서드 호출
Person.sayHi(); // Hi!
```

# 25-26  클래스 정적메서드 static

- 클래스의 인스턴스화 없이 호출하는 메소드를 정적 메소드라고 하고 
- static 선언으로 정의하며 호출은 '클래스명.메소드'를 사용
- 다양한 용도로 사용할 수 있는 범용 메소드를 정의하거나 
- 클래스에 의존하지 않는 함수를 정의할 때 사용 

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 정적 메서드
  static sayHi() {
    console.log('Hi!');
  }
}
```

# 25-27  정적메서드 static
- static 선언으로 정의하며 호출은 '클래스명.메소드'를 사용

```javascript

// 정적 메서드는 인스턴스 없이  클래스로 호출한다.
Person.sayHi(); // Hi!
```

# 25-28

```javascript
// 인스턴스 생성
const me = new Person('kim');
me.sayHi(); // TypeError: me.sayHi is not a function
```

# 정적메서드와 프로토타입 메서드 차이 
1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출하다.ㄴ 
3. 정적 메서드는 인스턴스 프로퍼티(멤버)를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다. 

# 25-29

```javascript
class Square {
  // 정적 메서드
  static area(width, height) {
    // 인스턴스 프로퍼티를 참조하지 않음
    return width * height;
  }
}

console.log(Square.area(10, 10)); // 100
```

# 25-30

```javascript
class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 프로토타입 메서드
  // 인스턴스 프로퍼티를 참조한다면 프로토타입 메서드를 사용해야 한다.
  area() {
    return this.width * this.height;
  }
}

const square = new Square(10, 10);
console.log(square.area()); // 100
```

# 25-31

```javascript
// 표준 빌트인 객체의 정적 메서드
Math.max(1, 2, 3);          // -> 3
Number.isNaN(NaN);          // -> true
JSON.stringify({ a: 1 });   // -> "{"a":1}"
Object.is({}, {});          // -> false
Reflect.has({ a: 1 }, 'a'); // -> true
```

# 클래스에서 정의한 메서드 특징
1. function 키워드를 생략한 메서드 축약 표현을 사용
2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요 없다. 
   const person = { name:'kim', age:function(){ return 30; } }
   person.age(); // 객체 함수 사용법

3. 암묵적으로 strict mode로 실행
4. for...in문이나 Object.keys 메서드로 열거할 수 없다. 
5. 내부 메서드를 갖지 않는 non-constructor로 new 연산자로 호출할 수 없다.

# 25-32

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Person {}
    console.log(Object.getPrototypeOf(this) === Person.prototype); // true

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name;

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}
```

# 25-33
인스턴스 프로퍼티는 constructor 내부에서 정의한다. 

```javascript
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person('kim');
console.log(me); // Person {name: "kim"}
```

# 25-34

```javascript
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name; // name 프로퍼티는 public하다.
  }
}

const me = new Person('kim');

// name은 public하다.
console.log(me.name); // kim
```

# 25-35 클래스 데이터의 setter, getter 사용

- 인스턴스 프로퍼티는 언제나 public이다. 
- 클래스의 필드처럼 동작하는 함수를 사용하고 싶을때
- setter/getter는 필드와 같은 방식으로 동작
- set속성명(값){ }  : 값을 설정하는 함수 정의
- get속성명(){ }  :  값을 가져오는 함수 정의
- setter와 getter의 이름은 같다. 

```javascript
const person = {
  // 데이터 프로퍼티
  firstName: 'jemicom',
  lastName: 'kim',
  // = 연산자가 아님을 확인하고 
  // 생성자 함수 없음 


  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // this 없이 사용하면 무한 loop에 빠지며 문제 발생 
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당: "36.1. 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(' ');
    // 자동 생성자 함수가 호출, 문제 발생을 줄이기 위해 this 사용
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`); // jemicom kim

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'jemicom kim';
console.log(person); // {firstName: "jemicom", lastName: "kim"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // jemicom kim

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}
```

# 25-36  생성자를 이용한 필드 초기화
```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.lastName은 get fullName을 호출하고 
    // lastName set fullName을 호출한다. 
    // 때문에 call stack error
  }
  /*
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter 함수
  set fullName(firstName, lastName ) {
     this.firstName = firstName;
     this.lastName = lastName;
     // 때문에 call stack error
     // 때문에 setter나 getter에서 사용되는 변수는 다른 모양으로 이름을 만들어준다. 
  }
  */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  set fullName(firstName, lastName ) {
     this._firstName = firstName;
     this._lastName = lastName;
  }
}

const me = new Person('jemicom', 'kim');

```

# 25-36  생성자를 이용한 필드 초기화

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.lastName은 get fullName을 호출하고 
    // lastName set fullName을 호출한다. 
    // 때문에 call stack error
  }

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me = new Person('jemicom', 'kim');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${me.firstName} ${me.lastName}`); // jemicom kim

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me.fullName = 'jemicom kim';
console.log(me); // {firstName: "jemicom", lastName: "kim"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(me.fullName); // jemicom kim

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
```

# 25-37

```javascript
// Object.getOwnPropertyNames는 비열거형(non-enumerable)을 포함한 모든 프로퍼티의 이름을 반환한다.(상속 제외)
Object.getOwnPropertyNames(me); // -> ["firstName", "lastName"]
Object.getOwnPropertyNames(Object.getPrototypeOf(me)); // -> ["constructor", "fullName"]
```

# 25-38

```java
// 자바의 클래스 정의
public class Person {
  // ① 클래스 필드 정의
  // 클래스 필드는 클래스 몸체에 this 없이 선언해야 한다.
  private String firstName = "";
  private String lastName = "";

  // 생성자
  Person(String firstName, String lastName) {
    // ③ this는 언제나 클래스가 생성할 인스턴스를 가리킨다.
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public String getFullName() {
    // ② 클래스 필드 참조
    // this 없이도 클래스 필드를 참조할 수 있다.
    return firstName + " " + lastName;
  }
}
```

# 25-39

```javascript
class Person {
  // 클래스 필드 정의
  name = 'kim';
}

const me = new Person('kim');
```

# 25-40

```javascript
class Person {
  // 클래스 필드 정의
  name = 'kim';
}

const me = new Person();
console.log(me); // Person {name: "kim"}
```

# 25-41

```javascript
class Person {
  // this에 클래스 필드를 바인딩해서는 안된다.
  this.name = ''; // SyntaxError: Unexpected token '.'
}
```

# 25-42

```javascript
class Person {
  // 클래스 필드
  name = 'kim';

  constructor() {
    console.log(name); // ReferenceError: name is not defined
  }
}

new Person();
```

# 25-43

```javascript
class Person {
  // 클래스 필드를 초기화하지 않으면 undefined를 갖는다.
  name;
}

const me = new Person();
console.log(me); // Person {name: undefined}
```

# 25-44

```javascript
class Person {
  name;

  constructor(name) {
    // 클래스 필드 초기화.
    this.name = name;
  }
}

const me = new Person('kim');
console.log(me); // Person {name: "kim"}
```

# 25-45

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person('kim');
console.log(me); // Person {name: "kim"}
```

# 25-46

```javascript
class Person {
  // 클래스 필드에 문자열을 할당
  name = 'kim';

  // 클래스 필드에 함수를 할당
  getName = function () {
    return this.name;
  }
  // 화살표 함수로 정의할 수도 있다.
  // getName = () => this.name;
}

const me = new Person();
console.log(me); // Person {name: "kim", getName: ƒ}
console.log(me.getName()); // kim
```

# 25-47

```html
<!DOCTYPE html>
<html>
<body>
  <button class="btn">0</button>
  <script>
    class App {
      constructor() {
        this.$button = document.querySelector('.btn');
        this.count = 0;

        // increase 메서드를 이벤트 핸들러로 등록
        // 이벤트 핸들러 increase 내부의 this는 DOM 요소(this.$button)를 가리킨다.
        // 하지만 increase는 화살표 함수로 정의되어 있으므로
        // increase 내부의 this는 인스턴스를 가리킨다.
        this.$button.onclick = this.increase;

        // 만약 increase가 화살표 함수가 아니라면 bind 메서드를 사용해야 한다.
        // $button.onclick = this.increase.bind(this);
      }

      // 인스턴스 메서드
      // 화살표 함수 내부의 this는 언제나 상위 컨텍스트의 this를 가리킨다.
      increase = () => this.$button.textContent = ++this.count;
    }
    new App();
  </script>
</body>
</html>
```

# 25-48

```javascript
class Person {
  constructor(name) {
    this.name = name; // 인스턴스 프로퍼티는 기본적으로 public하다.
  }
}

// 인스턴스 생성
const me = new Person('kim');
console.log(me.name); // kim
```

# 25-49

```javascript
class Person {
  name = 'kim'; // 클래스 필드도 기본적으로 public하다.
}

// 인스턴스 생성
const me = new Person();
console.log(me.name); // kim
```


# 25-50  public과 private
- 가장 최근에 추가된 기능으로 아직은 많이 사용하고 있지 않음 
- 크롬 72이상, node 12 이상 
- 사용하려면 바벨을 사용해야 함 

```javascript
class Person {
  // private 필드 정의 : 외부에 노출 되지 않음 
  #name = '';

  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }
}

const me = new Person('kim');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
console.log(me.#name);
// SyntaxError: Private field '#name' must be declared in an enclosing class
```

# 25-51

```javascript
class Person {
  // private 필드 정의
  #name = '';

  constructor(name) {
    this.#name = name;
  }

  // name은 접근자 프로퍼티다.
  get name() {
    // private 필드를 참조하여 trim한 다음 반환한다.
    return this.#name.trim();
  }
}

const me = new Person(' kim ');
console.log(me.name); // kim
```

# 25-52

```javascript
class Person {
  constructor(name) {
    // private 필드는 클래스 몸체에서 정의해야 한다.
    this.#name = name;
    // SyntaxError: Private field '#name' must be declared in an enclosing class
  }
}
```

# 25-53 example

```javascript
class MyMath {
  // static public 필드 정의 : 외부에서 직접 사용할 수 있음 
  // static 선언은 생략할 수 있음 
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11
```

# 25-54  클래스 상속 
- 다른 클래스의 기능을 확장한 클래스를 생성하고 싶을 때 
- 빌트인 객체를 상속하고 싶을 때 
- class 클래스명 extends 생성클래스명{}

```javascript
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() { return 'eat'; }

  move() { return 'move'; }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() { return 'fly'; }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat());  // eat
console.log(bird.move()); // move
console.log(bird.fly());  // fly
```

# 25-55 생성자 함수 상속 
자바스크립트는 클래스 기반 언어가 아니므로 생성자 함수를 사용하여 클래스를 흉내 내려는 시도를 권장하진 않지만 의사클래스를 상속하는 패턴을 사용하여 클래스를 확장할 수 있다. 

```javascript
// 의사 클래스 상속(pseudo classical inheritance) 패턴
var Animal = (function () {
  function Animal(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  Animal.prototype.eat = function () {
    return 'eat';
  };

  Animal.prototype.move = function () {
    return 'move';
  };

  return Animal;
}());

// Animal 생성자 함수를 상속하여 확장한 Bird 생성자 함수
var Bird = (function () {
  function Bird() {
    // Animal 생성자 함수에게 this와 인수를 전달하면서 호출
    Animal.apply(this, arguments);
    // 생성자함수의 상속
  }

  // Bird.prototype을 Animal.prototype을 프로토타입으로 갖는 객체로 교체
  Bird.prototype = Object.create(Animal.prototype);
  // Bird.prototype.constructor을 Animal에서 Bird로 교체
  Bird.prototype.constructor = Bird;

  Bird.prototype.fly = function () {
    return 'fly';
  };

  return Bird;
}());

var bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird.eat());  // eat
console.log(bird.move()); // move
console.log(bird.fly());  // fly
```

# 25-56  클래스 상속

```javascript
// 수퍼(베이스/부모)클래스
class Base {}

// 서브(파생/자식)클래스
class Derived extends Base {}
```

# 25-57
extends 는 클래스 뿐아니라 생성자함수를 상속 받을 수 있다. 
```javascript
// 생성자 함수
function Base(a) {
  this.a = a;
}

// 생성자 함수를 상속받는 서브클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived); // Derived {a: 1}
```

# 25-58

```javascript
function Base1() {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
class Derived extends (condition ? Base1 : Base2) {}

const derived = new Derived();
console.log(derived); // Derived {}

console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false
```

# 25-59

```javascript
constructor() {}
```

# 25-60

```javascript
constructor(...args) { super(...args); }
```

# 25-61

```javascript
// 수퍼클래스
class Base {}

// 서브클래스
class Derived extends Base {}
```

# 25-62

```javascript
// 수퍼클래스
class Base {
  constructor() {}
}

// 서브클래스
class Derived extends Base {
  constructor() { super(); }
}

const derived = new Derived();
console.log(derived); // Derived {}
```

# 25-63

```javascript
// 수퍼클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived extends Base {
  // 다음과 같이 암묵적으로 constructor가 정의된다.
  // constructor(...args) { super(...args); }
}

const derived = new Derived(1, 2);
console.log(derived); // Derived {a: 1, b: 2}
```

# 25-64

```javascript
// 수퍼클래스
class Base {
  constructor(a, b) { // ④
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived extends Base {
  constructor(a, b, c) { // ②
    super(a, b); // ③
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3); // ①
console.log(derived); // Derived {a: 1, b: 2, c: 3}
```

# 25-65

```javascript
class Base {}

class Derived extends Base {
  constructor() {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    console.log('constructor call');
  }
}

const derived = new Derived();
```

# 25-66

```javascript
class Base {}

class Derived extends Base {
  constructor() {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.a = 1;
    super();
  }
}

const derived = new Derived(1);
```

# 25-67

```javascript
class Base {
  constructor() {
    super(); // SyntaxError: 'super' keyword unexpected here
  }
}

function Foo() {
  super(); // SyntaxError: 'super' keyword unexpected here
}
```

# 25-68

```javascript
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브클래스
class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived('kim');
console.log(derived.sayHi()); // Hi! kim. how are you doing?
```

# 25-69

```javascript
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  sayHi() {
    // __super는 Base.prototype을 가리킨다.
    const __super = Object.getPrototypeOf(Derived.prototype);
    return `${__super.sayHi.call(this)} how are you doing?`;
  }
}
```

# 25-70

```javascript
/*
[[HomeObject]]는 메서드 자신을 바인딩하고 있는 객체를 가리킨다.
[[HomeObject]]를 통해 메서드 자신을 바인딩하고 있는 객체의 프로토타입을 찾을 수 있다.
예를 들어, Derived 클래스의 sayHi 메서드는 Derived.prototype에 바인딩되어 있다.
따라서 Derived 클래스의 sayHi 메서드의 [[HomeObject]]는 Derived.prototype이고
이를 통해 Derived 클래스의 sayHi 메서드 내부의 super 참조가 Base.prototype으로 결정된다.
따라서 super.sayHi는 Base.prototype.sayHi를 가리키게 된다.
*/
super = Object.getPrototypeOf([[HomeObject]])
```

# 25-71

```javascript
const obj = {
  // foo는 ES6의 메서드 축약 표현으로 정의한 메서드다. 따라서 [[HomeObject]]를 갖는다.
  foo() {},
  // bar는 ES6의 메서드 축약 표현으로 정의한 메서드가 아니라 일반 함수다.
  // 따라서 [[HomeObject]]를 갖지 않는다.
  bar: function () {}
};
```

# 25-72

```javascript
const base = {
  name: 'kim',
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  // ES6 메서드 축약 표현으로 정의한 메서드다. 따라서 [[HomeObject]]를 갖는다.
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  }
};

console.log(derived.sayHi()); // Hi! kim. how are you doing?
```

# 25-73

```javascript
// 수퍼클래스
class Base {
  static sayHi() {
    return 'Hi!';
  }
}

// 서브클래스
class Derived extends Base {
  static sayHi() {
    // super.sayHi는 수퍼클래스의 정적 메서드를 가리킨다.
    return `${super.sayHi()} how are you doing?`;
  }
}

console.log(Derived.sayHi()); // Hi! how are you doing?
```

# 25-74

```javascript
// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

// 서브클래스
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle); // ColorRectangle {width: 2, height: 4, color: "red"}

// 상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red
```

# 25-75

```javascript
// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // ColorRectangle {}
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target); // ColorRectangle
...
```

# 25-76

```javascript
// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // ColorRectangle {}
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target); // ColorRectangle

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
    console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype); // true
    console.log(this instanceof ColorRectangle); // true
    console.log(this instanceof Rectangle); // true
...
```

# 25-77

```javascript
// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // ColorRectangle {}
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
    console.log(new.target); // ColorRectangle

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
    console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype); // true
    console.log(this instanceof ColorRectangle); // true
    console.log(this instanceof Rectangle); // true

    // 인스턴스 초기화
    this.width = width;
    this.height = height;

    console.log(this); // ColorRectangle {width: 2, height: 4}
  }
...
```

# 25-78

```javascript
// 서브클래스
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);

    // super가 반환한 인스턴스가 this에 바인딩된다.
    console.log(this); // ColorRectangle {width: 2, height: 4}
...
```

# 25-79

```javascript
// 서브클래스
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);

    // super가 반환한 인스턴스가 this에 바인딩된다.
    console.log(this); // ColorRectangle {width: 2, height: 4}

    // 인스턴스 초기화
    this.color = color;

    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    console.log(this); // ColorRectangle {width: 2, height: 4, color: "red"}
  }
...
```

# 25-80

```javascript
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray); // MyArray(4) [1, 1, 2, 3]

// MyArray.prototype.uniq 호출
console.log(myArray.uniq()); // MyArray(3) [1, 2, 3]
// MyArray.prototype.average 호출
console.log(myArray.average()); // 1.75
```

# 25-81

```javascript
console.log(myArray.filter(v => v % 2) instanceof MyArray); // true
```

# 25-82

```javascript
// 메서드 체이닝
// [1, 1, 2, 3] => [ 1, 1, 3 ] => [ 1, 3 ] => 2
console.log(myArray.filter(v => v % 2).uniq().average()); // 2
```

# 25-83

```javascript
// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
  // 모든 메서드가 Array 타입의 인스턴스를 반환하도록 한다.
  static get [Symbol.species]() { return Array; }

  // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);

console.log(myArray.uniq() instanceof MyArray); // false
console.log(myArray.uniq() instanceof Array); // true

// 메서드 체이닝
// uniq 메서드는 Array 인스턴스를 반환하므로 average 메서드를 호출할 수 없다.
console.log(myArray.uniq().average());
// TypeError: myArray.uniq(...).average is not a function
```
