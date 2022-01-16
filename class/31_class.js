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