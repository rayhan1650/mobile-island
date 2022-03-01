// get allPhone data
const allPhone = () => {
  document.getElementById("search-result").innerHTML = ``;
  document.getElementById("phone-details").innerHTML = ``;
  const searchValue = document.getElementById("search-box").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((phone) => showAllPhone(phone.data));
};

// set allPhone data
const showAllPhone = (phones) => {
  if (phones.length) {
    for (const phone of phones) {
      const parent = document.getElementById("search-result");
      const div = document.createElement("div");
      div.classList = "col";
      div.innerHTML = `    
        <div class="card h-100 align-items-center text-center shadow my-card-bg">
          <img src="${
            phone.image ? phone.image : "Photo not found"
          }" class="card-img-top w-75" alt="..." />
          <div class="card-body">
            <h2 class="card-title">${
              phone.phone_name ? phone.phone_name : "Device name not found"
            }</h2>
            <h6 class="card-title">Brand: ${
              phone.brand ? phone.brand : "Brand not found"
            }</h6>           
          </div>
          <div class="card-footer my-card-bg border-0">
            <a href="#phone-details">
            <button onclick="phoneDetails('${
              phone.slug
            }')" class="btn btn-primary ">Details</button></a>         
          </div>
        </div>`;
      parent.appendChild(div);
    }
  } else {
    alert("No phone found.");
  }
};

// get phoneDetails
const phoneDetails = (details) => {
  document.getElementById("phone-details").innerHTML = ``;
  const url = `https://openapi.programming-hero.com/api/phone/${details}`;
  fetch(url)
    .then((res) => res.json())
    .then((info) => setPhoneDetails(info.data));
};

//set phoneDetails
const setPhoneDetails = (info) => {
  const parent = document.getElementById("phone-details");
  parent.classList = "card my-card-bg my-input my-5 mx-auto shadow";
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="d-flex justify-content-center"><img src="${
      info.image
    }" class="card-img-top my-input" alt="..." /></div>
    
    <div class="card-body">
      <h2 class="card-title">
        ${info.name ? info.name : "Device name not found"}
      </h2>
      <h6>Release Date: ${
        info.releaseDate ? info.releaseDate : "Release date not found"
      }</h6>
      <h4 class="card-title">
        Brand: ${info.brand ? info.brand : "Brand not found"}
      </h4>
      <h3 class="card-title bg-dark bg-opacity-25 mt-5">Main Feature</h3>
      <div class="container">
        <p><span class="fw-bold">Chipset:</span> ${
          info.mainFeatures.chipSet
        }</p>
        <p><span class="fw-bold">Memory:</span> ${info.mainFeatures.memory}</p>
        <p><span class="fw-bold">Storage:</span> ${
          info.mainFeatures.storage
        }</p>
        <p><span class="fw-bold">Display:</span> ${
          info.mainFeatures.displaySize
        }</p>
      </div>
      <h2 class="card-title bg-dark bg-opacity-25">Sensors</h2>
      <h2 class="card-title bg-dark bg-opacity-25">Others</h2>
    </div>`;
  parent.appendChild(div);
};
