const shiftUp = (e) => {
  const currentDiv =
    e.target.closest(".reply-input-wrp") || e.target.closest(".comment-wrp");
  const parentDiv =
    e.target.closest(".replies") || e.target.closest(".comment-container");
  let childrenDiv = parentDiv.children;
  let activeDiv;
  for (const div of childrenDiv) {
    if (div == currentDiv) {
      activeDiv = div;
      break;
    }
  }

  const activeDivScore = parseInt(
    activeDiv.querySelector(".score").textContent
  );
  for (let i = 0; i < childrenDiv.length; i++) {
    const childrenDivScore = parseInt(
      childrenDiv[i].querySelector(".score").textContent
    );
    if (activeDivScore === childrenDivScore) continue;
    if (activeDivScore > childrenDivScore) {
      parentDiv.insertBefore(activeDiv, childrenDiv[i]);
      break;
    }
  }
};

const shiftDown = (e) => {
  const currentDiv =
    e.target.closest(".reply-input-wrp") || e.target.closest(".comment-wrp");
  const parentDiv =
    e.target.closest(".replies") || e.target.closest(".comment-container");
  const childrenDiv = parentDiv.children;
  let activeDiv;
  for (const div of childrenDiv) {
    if (div == currentDiv) {
      activeDiv = div;
      break;
    }
  }

  const activeDivScore = parseInt(
    activeDiv.querySelector(".score").textContent
  );
  for (let i = 0; i < childrenDiv.length; i++) {
    const childrenDivScore = parseInt(
      childrenDiv[i].querySelector(".score").textContent
    );
    if (activeDivScore === childrenDivScore) continue;
    if (activeDivScore < childrenDivScore) {
      parentDiv.insertBefore(activeDiv, childrenDiv[i + 1]);
      break;
    }
  }
};

const flex = () => {
  document.querySelectorAll(".input-wrp").forEach((input) => {
    let elementToAppend = input.querySelector(".responsive-div");
    if (!elementToAppend) {
      elementToAppend = document.createElement("div");
      elementToAppend.classList.add("responsive-div");
    }
    const scoreSection = input.querySelector(".score-section");
    const der = input.querySelector(".d-e-r");
    const thresholdWidth = 412;
    const comment = input.querySelector(".comment");
    const commentInfo = input.querySelector(".comment-info");

    if (window.innerWidth < thresholdWidth) {
      // elementToAppend.remove();
      if (!comment.contains(elementToAppend)) {
        comment.append(elementToAppend);
        elementToAppend.append(scoreSection);
        elementToAppend.append(der);
      }
    } else {
      if (!comment.contains(scoreSection) || !commentInfo.contains(der)) {
        comment.prepend(scoreSection);
        commentInfo.append(der);
        elementToAppend.remove();
      }
    }
  });
};

const elementToAppend = document.createElement("div");
elementToAppend.classList.add("responsive-div");
window.addEventListener("resize", () => {
  flex();
});


