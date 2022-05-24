let inputEl;
let addBtn = document.getElementById("add");
let notes = [ ];
let savedNotes = localStorage.getItem("notes")
let listId = 0;

showNotes();

addBtn.addEventListener("click", function(){
  inputEl = document.getElementById("input");
    let note_el = document.getElementById("mylist");
    
let savedNotes = localStorage.getItem("notes")
if (savedNotes == null) notesObj = []
	else notesObj = JSON.parse(savedNotes);

  if (inputEl.value) {
  notesObj.push(inputEl.value);
  localStorage.setItem("notes", JSON.stringify(notesObj))
  inputEl.value = "";
  showNotes();
  // increase note id,
  listId += 1;
  console.log(listId)
  } else {
    alert ("you can't save empty value")
  }
  

});

function showNotes(index){
  let note_el = document.getElementById("mylist");
  let note_tag="";
  
let savedNotes = localStorage.getItem("notes");
	
	if(savedNotes == null) notesObj = []
	else notesObj = JSON.parse(savedNotes);
  
  notesObj.forEach(function(element, index){
    note_tag +=  `<li id="${index +1}"> ${element}<button id="${index}" onclick="deleteNote(this.id)" class='rem btn btn-sm btn-danger' style='float: right;'>&times;</button><button onclick="noteDone(this.id)" class='mark btn btn-sm btn-success' style='float: right;'>&check;</button></li>`
  });
  
  note_el.innerHTML = note_tag;
}

function deleteNote(index){
let savedNotes = localStorage.getItem("notes");
	
	if(savedNotes == null) notesObj = []
	else notesObj = JSON.parse(savedNotes);
  notesObj.splice(index, 1);
localStorage.setItem("notes", JSON.stringify(notesObj))
  
  showNotes();
}

function noteDone(){
 // let liselected = document.getElementById(listId);
 // console.log(liselected.textContent)
  //liselected.classList.add("noteDone");
}