const addButton = document.getElementById('addbtn');

const upadteLSData = ()=>{
    const notearr=[];
    const textcontent = document.querySelectorAll('textarea');
    textcontent.forEach((e)=>{
        return notearr.push(e.value);
    })
    console.log(notearr)

    localStorage.setItem('notearr',JSON.stringify(notearr))

}

const addnewNote=(text ='')=>{
    const notes = document.createElement('div');
    notes.classList.add('notebox');
    notes.style.zIndex =99;
    const htmlData =`<button class="delete" id ="delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
    <button class="edit" id ="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <div class="note ${text ? "":"hidden" } "></div>
    <textarea name="textarea" cols="30" rows="10" class="text ${text ? "hidden":"" } " placeholder="Enter Note" id="text"></textarea>`;
    notes.insertAdjacentHTML("afterbegin",htmlData);
    document.body.appendChild(notes);
    

    
    
    const editbtn = notes.querySelector('#edit');
    const delbtn = notes.querySelector('#delete')
    const main = notes.querySelector('.note');
    const texts = notes.querySelector('.text');
    
    texts.value =text;
    main.innerHTML =text;
    
    
    delbtn.addEventListener('click',()=>{
        // if(confirm("Are you sure you want to delete this note?")){
            notes.remove();
            upadteLSData();
            
        })
    editbtn.addEventListener('click',()=>{
         main.classList.toggle("hidden");
        texts.classList.toggle("hidden");
    })

    texts.addEventListener('change',(event)=>{
        const value = event.target.value;
        main.innerHTML =value;
        upadteLSData();
    })
    
    
}

const savedata = JSON.parse(localStorage.getItem('notearr'));
if(savedata){
    savedata.forEach((e)=>{
        addnewNote(e);
    })
}

addButton.addEventListener('click',()=> addnewNote());