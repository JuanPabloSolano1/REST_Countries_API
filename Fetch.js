function fetch_url(url){
  fetch(url)
  .then(response => response.json())
  .then(data=>{
    data.map(element =>{
     result.insertAdjacentHTML("beforeend",
     `<div id="card">
        <div class="card" style="width: 18rem;">
            <img src="${element["flag"]}" class="card-img-top" >
            <div class="card-body">
            <h3 class="card-text"><strong>${element["name"]}</strong></h3>
            <p class="card-text"><strong>Population: </strong>${parseInt(element["population"]).toLocaleString()}</p>
            <p class="card-text"><strong>Region: </strong> ${element["region"]}</p>
            <p class="card-text"><strong>Capital:</strong> ${element["capital"]}</p>
        </div>
    </div>`
   )
    })
  })
}

function fetch_input(input){
  fetch(`https://restcountries.eu/rest/v2/name/${input}?fullText=true`)
  .then(response => response.json())
  .then(data =>{
    result.insertAdjacentHTML("beforeend",
    `<div id="card">
       <div class="card" style="width: 18rem;">
           <img src="${data[0]["flag"]}" class="card-img-top" >
           <div class="card-body">
           <h3 class="card-text"><strong>${data[0]["name"]}</strong></h3>
           <p class="card-text"><strong>Population: </strong>${data[0]["population"].toLocaleString()}</p>
           <p class="card-text"><strong>Region: </strong> ${data[0]["region"]}</p>
           <p class="card-text"><strong>Capital:</strong> ${data[0]["capital"]}</p>
       </div>
   </div>`
 )
  })
}

function fetch_region(region){
  fetch(`https://restcountries.eu/rest/v2/region/${region}`)
  .then(response => response.json())
  .then(data =>{
    data.map(element =>{
     result.insertAdjacentHTML("beforeend",
     `<div id="card">
        <div class="card" style="width: 18rem;">
            <img src="${element["flag"]}" class="card-img-top" >
            <div class="card-body">
            <h3 class="card-text"><strong>${element["name"]}</strong></h3>
            <p class="card-text"><strong>Population: </strong>${parseInt(element["population"]).toLocaleString()}</p>
            <p class="card-text"><strong>Region: </strong> ${element["region"]}</p>
            <p class="card-text"><strong>Capital:</strong> ${element["capital"]}</p>
        </div>
    </div>`
   )
 })
  })
}
