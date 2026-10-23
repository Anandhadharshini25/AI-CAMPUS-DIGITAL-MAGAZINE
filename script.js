
function generateArticle() {
    const topic = document.getElementById("topic").value.trim();
    const result = document.getElementById("result");

    if (topic === "") {
        result.textContent = "Please enter an article topic.";
        return;
    }

    result.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = topic;

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "This article explores " + topic +
        " and its importance in campus life. Students can learn new ideas, " +
        "share experiences, and discover opportunities related to this topic. " +
        "Please verify facts before publishing.";

    result.appendChild(heading);
    result.appendChild(paragraph);
}
  