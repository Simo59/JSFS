let userlogin;
let userpassword;
let username;

let available;
let rented;
let other;
let nbEmpruntsMax=0;



const setup = () => {
  available=document.getElementById("available");
  rented=document.getElementById("rented");
  other=document.getElementById("other");
  username = document.getElementById('username');
  document.getElementById('ajouter').addEventListener('click',create);
  document.getElementById('logout').addEventListener('click', logout);
 
  getUser();
  availableItems();
  rentedByLoggedUser();
  getRentedItemsByOthers();


}




const createHtmlElmt=(content,id="",elt)=>{
  const  newElt = document.createElement(elt);
  newElt.id=id;
  newElt.textContent=content;
  return newElt;
}


/* const suppBtn=createHtmlElmt("Remove","Remove",  "button");
const rentBtn=createHtmlElmt("Rent","Rent",  "button");
const freeBtn=createHtmlElmt("Free","Free",  "button");

 */


window.addEventListener('DOMContentLoaded', setup);

const getUser = async () => {

  const requestOptions = {
                           method :'GET',
                         };
  const response = await fetch('/user/me', requestOptions);
  if (response.ok) {
    const user = await response.json(); 
    document.getElementById('username').innerHTML+=user.name.toUpperCase(); 
    document.getElementById('username').innerHTML+="id :"+user.id;
  }
  else {
    console.log("error");
    const error = await response.json();
    handleError(error);
  }
}


const logout = async () => {
  const requestOptions = {
                         method :'GET',
                       };
  const response = await fetch(`/access/logout`, requestOptions);
  if (response.ok) {
    window.location.href= '/';
  }
}

const handleError = error => {
  if (error.redirectTo)
    window.location.href= error.redirectTo;
  else
    console.log(`erreur : ${error.message}`);
}





const create=async ()=>{
    const discription = document.getElementById('desc');
    const requestOptions={
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({discription:discription.value,disponible:true}),
    }
    const response = await fetch('/item', requestOptions);
    if(response.ok){

        const item=await response.json();
        let suppBtn=createHtmlElmt("Remove","Remove",  "button");
        let rentBtn=createHtmlElmt("Rent","Rent",  "button");
        suppBtn.addEventListener("click",()=>{deleteItem(item._id)});
        rentBtn.addEventListener("click",()=>{rent(item._id)});
        const container=createHtmlElmt(item.discription,item._id,"div");

        container.appendChild(rentBtn);
        container.appendChild(suppBtn);
        available.appendChild(container);

    }
    else{
       console.log('errr');
    }   
  } 



  const  availableItems=async()=> {
    
    const response = await fetch("/item", { method: 'GET', headers: { "Content-Type": "application/json" }, });
    if (response.ok) {  
      const items = await response.json();

      for (let item of items) {
     
        const suppBtn = createHtmlElmt("Remove", "Remove", "button");
        const rentBtn = createHtmlElmt("Rent", "Rent", "button");
        suppBtn.addEventListener("click",()=>{deleteItem(item._id)});
        rentBtn.addEventListener("click",()=>{rent(item._id)});
        const container = createHtmlElmt(item.discription, item._id, "div");
        container.appendChild(rentBtn);
        container.appendChild(suppBtn);
        available.appendChild(container);

      }
    }
  }


  const rentedByLoggedUser =async () => {
    
    const response = await fetch("/item/rentedbyme", { method: 'GET', headers: { "Content-Type": "application/json" }, });
    if (response.ok) {  
      const items = await response.json();

      for (let item of items) {
     
        console.log(`item= ${item}`)
        
        const container = createHtmlElmt(item.discription, item._id, "div");
        const freeBtn = createHtmlElmt("freeItem", "freeItem", "button");
        freeBtn.addEventListener("click",()=>{returnItem(item._id)});
        container.appendChild(freeBtn);
        rented.appendChild(container);

      }
    }
  }

  

  const getRentedItemsByOthers = async () => {
    const response = await fetch("/item/rentedbyothers", { method: 'GET', headers: { "Content-Type": "application/json" }, });
    if (response.ok) { 
      const items = await response.json();
      for (let item of items) {
        const container = createHtmlElmt(item.discription, item._id, "div");
        other.appendChild(container);

      }
    }
  } 
  




    const  rent=async(id)=> {
      if(nbEmpruntsMax<2 ){
      const torent=id;
   
      const response = await fetch(`item/${torent}`, { method: 'PUT', headers: { "Content-Type": "application/json" }, });
      if (response.ok) { 
         
          const items = await response.json();
      
          document.getElementById(id).remove();
     
          const freeBtn = createHtmlElmt("freeItem", "freeItem", "button");
          freeBtn.addEventListener("click",()=>{returnItem(id)});
          const container = createHtmlElmt(items.discription, items._id, "div");
          container.appendChild(freeBtn);
          rented.appendChild(container);
          
  

        nbEmpruntsMax=nbEmpruntsMax+1;
  
  
  
      }
    }
    }

    const deleteItem= async (id)=>{
      const torent=id;
   
      const response = await fetch(`item/${torent}`, { method: 'DELETE', headers: { "Content-Type": "application/json" }, });
      if (response.ok) { 
      
          document.getElementById(id).remove();
      }
    }

    const returnItem = async (id) =>{
      const toFree=id;
   
      const response = await fetch(`item//liberer/${toFree}`, { method: 'PUT', headers: { "Content-Type": "application/json" }, });
      if (response.ok) { 
           const item=await response.json();
         document.getElementById(id).remove();
        let suppBtn=createHtmlElmt("Remove","Remove",  "button");
        let rentBtn=createHtmlElmt("Rent","Rent",  "button");
        suppBtn.addEventListener("click",()=>{deleteItem(item._id)});
        rentBtn.addEventListener("click",()=>{rent(item._id)});
        const container=createHtmlElmt(item.discription,item._id,"div");

        container.appendChild(rentBtn);
        container.appendChild(suppBtn);
        available.appendChild(container);
        nbEmpruntsMax=nbEmpruntsMax-1;

      }
    } 

    














  









    


     


      
























  