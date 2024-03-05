const searchInput=document.querySelector("data-searc")


searchInput.addEventListener("input", (e)=>{
    const value= e.target.value
    console.log(value)
})