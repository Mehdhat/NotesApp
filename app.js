const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    
    inputBox.setAttribute("contenteditable", "true");
    
    img.src = "./ic_delete_128_28267.png";
    
    inputBox.appendChild(img);
    
    notesContainer.appendChild(inputBox);
    
   // Add event listener for keyup to update storage
   inputBox.addEventListener("keyup", updateStorage);
});

notesContainer.addEventListener("click", function(e) {
   if (e.target.tagName === "IMG") {
       e.target.parentElement.remove();
       updateStorage();
   }
});

// Prevent default enter key behavior
document.addEventListener("keydown", event => {
   if (event.key === "Enter") {
       document.execCommand("insertLineBreak");
       event.preventDefault();
   }
});

// Load existing notes on page load
showNotes();
