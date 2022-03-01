// get allPhone data
const allPhone = () => {
  document.getElementById("search-result").innerHTML = ``;
  const searchValue = document.getElementById("search-box").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((phone) => showAllPhone(phone.data));
};

// set allPhone data
const showAllPhone = (phones) => {
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
          <div class="card-footer my-card-bg border-0"><button class="btn btn-primary ">Details</button></div>
        </div>`;
    parent.appendChild(div);
  }
};
