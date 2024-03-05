const Artinfotemplete = document.querySelector("[Art-info-templete]")

fetch("")
    .then(res => res.json())
    .then(data => {
        const info = Artinfotemplete.content.cloneNode(true)
        console.log(info)
    })