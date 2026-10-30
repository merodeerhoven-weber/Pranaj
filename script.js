/*
  HOUSE ARCHIVE — EDIT YOUR FAMILY DATA HERE
  Image tip: use a direct image URL from Pinterest (usually starts with
  https://i.pinimg.com/...). A Pinterest pin page URL is not an image URL.
  Replace image with your chosen direct image URL and source with the pin page URL.
*/
const family = [
  {
    id: "Father", group: "parent", name: "Laksamana TNI (Purn.) Wiratama Suryanegara, S.H., M.H.", role: "THE PATRIARCH",
    subtitle: "Head of the Family", image: "https://i.pinimg.com/736x/c4/04/6a/c4046a97018b18a3af3f334e51b69017.jpg",
    source: "https://www.pinterest.com/", age: "65", position: "Family Head",
    bio: "Write the father's biography here. Add his background, personality, influence, and the secrets that shaped this family."
  },
  {
    id: "Mother", group: "parent", name: "dr. Pramesthi Larasati, Sp.F. M.si", role: "THE MATRIARCH",
    subtitle: "Keeper of the House", image: "https://i.pinimg.com/736x/d7/ec/9b/d7ec9b5b5a645c0f72f096b8ca8618b5.jpg",
    source: "https://www.pinterest.com/", age: "61", position: "Family Matriarch",
    bio: "Write the mother's biography here. Describe her history, values, and the role she plays in holding the family together."
  },
  {
    id: "1st", group: "child", name: "Ishtar D. Prajñāpāramithā", role: "The Diva",
    subtitle: "Eldest Daughter", image: "https://i.pinimg.com/736x/25/16/cb/2516cb0f2473fa50f2e106f299cb9d47.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "First Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "2nd", group: "child", name: "Reviano G. Prajñāpāramartā", role: "RUTA",
    subtitle: "Second Son", image: "https://i.pinimg.com/736x/ed/0a/e8/ed0ae880d34814a054089f964b454b1d.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "Second Son",
    bio: "At 35 years old, Ruta is a man defined by contradictions—a calculated shadow in the criminal underworld, yet a devoted and gentle protector at home. Born into a large strict household, his life was shaped from an early age by discipline and authority. His father, a retired military veteran, instilled in his children fierce loyalty and obedience, but also drew them into a dangerous world of underground, illegal business operations."
  },
  {
    id: "3rd", group: "child", name: "Deano Prajñāpāramartā", role: "Deano",
    subtitle: "Third Son", image: "https://i.pinimg.com/736x/07/13/5c/07135c8bc6585a8eb35e8eb578f97d8d.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "Third Son",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "4th", group: "child", name: "Mero Deerhoven Prajñāpāramartā", role: "MATA",
    subtitle: "Fourth Son", image: "https://i.pinimg.com/736x/3e/e0/8d/3ee08d5cc0ae4474945e793453d9a344.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "Fourth Son",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "5th", group: "child", name: "Clara Prajñāpāramithā", role: "Bloom",
    subtitle: "fifth Daughter", image: "https://i.pinimg.com/736x/b1/3c/a9/b13ca94199c71b12d6c04497772443f4.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "Fifth Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "6th", group: "child", name: "Priscilla Prajñāpāramithā", role: "Cilla",
    subtitle: "Sixth Daughter", image: "https://i.pinimg.com/736x/cf/c8/26/cfc8267bbb1beedccd4471c8bafe329a.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "Second Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "7th", group: "child", name: "Birawa Sembada Prajñāpāramartā", role: "AWA",
    subtitle: "Seventh Son", image: "https://i.pinimg.com/736x/69/bc/dd/69bcddf1b57490c67ce3a00b98a1724b.jpg",
    source: "https://www.pinterest.com/", age: "—", position: "Third Daughter",
    bio: "Write this child's biography here. Include their personality, occupation, family role, and personal history."
  },
  {
    id: "8th", group: "child", name: "Kanaᧉra Prajñāpāramithā", role: "Edith",
    subtitle: "Eight Daughterr", image: "https://i.pinimg.com/736x/df/40/0a/df400a735de27dd94e4de311879327b7.jpg",
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
