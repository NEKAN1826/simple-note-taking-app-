document.getElementById("noteSubmit").onclick = function(){addNote()};
function addNote(){
    let note = document.getElementById('noteInput').value;
    if (note != ""){
        let listItem = document.createElement("li");
        listItem.innerHTML = `${note}`;
        document.getElementById("notebook").append(listItem);
        document.getElementById('noteInput').value = "";
    }
}