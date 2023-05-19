const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlPUT = "https://ws-dito.herokuapp.com/upd/" + presensiId;

export function AmbilResponse(results) {
  console.log(results); //menampilkan response API pada console
  alert(results.message); //menampilkan response API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}
