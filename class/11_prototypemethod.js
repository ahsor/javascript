// 사용자 클래스로 바꾸어 볼것 

function Member(){
    this.name = 'kim';
}
const member1 = new Member();
Member.prototype.id = "jemicom";
// 프로토타입으로 만들어지 속성은 객체들이 공유 
// 원래 자신이 가지고 있던 속성인 것 처럼 사용

console.log(member1.id);
console.log(Member.prototype);

// 객체는 자신을 생성한 프로토타입을 찾을 때 프로토타입 링크 참조한다. 
console.dir(member1.__proto__);

// 자바스크립트 모든 객체는 object를 상속한다.