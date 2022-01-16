const today = new Date();
//console.log(today.getDay());

Date.prototype.transDay = function(day){
    // 생성된 날짜를 매개변수로 받아서 
    
    switch(day.getDay()){
        // 요일을 확인한 후 리턴
        case 0 : return '일'; break; 
        case 1 : return '월'; 
        case 2 : return '화'; 
        case 3 : return '수'; 
        case 4 : return '목'; 
        case 5 : return '금'; 
        case 6 : return '토'; 
    }
}

console.log( today.transDay(today) );
