document.addEventListener("DOMContentLoaded", () => {

  const mainImage = document.querySelector(".arvopart_image");
  const smallImages = document.querySelectorAll(".arvopart_small-pictures img");

  smallImages.forEach(image => {
    image.addEventListener("click", () => {

      mainImage.src = image.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const mainImage = document.querySelector(".varvilinemagi_image");
  const smallImages = document.querySelectorAll(".varvilinemagi_small-pictures img");

  smallImages.forEach(image => {
    image.addEventListener("click", () => {

      mainImage.src = image.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const mainImage = document.querySelector(".taks_dogi_image");
  const smallImages = document.querySelectorAll(".taks_dogi_small-pictures img");

  smallImages.forEach(image => {
    image.addEventListener("click", () => {

      mainImage.src = image.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const mainImage = document.querySelector(".taks_dogi-suvi_image");
  const smallImages = document.querySelectorAll(".taks_dogi-suvi_small-pictures img");

  smallImages.forEach(image => {
    image.addEventListener("click", () => {

      mainImage.src = image.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const mainImage = document.querySelector(".kuukass_image");
  const smallImages = document.querySelectorAll(".kuukass_small-pictures img");

  smallImages.forEach(image => {
    image.addEventListener("click", () => {

      mainImage.src = image.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const mainImage = document.querySelector(".maailmanaba_image");
  const smallImages = document.querySelectorAll(".maailmanaba_small-pictures img");

  smallImages.forEach(image => {
    image.addEventListener("click", () => {

      mainImage.src = image.src;
    });
  });
});



window.onload = function() {
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.addEventListener('change', function() {
      if (this.checked) {
        window.location.href = '../home.html';
      }
    });
  } else {
    console.error('language-toggle element not found!');
  }
};