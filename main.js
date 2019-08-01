window.onload = function(){
	createHeader();
  };
  let question_number = 0;
  let full_info = getData();
  function getData(){
    let question_one = {"question": "1.CSS stands for...","option1": "a.Computer Styled Sections","option2": "b.Cascading Style Sheets","correct":"b"};
    let question_two = {"question": "2.CSS stands for...","option1": "a.Computer Styled Sections","option2": "b.Cascading Style Sheets","correct":"b"};
    let question_three = {"question": "3.CSS stands for...","option1": "a.Computer Styled Sections","option2": "b.Cascading Style Sheets","correct":"b"};
	const get_info  = [question_one,question_two,question_three];
	return get_info;
  }
  function createHeader(){
	let header_head = document.createElement("h2");
	header_head.innerHTML = "Quiz-Contest";
	let body__header = document.getElementsByClassName("body__header")[0];
    body__header.appendChild(header_head);
}
function pageLoad(){
    let content_block = document.getElementsByClassName("content_block")[0];
    content_block.parentNode.removeChild(content_block);
    if(question_number == 3){
        submitQuiz();
    }
    else{
        mainContent(question_number);
    }
}
function mainContent(){
    let body = document.getElementsByClassName("body__main")[0];
    let content_block = document.createElement("div");
    content_block.setAttribute('class','content_block');
    let question = document.createElement("p");
    question.textContent = full_info[question_number].question;
    let radio_button1 = document.createElement("input");
    radio_button1.setAttribute('type','radio');
    let label1 = document.createElement('label');
    label1.textContent = full_info[question_number].option1;
    let radio_button2 = document.createElement("input");
    radio_button2.setAttribute('type','radio');
    let label2 = document.createElement('label');
    label2.textContent = full_info[question_number].option2;
    question_number += 1;
    let next_button = document.createElement("button");
    next_button.setAttribute('class','next_button');
    next_button.innerHTML = "Next";
    next_button.setAttribute('onclick','pageLoad()');
    let time = document.createElement("span");
    time.setAttribute('id','timer');
    content_block.appendChild(time);
    content_block.appendChild(question);
    content_block.appendChild(radio_button1);
    content_block.appendChild(label1);
    content_block.appendChild(radio_button2);
    content_block.appendChild(label2);
    content_block.appendChild(next_button);
    body.appendChild(content_block);   
}
function  submitQuiz(){
    let body = document.getElementsByClassName("body__main")[0];
    let congrats = document.createElement("h3");
    congrats.setAttribute('class','congrats');
    congrats.textContent = "Congratulations You Are Completed";
    body.appendChild(congrats);
}
var sec = 15;
var time = setInterval(myTimer, 1000);
function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}