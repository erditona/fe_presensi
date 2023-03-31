import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable } from "./table.js";
let urlAPI = "https://ws-dito.herokuapp.com/presensi";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTable
    .replace("#NAMA#", value.Biodata.Nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#JABATAN#", value.biodata.jabatan)
    .replace("#LOKASI#", value.location)
    .replace("#STATUS#", value.checkin)
    .replace("#HARIKERJA#", value.biodata.hari_kerja)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
