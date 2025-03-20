const entryForm = document.getElementById("entryForm");
const entryInput = document.getElementById("entryInput");
const entryList = document.getElementById("entryList");

let entries = [];

function addEntry(text) {
  const entry = {
    id: Date.now(),
    text: text,
  };
  entries.push(entry);
  console.log(entries);
  renderEntries();
}

function deleteEntry(id) {
  entries = entries.filter((entry) => entry.id !== id);
  renderEntries();
}

function renderEntries() {
  entryList.innerHTML = "";
  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${entry.text}</span>
            <button onclick="deleteEntry(${entry.id})">Delete</button>
        `;
  });
}

entryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = entryInput.ariaValueMax.trim();
  if (text !== "") {
    addEntry(text);
    entryInput.value = "";
  }
});
