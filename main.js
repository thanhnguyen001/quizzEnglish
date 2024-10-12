console.log(data);
const topicE = document.getElementById("topic");
const menuListE = document.getElementById("menu_list");

function handleClickVocabularyTopics() {
  topicE.classList.toggle("active");
  menuListE.classList.toggle("active");
}

function handleActiveTopic(topic) {
  const topics = document.querySelectorAll("#menu_list li");
  topics.forEach(t => {
    if (t.textContent != topic) {
      t.classList.remove("active");
    } else {
      t.classList.add("active");
    }
  })
}

function init() {
  let html = '';
  Object.keys(data).forEach((topic, index) => {
    html += `
      <li class="menu-item ${index === 0 ? "active" : ""}" onclick="handleActiveTopic('${topic}')">${topic}</li>
    `;
  })
  menuListE.innerHTML = html;
}

init();