// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


  const likes = document.querySelectorAll(".like-glyph");
  likes.forEach((like) => {
    like.addEventListener("click", (e) =>{

      if (e.target.textContent === EMPTY_HEART){
       
        mimicServerCall()

        .then(() =>{
          e.target.textContent= FULL_HEART;
          e.target.classList.add("activated-heart");        })
        
        .catch((error) => {
    
          document.querySelector("#modal").classList.remove("hidden");

          const errorMessage = document.querySelector("#modal-message")
          errorMessage.innerText = error;
          
          setTimeout(() => {
            document.querySelector("#modal").classList.add("hidden")
          }, 3000);
  
        });
      }

      else if (e.target.textContent === FULL_HEART){
     
        mimicServerCall()
        .then(() => {

          e.target.textContent = EMPTY_HEART;
          e.target.classList.remove("activated-heart");
        })
        .catch((error) => {
          console.error(error); 
        });
    }
  });
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}





