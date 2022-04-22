import {series} from './data.js';
import {Serie} from './series.js';

let tablaSeries: HTMLElement = document.getElementById("series")!;
let tarjeta : HTMLElement = document.getElementById("tarjeta")!;

const nombre_series : HTMLElement[] = [];

let totalSeasons : number = 0;

function cargarSeries(series: Serie[]): void{
    series.forEach((serie) => {
        let elemento = document.createElement("tr");
        elemento.innerHTML = `<td>${serie.id}</td>
        <th>${serie.title}</th>
        <td>${serie.productor}</td>
        <td>${serie.seasons}</td>`
        totalSeasons += serie.seasons;
        tablaSeries.appendChild(elemento);
        nombre_series.push(elemento);
    });
}


cargarSeries(series);
document.getElementsByTagName("tr")[series.length + 1].innerHTML = `<td colspan="4">Seasons Average: ${totalSeasons/series.length}</td>`;

nombre_series.forEach((elemento) => {
    elemento.onclick = () => crearTarjeta(elemento.children[1].textContent!, series);
});


function crearTarjeta(nombre_Serie: string, series: Serie[]): void{
    series.forEach((serie) => {
        if(serie.title == nombre_Serie){
            tarjeta.innerHTML = `<img src="${serie.image}">
            <div class="card-body">
            <h5 class="card-title">${serie.title}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.link}" target="_blank">${serie.link}</a> 
            </div>`
        }
    });
}