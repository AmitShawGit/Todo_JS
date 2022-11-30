showtask(); //refresh hone pr v na hatte
let entertask = document.getElementById("entertask");
let adding = document.getElementById("adding");

//local storage datastored
adding.addEventListener("click", function(){
    entertaskval = entertask.value;
    if(entertaskval.trim() != 0){
    let webtask = localStorage.getItem("localtask");

    if(webtask == null){
        taskobj = [];
    }else{
        taskobj = JSON.parse(webtask);
    }

    taskobj.push(entertaskval);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    entertask.value = '';
 }
  showtask();
})
//data inserted in table
function showtask(){
    let webtask = localStorage.getItem("localtask");

    if(webtask == null){
        taskobj = [];
    }else{
        taskobj = JSON.parse(webtask);
    }
      let html = '';
      let addedtask = document.getElementById("addedtask");
      taskobj.forEach((item, index) => {
        html += ` 
    <tbody>
        <tr>
            <td>${index+1}</td>
            <td>${item}</td>
            <td><i class="bi bi-pencil-square edit" onclick="edittask(${index})"></i></td>
            <td><i class="bi bi-trash-fill delete"  onclick="deleteitem(${index})"></i></td>
        </tr>
        </tbody>`;
      });
      addedtask.innerHTML = html
}
 
//data inserted succesfull
//edit btn

function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let adding = document.getElementById("adding");
    let savetask = document.getElementById("savetask");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    entertask.value = taskobj[index]; //edit btn clickto imsert the data on form
    adding.style.display = "none";
    savetask.style.display = "block";
}
//save task
let savetask = document.getElementById("savetask");
savetask.addEventListener("click", function(){
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskobj[saveindex] = entertask.value;
    savetask.style.display = "none";
    adding.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
})

//Delete item btn
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index , 1);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
}

//deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click" , function(){
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    if(webtask == null){
        taskobj = [];
    }else{
        taskobj = JSON.parse(webtask);
        taskobj = [];
    }
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
})