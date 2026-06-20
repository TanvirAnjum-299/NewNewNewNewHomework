const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
addBtn.addEventListener("click", () => {
  const itemText = input.value.trim();
  if (itemText !== "") {
    const li = document.createElement("li");
    li.textContent = itemText;
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  }
});
