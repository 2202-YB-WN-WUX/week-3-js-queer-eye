const jonoLink = document.getElementById('jono-link');
const antoniLink = document.getElementById('antoni-link');
const overlay = document.getElementById('huge-blob');
const jonoContent = document.getElementById('jono-content');
const closeButton = document.getElementById('close-button');
const pageContent = document.getElementById('page-content');

antoniLink.onclick = function(){
  document.getElementById("body").style.overflow = "hidden";
  overlay.classList.toggle("active");
  overlay.style.backgroundColor = "#E85F76";
  let antoniContent = `
  <h1>Welcome to Antoni Page</h1>
  `;
  pageContent.innerHTML = antoniContent;
  let delayedContent = setTimeout(delayAnimation, 500);
}

jonoLink.onclick = function(){
  // body overflow
  document.getElementById("body").style.overflow = "hidden";
  overlay.classList.toggle("active");
  overlay.style.backgroundColor = "#546EE8";
  let jonoContent = `
  <h1>Welcome to Jono Page</h1>
  `;
  pageContent.innerHTML = jonoContent;
  let delayedContent = setTimeout(delayAnimation, 500);
}

closeButton.onclick = function(){
  document.getElementById("body").style.overflowY = "auto";
  let delayedContent = setTimeout(delayClose, 1000);
  jonoContent.classList.toggle("active");

}

function delayAnimation(){
  jonoContent.classList.toggle("active");
}

function delayClose(){
  overlay.classList.toggle("active");
}

// Your task is to create another page - which overlaps the screen.
// Include different content. Style it so it looks cool. Use a different
// color for the blob.
//
// - You could use classes for a "generic blob" which changes color based
// on the click.
// - Or you could use an ID and make a whole new blob. This way you could have
// it look different (maybe a rectangle?)
