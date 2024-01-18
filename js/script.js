alert("Добрый день, Вы попали на страницу Джоя. Теперь Ваш день будет веселым. Приятного путешествия");

let glowInTexts = document.querySelectorAll(".text-box");
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});
