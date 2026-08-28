document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("illustrations-grid");

  if (!gallery) return;

  const assets = [
    { type: "image", src: "assets/illustrations/anoffering.jpg", alt: "An offering illustration" },
    { type: "image", src: "assets/illustrations/birch.jpg", alt: "Birch illustration" },
    { type: "image", src: "assets/illustrations/background.jpg", alt: "Background illustration" },
    { type: "image", src: "assets/illustrations/belle.jpg", alt: "Belle illustration" },
    { type: "image", src: "assets/illustrations/bubblegum.gif", alt: "Bubblegum illustration" },
    { type: "image", src: "assets/illustrations/candle.gif", alt: "Candle illustration" },
    { type: "image", src: "assets/illustrations/corpse%20coffee%20inprnt.jpg", alt: "Corpse coffee illustration" },
    { type: "image", src: "assets/illustrations/death%27s%20christmas.jpg", alt: "Death's Christmas illustration" },
    { type: "image", src: "assets/illustrations/falling%20into%20fall.jpg", alt: "Falling into fall illustration" },
    { type: "image", src: "assets/illustrations/i%20got%20you%201.png", alt: "I got you illustration" },
    { type: "image", src: "assets/illustrations/jackalope.png", alt: "Jackalope illustration" },
    { type: "image", src: "assets/illustrations/ladies.jpg", alt: "Ladies illustration" },
    { type: "image", src: "assets/illustrations/lavender%20and%20chamomile%20tea.jpg", alt: "Lavender and chamomile tea illustration" },
    { type: "image", src: "assets/illustrations/lily%20colored.jpg", alt: "Lily colored illustration" },
    { type: "image", src: "assets/illustrations/oct1923.jpg", alt: "October 1923 illustration" },
    { type: "image", src: "assets/illustrations/snowy%20lips.jpg", alt: "Snowy lips illustration" },
    { type: "image", src: "assets/illustrations/snowycabin.png", alt: "Snowy cabin illustration" },
    { type: "image", src: "assets/illustrations/sushi.jpg", alt: "Sushi illustration" },
    { type: "image", src: "assets/illustrations/weeping%20widow2.jpg", alt: "Weeping widow illustration" }
  ];

  const tallImages = new Set([
    "assets/illustrations/birch.jpg",
    "assets/illustrations/falling%20into%20fall.jpg",
    "assets/illustrations/i%20got%20you%201.png",
    "assets/illustrations/jackalope.png",
    "assets/illustrations/snowycabin.png",
    "assets/illustrations/sushi.jpg"
  ]);

  assets.forEach(({ type, src, alt }) => {
    const card = document.createElement("div");
    card.className = `illustration-card${tallImages.has(src) ? " tall" : ""}`;

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    card.appendChild(img);

    gallery.appendChild(card);
  });

  const cards = document.querySelectorAll(".illustration-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  cards.forEach((card) => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
    card.style.transition = "all 0.8s ease";
    observer.observe(card);
  });
});