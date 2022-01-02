# 네트워크로 데이터를 송수신하고 싶을 때 
# 데이터를 정의하고 싶을 때 

- 범용적인 데이터 형식
- 서버와의 통신아니 데이터의 외부 파일 저장 등에 사용 
- JSON은 javascript 뿐만 아니라 PHP, JAVA 등 다른 언어에서도 사용
- 텍스트 에디터로 편집이 가능 
- 자바스크립트로 불러오기 쉽고 다양한 구조의 데이터도 유연하게 사용할 수 있다. 

# 01 JSON 데이터 만들기 
- JSON 데이터는 키와 값을 조합하여 정의 
- 키는 문자열만 가능하고 반드시 큰따옴표("")로 표기한다. 
- 기본적으로 JAVASCRIPT  문법을 그대로 사용할 수 있다. 
- 값에는 숫자, 문자열, 진리값, 배열, 객체가 올 수 있다.
- 배열과 객체는 구조화된 정보의 정의가 가능

```{
    "student":40,
    "grade":4,
    "name":"G CLASS"
}```

```{
    "student":40,
    "grade":4,
    "name":"G CLASS", 
    // 마지막에 콤마를 사용하면 ERROR
}```

```{
    'student':40,
    'grade':4,
    'name':"G CLASS", 
    // 작은 따옴표 ERROR
}```

```{
    student:40,
    grade:4,
    name:"G CLASS", 
    // 따옴표 없어도 ERROR
}```

# JSON객체를 문자열로 변환
- JSON의 문자열을 자바스크립의 객체에서 사용하고 싶을 때 
- 네트워크에서 받은 JSON 문자열을 사용하고 싶을 때 

|syntex| 의미|반환|
|---|---|----|
|JSON.parse(문자열)| JSON 문자열을 해석하고 js값과 객체로 변환  | 객체 |

- js 객체로 반환하므로 .(마침표)를 사용하여 참조할 수 있다. 

```
<script>
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

</script>
```

# 문자열을 JSON객체로 변환
```
<script>
    const  kim = {
        student:40,
        grade:4,
        name:"G CLASS"
    };

    const data = JSON.stringify(kim);
    // 자바스크립트 객체로 반환
    console.log(data);   // {"student":40,"grade":4,"name":"G CLASS"}
   
</script>
```

``` 들여쓰기 적용
<script>
    const  kim = {
        student:40,
        grade:4,
        name:"G CLASS"
    };

    const data = JSON.stringify(kim, null, ' ');
    // 들여쓰기를 적용해 객체를 JSON 문자열로 변환
    console.log(data);  
    //  {
    //     "student": 40,
    //     "grade": 4,
    //     "name": "G CLASS"
    //  }
   
</script>
```

# JSON 데이터 커스터마이징 : 필요한 데이터만 추출
```
<script>
    const  kim = {
        student:40,
        grade:4,
        name:"G CLASS"
    };

    const replacer = (key, value)=>{
        if( typeof value === 'number'){
            return undefined; 
            // undefined 인경우 데이터를 표시하지 않음 
            // null, false는 객체 데이터를 수정함 
        }
        return value; 
    }
    const data = JSON.stringify(kim, replacer, ' ');
    // 자바스크립트 객체로 반환
    console.log(data);   
    // {
    //        "name": "G CLASS"
    //    }
   
</script>
```