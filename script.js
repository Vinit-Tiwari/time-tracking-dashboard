let workCurrent=document.getElementById("wC")
let workPrevious=document.getElementById("wp")
let playCurrent=document.getElementById("pc")
let playPrevious=document.getElementById("pp")
let studyCurrent=document.getElementById("sc")
let studyPrevious=document.getElementById("sp")
let exerciseCurrent=document.getElementById("ec")
let exercisePrevious=document.getElementById("ep")
let socialCurrent=document.getElementById("soc")
let socialPrevious=document.getElementById("sop")
let selfCurrent=document.getElementById("scc")
let selfPrevious=document.getElementById("scp")


let workC=[5,32,103]
let workP=[7,36,128]
let studyC=[0,4,13]
let studyP=[1,7,19]
let playC=[1,10,23]
let playP=[2,8,29]
let exerciseC=[1,4,11]
let exerciseP=[1,5,18]
let socialC=[1,5,21]
let socialP=[3,10,23]
let selfC=[0,2,7]
let selfP=[1,2,11]

let d=document.getElementById("d")
let w=document.getElementById("w")
let m=document.getElementById("m")

function changeContent(i){
    workCurrent.innerHTML=workC[i]+"hrs"
    workPrevious.innerHTML=previour(i)+workP[i]+"hrs"
    playCurrent.innerHTML=playC[i]+"hrs"
    playPrevious.innerHTML=previour(i)+playP[i]+"hrs"
    exerciseCurrent.innerHTML=exerciseC[i]+"hrs"
    exercisePrevious.innerHTML=previour(i)+exerciseP[i]+"hrs"
    socialCurrent.innerHTML=socialC[i]+"hrs"
    socialPrevious.innerHTML=previour(i)+socialP[i]+"hrs"
    selfCurrent.innerHTML=selfC[i]+"hrs"
    selfPrevious.innerHTML=previour(i)+selfP[i]+"hrs"
    studyCurrent.innerHTML=studyC[i]+"hrs"
    studyPrevious.innerHTML=previour(i)+studyP[i]+"hrs"

    if(i==0){
        d.style.opacity="1";
        w.style.opacity="0.7";
        m.style.opacity="0.7";

      }
    
    else if(i==1){
        w.style.opacity="1";
        m.style.opacity="0.7";
        d.style.opacity="0.7";

      }
    
    else if(i==2){
        m.style.opacity="1";
        d.style.opacity="0.7";
        w.style.opacity="0.7";

      }
    
}


function previour(i){
    if(i==0){
        return "Previous - "
    }
    else if(i==1){
        return "Last week - "
    }
    else if(i==2){
        return "Last Month - "
    }
}