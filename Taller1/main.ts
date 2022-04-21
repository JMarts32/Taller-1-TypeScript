import {series} from './data.js';
import {Serie} from './series.js';

let tablaSeries: HTMLElement = document.getElementById("series")!;

let totalSeasons : number = 0;

function cargarSeries(series: Serie[]): void{
    series.forEach((serie) => {
        let elemento = document.createElement("tr");
        elemento.innerHTML = `<td>${serie.id}</td>
        <th><a href="${serie.link}">${serie.title}</a></th>
        <td>${serie.productor}</td>
        <td>${serie.seasons}</td>`
        totalSeasons += serie.seasons;
        tablaSeries.appendChild(elemento);
    });
}

cargarSeries(series);
document.getElementsByTagName("tr")[series.length + 1].innerHTML = `<td colspan="4">Seasons Average: ${totalSeasons/series.length}</td>`;