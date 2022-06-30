// fade-gallery app.js
// 제이쿼리 함수
$(function(){
    // 모든 이미지 fade out
    $('.slider img').fadeOut(0);
    // 첫번째(현재) 이미지 fade in
    $('.slider img').eq(0).fadeIn(0); 

  
  // let imgCount = 0; // 이미지번호 -> 전역변수로 변경(함수 안에 있으면 지역변수 밖으로 빼야 전역변수 선언임)
  // 다음 이미지 보기 
  $('.nextBtn').click(function(){
    if(imgCount < 2) {
      imgCount++; // 이미지 번호 증가
      changeSlider(imgCount);
      // updateIndicator(imgCount);
    };
  });

  // 이전 이미지 보기 
  $('.prevBtn').click(function(){
    if(imgCount > 0) {
      imgCount--; // 이미지 번호 감소
      changeSlider(imgCount);
      // updateIndicator(imgCount);
    };
  });

  // 4초마다 자동재생
  setInterval(function(){
      imgCount++;
      if(imgCount > 2) {
      imgCount = 0;
    }
    console.log(imgCount);
    changeSlider(imgCount);
    // updateIndicator(imgCount);
  }, 4000);
 

  // imgCount 번호 = 인디케이터 번호(스타일 변경)
  // $('.indicator a').eq(imgCount).css('color', 'red');
  // 안에 있어도 되지만 굳이 제이쿼리에 넣을 필요는 없다.

  // 인디케이터 초기화(시작)
  updateIndicator(imgCount);
}); // $

// 이미지번호 -> 전역변수로 변경 
let imgCount = 0;

 // 하단 인디케이터 버튼을 누르면 해당 이미지(번호) 출력 함수
function changeSlider(num) {
  imgCount = num // 이미지번호 업데이트(인디케이터,arrow 공통)
  $('.slider img')
    .fadeOut(1000)
    .eq(imgCount).fadeIn(1000); 

    updateIndicator(imgCount); // 여기에 넣으면 다른 함수에 일일히 넣지 않아도 됨.
};

//  인디케이터 스타일 업데이트
function updateIndicator(num) {
  // 인디케이터 스타일 초기화
  $('.indicator a').css('background-color', 'transparent');
  
  // imgCount 번호 = 인디케이터 번호(스타일 변경)
  $('.indicator a').eq(num).css('background-color', '#ffffff');

};

