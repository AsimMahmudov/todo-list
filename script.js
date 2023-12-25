function addTask() {
  const photoURL = document.getElementById("photo").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const outputDiv = document.getElementById("output");
  const taskDiv = document.createElement("div");
  const бирнерсе = document.createElement("p");
  бирнерсе.textContent = `Имя: ${firstName} ${lastName}`;

  const photo = document.createElement("img");
  photo.src = photoURL;
  photo.alt = "Фото";

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt";

  const likeIcon = document.createElement("i");
  likeIcon.className = "far fa-heart";

  const editIcon = document.createElement("i");
  editIcon.className = "far fa-edit";

  deleteIcon.addEventListener("click", function () {
    taskDiv.remove();
  });

  taskDiv.appendChild(бирнерсе);
  taskDiv.appendChild(photo);
  taskDiv.appendChild(likeIcon);
  taskDiv.appendChild(deleteIcon);
  taskDiv.appendChild(editIcon);
  outputDiv.appendChild(taskDiv);

  document.getElementById("photo").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
}
