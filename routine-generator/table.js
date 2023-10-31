let number_of_subject=document.getElementById("number_of_subject");


let frequency=document.getElementById("frequency");
let name_of_subject=document.getElementById("name_of_subject");
let arr_name=[];
let arr_freq=[];
let create=document.getElementById("create");
let genrate=document.getElementById("genrate");
let arr=[];
arr_name[0]="blank";
        arr_freq[0]=0;
let rows=7;
let k=1;
let shuffle=document.getElementById("shuffle");
let show=document.getElementById("show");
let shuffled=[];
let columns=Number(number_of_subject.value);
let day;


function days(a){
    
    switch(a){
        case 0:
                day="monday";
                break;
        case 1:
            day="tuesday";
            break;
        case 2:
            day="wednesday";
            break;
        case 3:
            day="thrusday";
            break;
        case 4:
            day="friday";
            break;
        case 5:
            day="saturday";
            break;
        case 6:
            day="sunday";
            break;
    }

}

create.addEventListener("click",()=>{
 let columns=Number(number_of_subject.value);
for(let i=0; i<(rows-1)*columns; i++) {
    arr[i]="blank";
}
});

 genrate.addEventListener("click",()=>{
        
        arr_name[k]=name_of_subject.value;
        arr_freq[k]=Number(frequency.value);
        k++;
 })

shuffle.addEventListener("click",()=>{

    let columns=Number(number_of_subject.value);
    let freq_i=1;
    for(let i=0; i<(rows-1)*columns; i++){
        if(freq_i==k){
            arr[i]="blank";
          }  
          else{
        arr[i]=arr_name[freq_i];
        arr_freq[freq_i]--;
        if(arr_freq[freq_i]==0)
        freq_i++; 
        }
    }

 
            for (var i = arr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
})

 show.addEventListener("click",()=>{
    /*for(let i=0; i<arr_name.length; i++) {
        let dib=document.getElementById("app");
        
        let prt=document.createElement("p");
        prt.innerHTML=arr_name[i];
        dib.appendChild(prt);
    
    }
    for(let i=0; i<arr_freq.length; i++) {
        let dib=document.getElementById("app");
        let pr=document.createElement("p");
        pr.innerHTML=Number(arr_freq[i]);
        dib.appendChild(pr);
    }*/
 
    let columns=Number(number_of_subject.value);
    
    /*for(let i=0; i<rows*columns; i++) {
        let dib=document.getElementById("app");
        let pr=document.createElement("p");
        pr.innerHTML=arr[i];
        dib.appendChild(pr);
    }*/
    let tab=document.getElementById("tab");
    for(let i=-1;i<rows; i++) {
        let tabrow=document.createElement("tr");
        tab.appendChild(tabrow);
        if(i==-1){
            let t=1;
            for(let g=0; g<=columns+1; g++){
                if(g==0){
                let tabhed=document.createElement("th");
                tabhed.innerHTML="Days and Timing";
                tabrow.appendChild(tabhed);           
            }
            else if(g==Math.ceil(columns/2)){
                let tabhed=document.createElement("th");
                tabhed.innerHTML="lunch";
                tabrow.appendChild(tabhed); 
            }
            else{
                let tabhed=document.createElement("th");
                tabhed.innerHTML=t;
                tabrow.appendChild(tabhed);
                t++;

            }

    }
}
 
else if(i==6){
    for(let j=0; j<=columns+1; j++){
        if(j==0){
            days(i);
            let tabhed=document.createElement("td");
            tabhed.innerHTML=day;
            tabrow.appendChild(tabhed);
 
        }
        else if(j==Math.ceil(columns/2)){
            let tabhed=document.createElement("th");
            tabhed.innerHTML="-----";
            tabrow.appendChild(tabhed); 
        }
        else{
        let tabhed=document.createElement("td");
        tabhed.innerHTML="-----";
        tabrow.appendChild(tabhed);
        }
}

}
    else {
     
        

            for(let j=0; j<=columns+1; j++){
                if(j==0){
                    days(i);
                    let tabhed=document.createElement("td");
                    tabhed.innerHTML=day;
                    tabrow.appendChild(tabhed);
         
                }
                else if(j==Math.ceil(columns/2)){
                    let tabhed=document.createElement("th");
                    tabhed.innerHTML="-----";
                    tabrow.appendChild(tabhed); 
                }
                else{
                let tabhed=document.createElement("td");
                tabhed.innerHTML=arr[i*columns+j];
                tabrow.appendChild(tabhed);
                }
        }
    }
    }
    
}
 );



 

 



