const heart = document.getElementsByClassName(heart_btn);

heart.addEventListener('click', function() {
    console.log('hit');
    heart.classList.toggle('on'); // 하트 클릭 시, .on 클래스를 추가
});