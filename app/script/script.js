console.log("JS hooked up")
// var button = document.createElement("button");

const toggle = () => {
    var nav = document.querySelector("#nav");
    nav.classList.toggle("hide");
    console.log("Clicked")
}

const getShortLink = (url) => {
  // const linkToShorten = document
    var link = document.getElementById("link").value;
    var apiUrl = `https://api.shrtco.de/v2/shorten?url=${link}`
    if (!link) {
      const sp = document.getElementById('sp')
      sp.classList.toggle('hide');

    } else {
      fetch(apiUrl).then(response => {
        return response.json();
      }).then(data => {
        // Work with JSON data here
        // console.log(data.result.short_link2);
        // console.log(link)
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("links__card")
  
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("links__card-link")
        const p = document.createElement("p");
        p.textContent = link
  
        linkDiv.appendChild(p);
        outerDiv.appendChild(linkDiv);
  
        const hr = document.createElement("hr");
        hr.classList.add("hide-for-desktop")
  
  
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("link-container");
        
  
        const shortDiv = document.createElement("div");
        shortDiv.classList.add("links__card-short");
  
        const ShortP = document.createElement("p");
        ShortP.classList.add("ls")
        ShortP.textContent = data.result.short_link2
        shortDiv.appendChild(ShortP)
        containerDiv.appendChild(shortDiv);
  
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("links__card-btn");
  
        var button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = "Copy"
        buttonDiv.appendChild(button)
  
        containerDiv.appendChild(buttonDiv)
  
        outerDiv.appendChild(linkDiv)
        outerDiv.appendChild(hr)
        outerDiv.appendChild(containerDiv)
  
        const currentDiv = document.querySelector(".links").appendChild(outerDiv)
        // document.body.insertBefore(outerDiv, currentDiv);
        
        function copyL(event) {
          // event.preventDefault();
          // var copyText = document.querySelector(".ls").textContent;
          // button.style.background = "hsl(260, 8%, 14%)";
          // button.textContent = "Copied!";
        
        
        
          // navigator.clipboard.writeText(copyText);
          // // console.log("Click")
          // console.log(data.result.short_link2)
          // // copyText = "";

          let copied = ShortP.textContent;

          navigator.clipboard.writeText(copied).then(() => {
            button.textContent = 'Copied!';
            button.style.background = 'hsl(257, 27%, 26%)';
          });
        }
        button.addEventListener('click', copyL);
        console.log("Success")
  
      }).catch(err => {
        // Do something for an error here
        // console.log(err)
        alert("Please make sure you have entered a valid link.")
      });
    }


}

// document.getElementsByName("btn")[0].onclick = function(event) {
//   // const copyText = document.querySelector(".ls").textContent;
//   // button.style.background = "hsl(260, 8%, 14%)";
//   // button.textContent = "Copied!";



//   // navigator.clipboard.writeText(copyText);
//   alert("called")
// }

// const copy = () => {
//   alert("called");
// }