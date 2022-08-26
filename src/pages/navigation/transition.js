export const transition = () => {
    document.querySelectorAll(".content_container").forEach((e) => {
      e.style.animationName = "transition";
    });
};
