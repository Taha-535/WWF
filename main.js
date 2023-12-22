document.addEventListener("DOMContentLoaded", function () {
  var podcast = document.getElementById("podcast");

  podcast.addEventListener("click", function (event) {
    podcast.classList.toggle("clicked");

    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    podcast.classList.remove("clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var recipe = document.getElementById("recipe");

  recipe.addEventListener("click", function (event) {
    recipe.classList.toggle("clicked");
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    recipe.classList.remove("clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var classe = document.getElementById("classe");

  classe.addEventListener("click", function (event) {
    classe.classList.toggle("clicked");
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    classe.classList.remove("clicked");
  });
});
