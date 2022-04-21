import { series } from './data.js';
var tablaSeries = document.getElementById("series");
var totalSeasons = 0;
function cargarSeries(series) {
    series.forEach(function (serie) {
        var elemento = document.createElement("tr");
        elemento.innerHTML = "<td>".concat(serie.id, "</td>\n        <th><a href=\"").concat(serie.link, "\">").concat(serie.title, "</a></th>\n        <td>").concat(serie.productor, "</td>\n        <td>").concat(serie.seasons, "</td>");
        totalSeasons += serie.seasons;
        tablaSeries.appendChild(elemento);
    });
}
cargarSeries(series);
document.getElementsByTagName("tr")[series.length + 1].innerHTML = "<td colspan=\"4\">Seasons Average: ".concat(totalSeasons / series.length, "</td>");
