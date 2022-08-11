const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {
    topic: "JS",
    learningGoals: ["Build dungeons and dragons web apps for my own campaigns", "Create a blog with Wordpress", "Work with a team that is changing the world for the better", "Use JS animations to add dynamism to my illustrations"],
    category: "Front End Development",
    topicImportance: "High",
}; 

learning.topic = "Javascript";
learning.learningGoals.splice(1,1);

topicElement.innerText = `✔️ I'm learning ${learning.topic}`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");