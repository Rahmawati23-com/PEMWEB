import { employees, columnNames } from "./data.js";
import {formatRupiah, calculateTotalSalary} from "./function.js";

const columnNamesRow = document.getElementById('column-names');

columnNames.forEach(columnNames => {
    const th = document.createElement('th');
    th.innerText = columnNames;
    columnNamesRow.appendChild(th);
});

const tableBody = document.getElementById ('table-body')

employees.forEach ((employees, index) => {
    calculateTotalSalary(employees)

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${employees.id}</td>
    <td>${employees.name}</td>
    <td>${employees.position}</td>
    <td>${employees.isMarried ? "menikah" : "belum"}</td>
    <td>${employees.religion}</td>
    <td>${employees.gajiPokok}</td>
    <td>${employees.TunjanganJabatan}</td>
    <td>${employees.bpjs}</td>
    <td>${employees.tunjanganKeluarga}</td>
    <td>${employees.zakat}</td>
    <td>${employees.gajibersih}</td>
    `

    tableBody.appendChild(tr);
})