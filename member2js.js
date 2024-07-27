"use strict";

const memberId = document.getElementById('MEMBER_ID');
const memberPw = document.getElementById('MEMBER_PW');
const memberPc = document.getElementById('MEMBER_PC');
const memberEmail = document.getElementById('MEMBER_EMAIL');
const memberName = document.getElementById('MEMBER_NAME');
const memberNickname = document.getElementById('MEMBER_NICKNAME');
const memberBtn = document.getElementById('MEMBER_BTN');

function validateForm() {
    const isIdValid = memberId.value.length > 0;
    const isPwValid = memberPw.value.length >= 5;
    const isPcValid = memberPw.value === memberPc.value;
    const isFormValid = isIdValid && isPwValid && isPcValid;

    if (isFormValid) {
        memberBtn.style.backgroundColor = "#0095F6";
        memberBtn.disabled = false;
    } else {
        memberBtn.style.backgroundColor = "#C0DFFD";
        memberBtn.disabled = true;
    }
}

function submitForm() {
    // 폼 제출 기능 구현 (예: 서버로 데이터 전송)
    alert('회원가입 완료');
}

memberId.addEventListener('keyup', validateForm);
memberPw.addEventListener('keyup', validateForm);
memberPc.addEventListener('keyup', validateForm);
memberBtn.addEventListener('click', submitForm);
