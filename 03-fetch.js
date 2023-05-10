const resp = fetch("https://reqres.in/api/users?page=1");

resp
  .then((response) => response.json())
  .then((json) => {
    let htmlX = "";
    json.data.forEach((element) => {
      console.log(element);
      let htmlCard = `<div class="col-4"><div class="card">
    <div class="card-header">
    Featured
    </div>
    <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to addition</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div> </div>`;
      htmlX = htmlX + htmlCard;
    });
    content.innerHTML = htmlX;
  });


