 (function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn') 

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });  //클릭 행위가 이벤트로 감지시킴

    window.addEventListener('resize', function () {
        if (window.innerWidth>1024) {
            //off toggle element
            offElements();
        }
    }); 
    
    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on'); //생성
        });  // 반복
    }
    
    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on'); //제거
        });  // 반복

    }

 })(window, document)