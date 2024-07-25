function switchTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList[0];
  const music = theme === "dark-theme" ? "goood-world.mpeg" : "good-world.mpeg";
}
