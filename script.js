// Accéder à l'URL
// https://api.unsplash.com/photos/?client_id=dJc_gWNvu-_M7bpfI16Kxrjr4yCe2s086evkV2DmuFg
// https://api.unsplash.com/photos/nature/?client_id=dJc_gWNvu-_M7bpfI16Kxrjr4yCe2s086evkV2DmuFg

let background = document.querySelector("body");

let random = Math.floor(Math.random() * 9);
console.log(random);


fetch("https://api.unsplash.com/topics/nature/photos/?client_id=dJc_gWNvu-_M7bpfI16Kxrjr4yCe2s086evkV2DmuFg")
    .then(result => result.json())
    .then(data => {
        console.log(data)
        background.style.backgroundImage = `url("${data[random].urls.full}")`;
        }
    )


