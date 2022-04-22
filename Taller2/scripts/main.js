import { series } from './data.js';
var tablaSeries = document.getElementById("series");
var tarjeta = document.getElementById("tarjeta");
var nombre_series = [];
var totalSeasons = 0;
function cargarSeries(series) {
    series.forEach(function (serie) {
        var elemento = document.createElement("tr");
        elemento.innerHTML = "<td>".concat(serie.id, "</td>\n        <th>").concat(serie.title, "</th>\n        <td>").concat(serie.productor, "</td>\n        <td>").concat(serie.seasons, "</td>");
        totalSeasons += serie.seasons;
        tablaSeries.appendChild(elemento);
        nombre_series.push(elemento);
    });
}
cargarSeries(series);
document.getElementsByTagName("tr")[series.length + 1].innerHTML = "<td colspan=\"4\">Seasons Average: ".concat(totalSeasons / series.length, "</td>");
nombre_series.forEach(function (elemento) {
    elemento.onclick = function () { return crearTarjeta(elemento.children[1].textContent, series); };
});
function crearTarjeta(nombre_Serie, series) {
    series.forEach(function (serie) {
        if (serie.title == nombre_Serie) {
            tarjeta.innerHTML = "<img src=\"".concat(serie.image, "\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.title, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a> \n            </div>");
        }
    });
}
