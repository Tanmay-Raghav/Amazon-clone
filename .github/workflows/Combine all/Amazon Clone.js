const imgs = document.querySelectorAll('.hero-section ul img');
const prev_btn = document.querySelector('.control_prev');
const nxt_btn = document.querySelector('.control_nxt');
const country_select = document.querySelectorAll('.select-country');

for(let select of country_select){
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "country" && currCode === "IN") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
     
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

let n=0;

function changeSlide(){
   for(let i=0;i<imgs.length;i++){
       imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide()

prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }else{

        n=imgs.length - 1;
    }    
    changeSlide();
})

nxt_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})

