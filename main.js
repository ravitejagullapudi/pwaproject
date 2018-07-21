/* Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready*/

function Loadjson(file,callback) {
  var x= new XMLHttpRequest();
  //The XMLHttpRequest object can be used to exchange data with a web server
  // behind the scenes.
  x.overrideMimeType("application/json");
  //type of file
  x.open("GET",file,true);
  x.onreadystatechange=function()
  //	Defines a function to be called when the readyState property changes
   {
      if(x.readyState===4 && x.status=="200"){
        callback(x.responseText);
        //responseText	get the response data as a string
      }
  };
  x.send(null);
}

//json is in text format so function(text)
Loadjson("data.json", function(text){
  var data =JSON.parse(text);//JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects.
  console.log(data);//print in console browser

  basics(data.details);//sending data from json to function basics
  career(data.career);
  edudetails(data.education);
  skillset(data.keyskills);
  achievements(data.achievements);
})

var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");

function basics(det) {
    var image=document.createElement("img");
    image.src = det.image;
    child1.appendChild(image);

    var name=document.createElement("h1");
    name.textContent = det.name;
    child1.appendChild(name);

    var regno=document.createElement("h3");
    regno.textContent = det.regno;
    child1.appendChild(regno);


    var branch=document.createElement("h3");
    branch.textContent = det.branch;
    child1.appendChild(branch);

    var email=document.createElement("a");
    email.href = "mailto:sindhu.mahankali8@gmail.com";
    email.textContent = det.email;
    child1.appendChild(email);

    var phoneno=document.createElement("h3");
    phoneno.textContent = det.phoneno;
    child1.appendChild(phoneno);

    var hr= document.createElement("hr");
    child1.appendChild(hr);

    var college=document.createElement("h3");
    college.textContent = det.college;
    child1.appendChild(college);

}

function career(car)
{
  var carobj=document.createElement("h2");
  carobj.textContent = car.carobj;
  child2.appendChild(carobj);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var info=document.createElement("h3");
  info.textContent = car.info;
  child2.appendChild(info);
}

function edudetails(edudet) {
  var ed=document.createElement("h2");
  ed.textContent="Educational Qualifications";
  child2.appendChild(ed);

  var hr= document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edudet.length;i++){

    var degree=document.createElement("h3");
    degree.textContent = edudet[i].degree;
    child2.appendChild(degree);

    var ul= document.createElement("ul");
    var li= document.createElement("li");
    li.textContent = edudet[i].institute;
    ul.appendChild(li);
    child2.appendChild(ul);

    var ul= document.createElement("ul");
    var li= document.createElement("li");
    li.textContent = edudet[i].Batch;
    ul.appendChild(li);
    child2.appendChild(ul);
}
}

function skillset(det){
  var cap = document.createElement("h2");
  cap.textContent = "Technical Skills :-";
  child2.appendChild(cap);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var skilldata = document.createElement("table");
  skilldata.border = "1";
  child2.appendChild(skilldata);

  tabledata= "";
  for(i=0;i<det.length;i++){
    tabledata =tabledata+"<tr><td>"+det[i].title+"</td><td>"+det[i].info+"</td></tr>";
  }
  skilldata.innerHTML = tabledata;
}

function achievements(ach){

  var details = document.createElement("h2");
  details.textContent="Achievements:";
  child2.appendChild(details);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

    /*var achievedata=document.createElement("table");
    achievedata.border = "1";
    child2.appendChild(achievedata);

    achievetable="";
    for(i=0;i<ach.length;i++){
      achievetable+="<tr><td>"+ach[i].title+"</td><td>"+ach[i].info+"</td></tr>"
    }
    achievedata.innerHTML=achievetable;*/
    for(i=0;i<ach.length;i++){
      var title= document.createElement("h4");
      title.textContent=ach[i].title;
      child2.appendChild(title);

      var ul =document.createElement("ul");
      var li = document.createElement("li");
      li.textContent = ach[i].info;
      ul.appendChild(li);
      child2.appendChild(ul);

}
}
