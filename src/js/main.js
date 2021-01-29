const counters = document.querySelectorAll(".card__numbers");
const speed = 400;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.textContent;

    const inc = target / speed;

    if (count < target) {
      counter.textContent = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.textContent = target;
    }
  };

  updateCount();
});
