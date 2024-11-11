const Render = (comment, currentUser) => {
  comment.forEach((com) => {
    const { id, content, createdAt, score, user, replies } = com;
    const temp = document
      .querySelector(".comment-template")
      .content.cloneNode(true);
    temp.querySelector(".score").textContent = score;
    temp.querySelector(".avatar").src = user.image.png;
    temp.querySelector(".username").textContent = user.username;
    temp.querySelector(".date").textContent = createdAt;
    temp.querySelector(".c-text").textContent = content;

    const commentElement = temp.querySelector(".comment-wrp");
    commentElement.setAttribute("data-id", id);

    const repliesContainer = temp.querySelector(".replies");

    if (replies.length > 0) {
      repliesContainer.dataset.empty = false;
      replies.forEach((rep) => {
        const {id, content, createdAt, score, replyingTo, user } = rep;
        const replyTemp = document
          .querySelector(".replies-template")
          .content.cloneNode(true);
        replyTemp.querySelector(".score").textContent = score;
        replyTemp.querySelector(".username").textContent = user.username;
        replyTemp.querySelector(".avatar").src = user.image.png;
        replyTemp.querySelector(".date").textContent = createdAt;
        replyTemp.querySelector(".replyTo").textContent = `@${replyingTo}`;
        replyTemp.querySelector(".c-text").textContent = content;

        const commentElement = replyTemp.querySelector(".reply-input-wrp");
        commentElement.setAttribute("data-id", id);

        repliesContainer.appendChild(replyTemp);
      });
    } else {
      repliesContainer.dataset.empty = true;
    }
    document.querySelector(".comment-container").append(temp);
  });
  D_E_R(currentUser);
  console.log(document.querySelector(".comment-container"));
  console.log(comment);
  
  const elementToAppend = document.createElement("div");
  elementToAppend.classList.add("responsive-div");
  flex();
};

const D_E_R = (currentUser) => {
  const der = document.querySelectorAll(".info-section");
  der.forEach((d) => {
    const User = d.querySelector(".username").textContent;
    const Reply = d.querySelector(".reply-input");
    const Delete = d.querySelector(".delete-input");
    const Edit = d.querySelector(".edit-input");

    if (User === currentUser.username) {
      Reply.classList.add("hidden");
      Delete.classList.remove("hidden");
      Edit.classList.remove("hidden");
    } else {
      Reply.classList.remove("hidden");
      Delete.classList.add("hidden");
      Edit.classList.add("hidden");
    }
  });
};
