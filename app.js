var i=0;

function myFunction(){
    
    i++

    var area=document.getElementById("noteerea")
    var text=document.createElement("div")
    var btna=document.createElement("div")
    var note=document.createElement("div")
    var num=document.createElement("div")
    num.innerText="Note "+ i
    num.className="num"
    note.className="note"
    text.className="box"
    var btn=document.createElement("button")
    btn.className="btn"
    btn.innerText="View Detail"
    btna.className="btna"
    note.innerText=document.getElementById("note").value
    area.appendChild(text)
    text.appendChild(num)
    text.appendChild(note)
    text.appendChild(btna)
    btna.appendChild(btn)
    btn.addEventListener("click",function(){
        var modal=document.getElementById("modal")
        modal.style.display="block"
        var close=document.getElementsByClassName("close")[0]
        close.addEventListener("click",function(){
            modal.style.display="none"
        })
        var txt=document.getElementById("text")
        txt.innerHTML=note.innerText
    })
    

}