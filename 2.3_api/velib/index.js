let selector = document.getElementById("velib");
const URL =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes";

setInterval(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((response) => {
      selector.innerHTML = "";
      response.records.forEach((station) => {
        showVelibStation(
          selector,
          station.fields.name,
          station.fields.mechanical,
          station.fields.ebike
        );
      });
    })
    .catch((error) => console.error(error));
}, 1000 * 5);

const showVelibStation = (
  selector,
  name,
  numberClassicalVelibs,
  numberElectricVelibs
) => {
  selector.innerHTML += `
      <div>
          <h2>Station : ${name}</h2>
          <p>${numberClassicalVelibs} classical Velibs</p>
          <p>${numberElectricVelibs} electric Velibs</p>
      </div>
  `;
};
