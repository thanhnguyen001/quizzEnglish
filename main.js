console.log(data);
const quizE = document.getElementById("quiz");
const topicE = document.getElementById("topic");
const menuListE = document.getElementById("menu_list");
const numberOfQuestion = document.getElementById("numberOfQuestion");


let questions = [];
let listUserAnswers = [];
let currentTopic = "";

function handleClickVocabularyTopics() {
  topicE.classList.toggle("active");
  menuListE.classList.toggle("active");
}

function handleActiveTopic(topic) {
  const topics = document.querySelectorAll("#menu_list li");
  currentTopic = topic;
  topics.forEach(t => {
    if (t.textContent != topic) {
      t.classList.remove("active");
    } else {
      t.classList.add("active");
    }
  });
  convertQuestionsByTopic(topic);
}

const otherSettingE = document.getElementById("otherSetting");
const menu_other_setting = document.getElementById("menu_other_setting");
function handleClickOtherSetting() {
  otherSettingE.classList.toggle("active");
  menu_other_setting.classList.toggle("active");
}

const QUESTION = "Synonyms for phrase ";

function convertQuestionsByTopic(topic) {
  questions = [];
  // listUserAnswers = [];
  quizE.classList.remove("review");
  Object.keys(data[topic]).forEach(key => {
    Object.keys(data[topic][key]).forEach(word => {
      const allCorrectWord = [...data[topic][key][word].split(", "), word];

      const keyWordIdx = [Math.floor(Math.random() * allCorrectWord.length)]
      const retainCorrect = JSON.parse(JSON.stringify(allCorrectWord));
      retainCorrect.splice(keyWordIdx, 1);
      const question = {
        question: QUESTION + `<strong>"${allCorrectWord[keyWordIdx]}"</strong>` + "...",
        answers: [],
        correct: [],
        correctIdx: 0,
        allCorrect: allCorrectWord
      }

      const randomMaxCorrect = Math.floor(Math.random() * retainCorrect.length) + 1;
      question.correct = retainCorrect.slice(0, randomMaxCorrect);

      [question.answers, question.correctIdx] = getRandomAnswer(key, question.correct, retainCorrect);

      questions.push(question);
      // listUserAnswers.push(false);
    })
  });

  renderQuestions();
  console.log('questions: ', questions);
}

function renderQuestions() {
  const listQuestionsE = document.querySelector(".list-question");
  let list = JSON.parse(JSON.stringify(questions));
  if (Number(numberOfQuestion.value) > 0) {
    list = list.slice(0, Number(numberOfQuestion.value));
  }
  let html = "";
  let count = 0;
  listUserAnswers = [];
  let index = 0;
  while (list.length) {
    index = Math.floor(Math.random() * list.length);

    listUserAnswers.push(false);
    const q = list[index];
    count++;
    html += `
      <li>
        <h4 id="question_${index}">${count}. ${q.question}</h4>
        <ul class="list-answer">
          <li class="${q.correctIdx === 0 ? "answer-correct" : "incorrect"}">
            <input type="radio" name="answer_${index}" id="a_${index}" class="answer" oninput="handleUserChoice(${index}, ${q.correctIdx === 0 ? true : false})" value="${q.answers[0]}" />
            <label for="a_${index}" >${q.answers[0].join(", ")}</label>
          </li>
          <li class="${q.correctIdx === 1 ? "answer-correct" : "incorrect"}">
            <input type="radio" name="answer_${index}" id="b_${index}" class="answer" oninput="handleUserChoice(${index}, ${q.correctIdx === 1 ? true : false})" value="${q.answers[1]}" />
            <label for="b_${index}" >${q.answers[1].join(", ")}</label>
          </li>

          <li class="${q.correctIdx === 2 ? "answer-correct" : "incorrect"}">
            <input type="radio" name="answer_${index}" id="c_${index}" class="answer" oninput="handleUserChoice(${index}, ${q.correctIdx === 2 ? true : false})" value="${q.answers[2]}" />
            <label for="c_${index}" >${q.answers[2].join(", ")}</label>
          </li>

          <li class="${q.correctIdx === 3 ? "answer-correct" : "incorrect"}">
            <input type="radio" name="answer_${index}" id="d_${index}" class="answer" oninput="handleUserChoice(${index}, ${q.correctIdx === 3 ? true : false})" value="${q.answers[3]}" />
            <label for="d_${index}" >${q.answers[3].join(", ")}</label>
          </li>
        </ul>
      </li>
    `;

    list.splice(index, 1);
  }

  listQuestionsE.innerHTML = html;
}

function getRandomAnswer(typeWord, correct, allCorrectWord) {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const answer = [];
    if (typeWord === "person") {
      let idx = Math.floor(Math.random() * PERSON_OBJ.length);
      while (answer.length < correct.length) {
        if (!answer.includes(PERSON_OBJ[idx]) && !allCorrectWord.includes(PERSON_OBJ[idx])) {
          answer.push(PERSON_OBJ[idx]);
        }
        idx = Math.floor(Math.random() * PERSON_OBJ.length);
      }
    }
    if (typeWord === "adjObject") {
      let idx = Math.floor(Math.random() * ADJ_OBJ.length);
      while (answer.length < correct.length) {
        if (!answer.includes(ADJ_OBJ[idx]) && !allCorrectWord.includes(ADJ_OBJ[idx])) {
          answer.push(ADJ_OBJ[idx]);
        }
        idx = Math.floor(Math.random() * ADJ_OBJ.length);
      }
    }
    if (typeWord === "verbObject") {
      let idx = Math.floor(Math.random() * VERB_OBJ.length);
      while (answer.length < correct.length) {
        if (!answer.includes(VERB_OBJ[idx]) && !allCorrectWord.includes(VERB_OBJ[idx])) {
          answer.push(VERB_OBJ[idx]);
        }
        idx = Math.floor(Math.random() * VERB_OBJ.length);
      }
    }
    arr.push(answer);
  }
  const correctIdx = Math.floor(Math.random() * 4);
  arr.splice(correctIdx, 0, [...correct]);
  return [arr, correctIdx];
}

function handleUserChoice(index, isCorrect) {
  listUserAnswers[index] = isCorrect;
}

const popupE = document.querySelector(".popup");
const popupConfirmE = document.querySelector(".popup-confirm");
const popupResultE = document.querySelector(".popup-result");
const resultE = document.querySelector(".popup-result p");
function handleClickSubmit() {
  popupE.classList.remove("hide");
}

function handleConfirmSubmit(isOK) {
  if (isOK) {
    popupConfirmE.classList.add("hide");
    resultE.textContent = `Result: ${listUserAnswers.filter(n => n).length}/${listUserAnswers.length}`;
    popupResultE.classList.remove("hide");
  } else {
    handleClosePopup();
  }
}

function handleClosePopup() {
  popupConfirmE.classList.remove("hide");
  popupResultE.classList.add("hide");
  popupE.classList.add("hide");
}

function handleReview() {
  quizE.classList.add("review");
  handleClosePopup();
}

function handleTestAgain() {
  handleActiveTopic(currentTopic);
  handleClosePopup();
}



const menu_mobile = document.querySelector(".menu-mobile-icon");
const menu = document.getElementById("menu");

function handleActiveMenuMobile(isActive) {
  if (isActive) {
    menu_mobile.classList.add("active");
    menu.classList.add("active");
  } else {
    menu_mobile.classList.remove("active");
    menu.classList.remove("active");
  }
}



function init() {
  let html = '';
  Object.keys(data).forEach((topic, index) => {
    html += `
      <li class="menu-item" onclick="handleActiveTopic('${topic}')">${topic}</li>
    `;
  })
  menuListE.innerHTML = html;

}

let PERSON_OBJ = [1, 2, 3, 4, 5];
let ADJ_OBJ = [1, 2, 3, 4, 5];
let VERB_OBJ = [1, 2, 3, 4, 5];
function convertData() {
  Object.keys(data).forEach((topic) => {
    Object.keys(data[topic].person).forEach(key => {
      PERSON_OBJ.push(...data[topic].person[key].split(", "), key);
    })
    Object.keys(data[topic].adjObject).forEach(key => {
      ADJ_OBJ.push(...data[topic].adjObject[key].split(", "), key);
    })
    Object.keys(data[topic].verbObject).forEach(key => {
      VERB_OBJ.push(...data[topic].verbObject[key].split(", "), key);
    })
  });
  // console.log(PERSON_OBJ);
  // console.log(ADJ_OBJ);
  // console.log(VERB_OBJ);

}

convertData();
init();