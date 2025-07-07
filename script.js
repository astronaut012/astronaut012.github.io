var clrBtn=document.querySelector("button");

clrBtn.addEventListener("click",changeBgColor);
var toggle=0;

function changeBgColor()
{
    toggle = !toggle;

    if(toggle==1){
    document.getElementById("body1").style.animation="change 10s infinite";
    clrBtn.textContent="Click to revert";
    }
    else{
    document.getElementById("body1").style.animation=null;
    clrBtn.textContent="Click to view this page with my favourite background!";
    }
}


var quoteBtn1=document.getElementById("quoteBtn");
quoteBtn1.addEventListener("click",displayBook);

/*var books=["Rule your mind or it will rule you","Just one small positive thought in the morning can change your whole day",
    "Do not be swayed by the fears in your mind; be led by the dreams in your heart",
    "The highest peak hasn't been climbed yet, the mightiest rivers aren't spanned",
    "Believe in yourself",
    ""
]*/

var books = ["What Money Can't Buy","The Inimitable Jeeves","Percy Jackson series",
    "Lab Girl","The Hitchhiker's Guide to the Galaxy","A Wrinkle in Time","Artemis Fowl",
    "Wonder","Fintan Fedora: The World's worst Explorer","Inkheart","Brief History of Time"
]


function displayBook(){
// event.preventDefault();
  var random=Math.random()*11;
  var index=Math.floor(random);
  const newBook = document.createElement('p');

  newBook.id="replace";

  newBook.textContent=books[index];

  const oldElement = document.getElementById('replace');
  oldElement.replaceWith(newBook);

}