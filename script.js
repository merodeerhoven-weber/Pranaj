/*
  HOUSE ARCHIVE — EDIT YOUR FAMILY DATA HERE
  Image tip: use a direct image URL from Pinterest (usually starts with
  https://i.pinimg.com/...). A Pinterest pin page URL is not an image URL.
  Replace image with your chosen direct image URL and source with the pin page URL.
*/
const family = [
  {
    id: "F-00", group: "parent", name: "Father's Name", role: "THE PATRIARCH",
    subtitle: "Head of the Family", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Family Head",
    bio: "Write the father's biography here. Add his background, personality, influence, and the secrets that shaped this family."
  },
  {
    id: "F-01", group: "parent", name: "Mother's Name", role: "THE MATRIARCH",
    subtitle: "Keeper of the House", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Family Matriarch",
    bio: "Write the mother's biography here. Describe her history, values, and the role she plays in holding the family together."
  },
  {
    id: "F-02", group: "child", name: "First Child", role: "THE FIRSTBORN",
    subtitle: "Eldest Son", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "First Son",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-03", group: "child", name: "Second Child", role: "THE HEIR",
    subtitle: "Second Son", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Second Son",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-04", group: "child", name: "Third Child", role: "THE STRATEGIST",
    subtitle: "Third Son", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Third Son",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-05", group: "child", name: "Fourth Child", role: "THE YOUNGEST SON",
    subtitle: "Youngest Son", image: "https://images.unsplash.com/photo-1504596377452-44c9f2b7f2f4?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Fourth Son",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-06", group: "child", name: "Fifth Child", role: "THE ELDEST DAUGHTER",
    subtitle: "First Daughter", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "First Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-07", group: "child", name: "Sixth Child", role: "THE DIPLOMAT",
    subtitle: "Second Daughter", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Second Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-08", group: "child", name: "Seventh Child", role: "THE ENIGMA",
    subtitle: "Third Daughter", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Third Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "F-09", group: "child", name: "Eighth Child", role: "THE YOUNGEST",
    subtitle: "Youngest Daughter", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    source: "https://www.pinterest.com/", age: "—", position: "Fourth Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  }
];

const parentsGrid = document.querySelector("#parents-grid");
const childrenGrid = document.querySelector("#children-grid");
const modal = document.querySelector("#profile-modal");

function makeCard(person, index) {
  const card = document.createElement("button");
  card.className = "person-card";
  card.type = "button";
  card.setAttribute("aria-label", `Open record: ${person.name}`);
  card.innerHTML = `
    <div class="portrait">
      <img src="${person.image}" alt="Portrait of ${person.name}" loading="lazy">
      <span class="record-number">${person.id}</span>
      <span class="portrait-plus" aria-hidden="true">+</span>
    </div>
    <div class="person-meta">
      <p class="role">${person.role}</p>
      <h3>${person.name}</h3>
      <p>${person.subtitle}</p>
    </div>`;
  card.addEventListener("click", () => openProfile(person));
  return card;
}

family.forEach((person, index) => {
  (person.group === "parent" ? parentsGrid : childrenGrid).appendChild(makeCard(person, index));
});

function openProfile(person) {
  document.querySelector("#profile-image").src = person.image;
  document.querySelector("#profile-image").alt = `Portrait of ${person.name}`;
  document.querySelector("#profile-index").textContent = `RECORD ${person.id}`;
  document.querySelector("#profile-role").textContent = person.role;
  document.querySelector("#profile-name").textContent = person.name;
  document.querySelector("#profile-subtitle").textContent = person.subtitle;
  document.querySelector("#profile-bio").textContent = person.bio;
  document.querySelector("#profile-facts").innerHTML = `
    <div><dt>AGE</dt><dd>${person.age || "—"}</dd></div>
    <div><dt>POSITION</dt><dd>${person.position || "—"}</dd></div>`;
  const source = document.querySelector("#profile-source");
  source.href = person.source || "https://www.pinterest.com/";
  source.style.display = person.source ? "inline-block" : "none";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".close-modal").focus();
}

function closeProfile() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeProfile));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeProfile();
});
document.querySelector("#year").textContent = new Date().getFullYear();
