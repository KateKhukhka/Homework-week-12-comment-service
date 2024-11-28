const submitButton = document.getElementById("main_button");
const userName = document.getElementById("input_name");
const userAva = document.getElementById("input_link");
const userText = document.getElementById("input_text");
const commentBox = document.getElementById("comment_box");

submitButton.addEventListener(
  "click",
  function createComment() {
    const commentName = userName.value;
    const commentNameCheck = commentName.trim();
    const commentNameCheck1 = commentNameCheck.replace(
      commentNameCheck,
      commentNameCheck.toLowerCase()
    );
    const commentNameCheck2 = commentNameCheck1.replace(
      commentNameCheck1[0],
      commentNameCheck1[0].toUpperCase()
    );

    const commentAva = userAva.value;

    const commentText = userText.value;
    const commentTextCheck = commentText.replace(
      /ххх/gi,
      "***"
    );
    const commentTextCheck1 = commentTextCheck.replace(
      /xxx/gi,
      "***"
    );
    const commentTextCheck2 = commentTextCheck1.replace(
      /viagra/gi,
      "***"
    );

    const newName = document.createElement("h3");
    newName.textContent = commentNameCheck2;
    const newAva = document.createElement("img");
    newAva.src = commentAva;
    const newText = document.createElement("p");
    newText.textContent = commentTextCheck2;
    commentBox.append(newName);
    commentBox.append(newAva);
    commentBox.append(newText);

    userName.value = "";
    userAva.value = "";
    userText.value = "";
  }
);
