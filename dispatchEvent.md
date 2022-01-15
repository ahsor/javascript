# Javascript에서는 직접 이벤트를 발생시키고 싶을 때

## JQuery 라이브러리를 사용
 
```
$('#button').trigger('click');
//trigger 메서드를 쓰면 쉽게 이벤트를 발생
```

 
## click 이벤트 같은 경우는 Javascript로도 쉽게 발생시킬 수 있습니다.
```
document.querySelector('#button').click();
``` 
 
HTMLElement.prototype에 있는 click 메서드를 이용하면 click 이벤트를 발생시킬 수 있습니다. blur나 focus 이벤트도 click 이벤트처럼 HTMLElement.prototype의 메서드로 발생시킬 수 있습니다.
 
하지만 다른 종류의 이벤트를 발생시키는 건 비교적 간단하지 않습니다.
 
```
$('#button').trigger('mouseleave');
 
document.querySelector('#button').mouseleave(); //Error
// HTMLElement.prototype에는 mouseleave 메서드가 없기 때문에 에러
```
 

```
const button = document.querySelector('#button');
const mouseleaveEvent = new Event('mouseleave', { bubbles: true, cancelable: true });
 
button.dispatchEvent(mouseleaveEvent);
```
 
모던 브라우저의 경우는 비교적 간단합니다. 이벤트 객체를 새로 생성해 dispatchEvent의 인자로 전달하면 되죠. 참고로 dispatchEvent는 EventTarget.prototype의 메서드입니다(Element의 부모 Node, Node의 부모 EventTarget).
 
하지만 당연하게도 ie는 이벤트 객체의 생성자를 지원하지 않습니다.
 따라서 polyfill이 없는 환경에서 ie를 지원해야 한다면 예외처리를 해주어야 하죠.

```
const button = document.querySelector('#button');
let mouseleaveEvent;
 
try {
    mouseleaveEvent = new Event('mouseleave', { bubbles: true, cancelable: true });
} catch (error) {
    console.warn('using outdated browser... switching to old method');
    mouseleaveEvent = document.createEvent('MouseEvent');
    mouseleaveEvent.initEvent('mouseleave', true, true); //type, bubbles, cancelable
}
 
button.dispatchEvent(mouseleaveEvent);
```
 
document.createEvent 메서드로 이벤트 객체를 생성하고, initEvent 메서드를 통해 이벤트의 타입과 다른 속성을 지정해 줄 수 있습니다. let과 const를 쓰면서 ie를 운운한다는 게 좀 웃겨보일 수 있지만, 컴파일러를 사용하는 환경이라도 컴파일러가 polyfill을 지원하지 않는 이상, Event 객체에 대한 예외처리까지 해 주지는 않습니다.
 
게다가 document.createEvent 메서드는 최근 deprecated 처분을 받았습니다. ie가 업데이트를 할 확률은 적지만, 모던 브라우저에서는 언제든지 사용이 불가능해질 수 있습니다. 때문에 저는 무조건 createEvent 메서드를 이용하는 것보다는 저렇게 try catch 문으로 구성해 놓는 편이 안전하다고 판단했습니다. 물론 저 방법만 있는 건 아니니 취향에 맞는 방법을 쓰도록 하세요.
 
ie 8버전 이하에서는 dispatchEvent 메서드를 지원하지 않습니다. 대신 fireEvent 메서드를 써야하는데, 이는 따로 다루지 않겠습니다. 잡설이지만 ie 8은 이제 마이크로소프트도 버린 브라우저거든요(운영체제 새로 깔고 ie 11로 업데이트하려고 ie 8으로 마이크로소프트 홈페이지 들어갔더니 지원하지 않는 브라우저라고 뜸).
 
 
dispatchEvent 메서드와 CustomEvent 객체를 이용하면 커스텀 이벤트를 만들어서 발생시킬 수도 있습니다. 대형 API를 만들어 배포할 때 유용하겠네요.
``` 
const button = document.querySelector('#button');
const destroyEvent = new CustomEvent('destroy', { frags: 10 });
 
button.dispatchEvent(destroyEvent);
``` 
마찬가지로 ie에서는 polyfill이나 예외 처리를 해주어야 합니다. 위에 나온 방법을 사용하거나, MDN의 문서에 나와 있는 방법(링크)을 쓰면 됩니다.