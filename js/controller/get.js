import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable } from "../temp/table.js";

var Myvar = {};

export function isiTablePresensi(results) {
  Myvar.length = results.length;
  results.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)); //mengurutkan berdasasrkan datetime in descending order
  results.forEach(isiRow);
  console.log(results);
}

function isiRow(value) {
  document.getElementById("jml").textContent = Myvar.length + " Data";

  let content = isiTable
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number ? value.biodata.phone_number : value.phone_number ? value.phone_number : "#NOHP#")
    .replace("#JABATAN#", value.biodata.jabatan)
    .replace("#LOKASI#", value.location)
    .replace("#STATUS#", value.checkin)
    .replace("#HARIKERJA#", value.biodata.hari_kerja)
    .replace("#JAMKERJA#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi : "JAMKERJA#")
    .replace("#JAMMASUK#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk : "JAMMASUK")
    .replace("#JAMKELUAR#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_keluar : "JAMKELUAR#")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
