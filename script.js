const monkeyContainer = [...document.querySelectorAll(".dic")];
const nxtBtn = [...document.querySelectorAll("#btr")];
const preBtn = [...document.querySelectorAll("#btl")];

monkeyContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width - 100;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
