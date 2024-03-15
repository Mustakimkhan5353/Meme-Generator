const memeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector("img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector("meme-author");

const url = "https:meme-api.com/gimme";

const updateDetails = (url , title , author)=>{
    memeImage.setAttribute("src",url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By :${author}`;
}

const generateMeme = ()=>{
    fetch(url)
    .then((response)=>
        response.json())
        .then(data =>{ memeImage.innerHTML = `<img src ="${data.url}"/>`
             updateDetails(data.url , data.title ,data.author);
        });
}

 memeBtn.addEventListener("click", generateMeme)

generateMeme();