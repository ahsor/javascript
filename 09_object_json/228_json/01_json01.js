const  jsonString1 = `{
    "student":40,
    "grade":4,
    "name":"G CLASS"
}`;
const  jsonString2 = `{
    "student":40,
    "grade":4,
    "name":"G CLASS", 
    // 마지막에 콤마를 사용하면 ERROR
}`;


const data = JSON.parse(jsonString1);
// 자바스크립트 객체로 반환
console.log(data);   // { student: 40, grade: 4, name: 'G CLASS' }
console.log(data.student);   // { student: 40, grade: 4, name: 'G CLASS' }
console.log(data.grade);   // { student: 40, grade: 4, name: 'G CLASS' }
console.log(data.name);   // { student: 40, grade: 4, name: 'G CLASS' }
