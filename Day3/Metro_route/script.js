const metroStations=[
    "Rithla",
    "Rohini west",
    "Netaji subash place",
    "Keshav Puran",
    "Shastri Nagar",
    "Kashmere Gate",
    "Chandni chowk",
    "new delhi",
    "Rajiv chowk",
    "patel chowk",
    "central secratariat",
    "udyog bhawan",
    "lok kalyan marg",
    "aiims",
    "green park",
    "Hauz khas",
    "malviya nagar",
    "saket",
    "qutub minar",
    "chatrapur",
    "sultanpur",
    "ghitroni",
    "arjan garh",
    "Guru droncharaya",
    "sikanderpur",
    "mg road",
    "iffco chwok",
    "huda city centre"
];
const SourceSelect = document.getElementById("source");
const DestinationSelect = document.getElementById("destination");

metroStations.forEach(station =>{
    SourceSelect.innerHTML+=
    `<option value="${station}">
    ${station}
    </option>`;

    DestinationSelect.innerHTML+=
    `<option value="${station}">
    ${station}
    </option>`;

})

function findRoute(){
    let Source = SourceSelect.value;
    let Destination =DestinationSelect.value;
    if(Source===""|| Destination===""){
        alert("please select both station");
        return;
    }
    if(Source===Destination){
        alert("please source & destination can not be same");
        return;
    }
    let sourceindex = metroStations.indexOf(Source);
    let destinationindex = metroStations.indexOf(Destination);

let route=[];
if(sourceindex < destinationindex){
    for(let i=sourceindex;
        i <= destinationindex; i++
    ){
        route.push(metroStations[i]);
    }
}
else{
    for(let i=sourceindex;
        i >= destinationindex; i--
    ){
        route.push(metroStations[i]);
    }
}
let totalstations = route.length-1
let fare;
if(totalstations <= 5){
    fare=20;
}
else if(totalstations <= 10){
    fare=30;
}
else if(totalstations <= 15){
    fare=40;
}
else{
    fare=50;
}

let traveltime = totalstations * 2;
displayResult(route, totalstations, fare, traveltime);
function displayResult(
    route,
    stations,
    fare,
    time
){
  let html =`
  <div class="result-box">
  <h1>Journey information</h1>
  <div class ="info">
  <b>Estimated fare:</b>Rs${fare}
  </div>
  <div class="info">
  <b>Travel Time:</b>${time}Minutes
  </div>
  <div class="route">
  <h3>Route details</h3>
  `;
  route.forEach((stations,index)=>{
    html+=
    `
    <div class="stations">
    ${stations}
    </div>
    `;
    if(index!==route.length-1){
        html+=
        `
      <div class="arrow">
       </div>
      `;
    }
  });
  html+=
  `
  <div>
  </div>
  `;
  document.getElementById("output").innerHTML=html;
}
}