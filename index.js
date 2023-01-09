var arr = [];
let api_key = "2fd451fc1dc8157474eadd147680826c";

const appent = document.getElementById("child-container");
appent.innerHTML="No Data"

const fetchLondon = () => {
  let obj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('london').classList.add('border')
  const city_name = document
    .getElementById("london")
    .getAttribute("data-value");
    let match = find(city_name);
    if(match >= 0){
      console.log(match)
      let id = `update${match}`
      document.getElementById(id).classList.add('bg')
    
    }else{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`
  )
    .then((res) => res.json())
    .then((res) => {
      obj.city = res.city.name;
      obj.temp = res.list[0].main.temp;
      obj.pressure = res.list[0].main.pressure;
      obj.description = res.list[0].weather[0].main;
      obj.humidity = res.list[0].main.humidity;

      arr.push(obj);
    });
  }
};

const fetchNewYork = () => {
  let obj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('new-york').classList.add('border')
  const city_name = document
    .getElementById("new-york")
    .getAttribute("data-value");
    let match = find(city_name);
    if(match >= 0){
      console.log(match)
      let id = `update${match}`
      document.getElementById(id).classList.add('bg')
    
    }else{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`
  )
    .then((res) => res.json())
    .then((res) => {
      obj.city = res.city.name;
      obj.temp = res.list[0].main.temp;
      obj.pressure = res.list[0].main.pressure;
      obj.description = res.list[0].weather[0].main;
      obj.humidity = res.list[0].main.humidity;

      arr.push(obj);
    });
  }
};

const fetchLosAngeles = () => {
  let obj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('los-angeles').classList.add('border')
  const city_name = document
    .getElementById("los-angeles")
    .getAttribute("data-value");
    let match = find(city_name);
    if(match >= 0){
      console.log(match)
      let id = `update${match}`
      document.getElementById(id).classList.add('bg')
    
    }else{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`
  )
    .then((res) => res.json())
    .then((res) => {
      obj.city = res.city.name;
      obj.temp = res.list[0].main.temp;
      obj.pressure = res.list[0].main.pressure;
      obj.description = res.list[0].weather[0].main;
      obj.humidity = res.list[0].main.humidity;

      arr.push(obj);
    });
  }
};

const fetchLesVegas = () => {
  let obj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('las-vegas').classList.add('border')
  const city_name = document
    .getElementById("las-vegas")
    .getAttribute("data-value");
    let match = find(city_name);
    if(match >= 0){
      console.log(match)
      let id = `update${match}`
      document.getElementById(id).classList.add('bg')
    
    }else{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`
  )
    .then((res) => res.json())
    .then((res) => {
      obj.city = res.city.name;
      obj.temp = res.list[0].main.temp;
      obj.pressure = res.list[0].main.pressure;
      obj.description = res.list[0].weather[0].main;
      obj.humidity = res.list[0].main.humidity;

      arr.push(obj);
    });
  }
};

let remark;
function find(val){
  for(let i=0; i<arr.length; i++){
  if(arr[i].city.toLowerCase() == val){
 remark = i;
 return i;
  } 
}
}

function handleSearch(){
  let obj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  const city_name = document.getElementById('input').value;
  let match = find(city_name);

  if(match >= 0){
    console.log(match)
    let id = `update${match}`
    document.getElementById(id).classList.add('bg')
  }
  else{
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${api_key}`
  )
    .then((res) => res.json())
    .then((res) => {
      obj.city = res.city.name;
      obj.temp = res.list[0].main.temp;
      obj.pressure = res.list[0].main.pressure;
      obj.description = res.list[0].weather[0].main;
      obj.humidity = res.list[0].main.humidity;})

      arr.push(obj);
    }
}


function map() {
  arr.map((obj, idx) => {
    let parent = document.createElement("div");
    parent.className = "parent";
    parent.id=`update${idx}`
    let city = document.createElement("div");
    city.innerHTML = obj.city;

    let description = document.createElement("div");
    description.innerHTML = obj.description;

    let temp = document.createElement("div");
    temp.innerHTML = obj.temp;

    let pressure = document.createElement("div");
    pressure.innerHTML = obj.pressure;

    let humidity = document.createElement("div");
    humidity.innerHTML = obj.humidity;

    let empty = document.createElement("div");
    let input = document.createElement("input");
    input.type = "submit";
    input.id=idx;
    input.value = "delete";
    input.style.all = "unset";
    input.style.color = "blue";
    input.style.cursor = "pointer";
    input.addEventListener('click',(e)=>{
    let index = e.target.id;
    arr.splice(index,1)
    document.getElementById("child-container").innerHTML = "";
    map()
    })
    empty.appendChild(input);

    parent.appendChild(city);
    parent.appendChild(description);
    parent.appendChild(temp);
    parent.appendChild(pressure);
    parent.appendChild(humidity);
    parent.appendChild(empty);
    appent.appendChild(parent);
  });
}

document.getElementById("london").addEventListener("click", () => {
  fetchLondon();
  if(remark == undefined){
  setTimeout(() => {
    if (arr.length !== 0) {
      document.getElementById("child-container").innerHTML = "";
    }
    map();
  }, 1000);
}
remark = undefined;
});

document.getElementById("new-york").addEventListener("click", () => {
  fetchNewYork();
  if(remark == undefined){
  setTimeout(() => {
    document.getElementById("child-container").innerHTML = "";
    map();
  }, 1000);
}
remark = undefined;
});

document.getElementById('los-angeles').addEventListener("click", ()=>{
fetchLosAngeles()
if(remark == undefined){
setTimeout(()=>{
  document.getElementById("child-container").innerHTML = "";
  map()
},1000)
}
remark = undefined;
});

document.getElementById('las-vegas').addEventListener("click", ()=>{
  fetchLesVegas();
  if(remark == undefined){
  setTimeout(()=>{
    document.getElementById("child-container").innerHTML = "";
    map()
  },1000)
}
remark = undefined;
  });
  document.getElementById('btn').addEventListener("click", ()=>{
    handleSearch();
    if(remark == undefined){
      setTimeout(()=>{
        document.getElementById("child-container").innerHTML = "";
        map()
      },1000)
    }
    remark = undefined;
    
    });


    document.getElementById



    console.log(arr)
