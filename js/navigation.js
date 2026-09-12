document.addEventListener("DOMContentLoaded", () => {
  if (typeof wedding === "undefined") return;

  document.querySelectorAll("[data-groom]").forEach(e => e.textContent = wedding.groom);
  document.querySelectorAll("[data-bride]").forEach(e => e.textContent = wedding.bride);
  document.querySelectorAll("[data-date]").forEach(e => e.textContent = wedding.weddingDate);
  document.querySelectorAll("[data-venue]").forEach(e => e.textContent = wedding.venue);
  document.querySelectorAll("[data-city]").forEach(e => e.textContent = wedding.city);
  document.querySelectorAll("[data-address]").forEach(e => e.textContent = wedding.address);
  document.querySelectorAll("[data-story]").forEach(e => e.textContent = wedding.story);

  document.querySelectorAll("[data-map]").forEach(e => {
    e.href = wedding.mapUrl; e.target = "_blank"; e.rel = "noopener";
  });

  const bride = document.querySelector("[data-bride-image]");
  if (bride) { bride.src = wedding.brideImage; bride.alt = wedding.bride; }

  const groom = document.querySelector("[data-groom-image]");
  if (groom) { groom.src = wedding.groomImage; groom.alt = wedding.groom; }

  const couple = document.querySelector("[data-couple-image]");
  if (couple) { couple.src = wedding.coupleImage; couple.alt = `${wedding.groom} & ${wedding.bride}`; }

  document.querySelectorAll("[data-photo]").forEach((img, i) => {
    if (wedding.photos[i]) {
      img.src = wedding.photos[i];
      img.alt = `${wedding.groom} & ${wedding.bride} memory ${i + 1}`;
    }
  });

  const eventContainer = document.querySelector("[data-events]");
  if (eventContainer) {
    eventContainer.innerHTML = wedding.events.map(event => `
      <article class="event-card">
        <span class="event-name">${event.name}</span>
        <h3>${event.date}</h3>
        <p><strong>${event.time}</strong> · ${event.venue}</p>
        <p>${event.description}</p>
      </article>
    `).join("");
  }

  const rsvp = document.querySelector("[data-rsvp]");
  if (rsvp) {
    rsvp.href = `https://wa.me/${wedding.rsvp.whatsappNumber}?text=${encodeURIComponent(wedding.rsvp.message)}`;
  }

  const pages = ["index.html","date.html","venue.html","couple.html","group.html","photos.html","events.html","invitation.html"];
  const current = location.pathname.split("/").pop() || "index.html";
  const index = pages.indexOf(current);

  document.querySelectorAll("[data-progress]").forEach(e => e.textContent = `${index + 1} / ${pages.length}`);

  const back = document.querySelector("[data-back]");
  const next = document.querySelector("[data-next]");
  if (back && index > 0) back.href = pages[index - 1];
  if (next && index < pages.length - 1) next.href = pages[index + 1];

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft" && index > 0) location.href = pages[index - 1];
    if (e.key === "ArrowRight" && index < pages.length - 1) location.href = pages[index + 1];
  });

  let startX = 0;
  document.addEventListener("touchstart", e => startX = e.changedTouches[0].screenX, {passive:true});
  document.addEventListener("touchend", e => {
    const delta = e.changedTouches[0].screenX - startX;
    if (Math.abs(delta) < 70) return;
    if (delta < 0 && index < pages.length - 1) location.href = pages[index + 1];
    if (delta > 0 && index > 0) location.href = pages[index - 1];
  }, {passive:true});
});


document.querySelectorAll("[data-group-image]").forEach((el) => {
  if (wedding.groupImage) el.src = wedding.groupImage;
});
