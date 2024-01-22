'use client';

import Image from 'next/image';
import Link from 'next/link';
import './table.css';

import { useEffect } from 'react';
import { allSagas } from './allSagas';

const check = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>`;

export default function table() {

    useEffect(()=>{
        const tables_container = document.getElementById('tables_container');
        tables_container.innerHTML = '';

        allSagas.forEach(saga=> {
            const div = document.createElement('div');
            div.setAttribute('id', (saga.slug));

            const table = document.createElement('table');

            const thead = document.createElement('thead');
            const theadTitle = document.createElement('tr');
            const theadTitleRow = document.createElement('th');
            theadTitleRow.innerText = saga.name;
            theadTitleRow.setAttribute('colSpan', 4);
            theadTitle.appendChild(theadTitleRow);
            thead.appendChild(theadTitle);

            const theadRow = document.createElement('tr');
            const theadCol1 = document.createElement('th');
            theadCol1.innerText = 'Nombre';
            const theadCol2 = document.createElement('th');
            theadCol2.innerText = 'Año';
            const theadCol3 = document.createElement('th');
            theadCol3.innerText = 'Sistema';
            const theadCol4 = document.createElement('th');
            theadCol4.innerText = 'Jugado';
            theadRow.appendChild(theadCol1);
            theadRow.appendChild(theadCol2);
            theadRow.appendChild(theadCol3);
            theadRow.appendChild(theadCol4);
            thead.appendChild(theadRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');

            saga.games.forEach(game => {
                const name = game["GAME"];
                const year = game["YEAR"];
                const system = game["SYSTEM"];
                const played = game["PLAYED"];
                const newRow = document.createElement('tr');
                const col1 = document.createElement('td');
                col1.innerHTML = name;
                const col2 = document.createElement('td');
                col2.innerHTML = year;
                const col3 = document.createElement('td');
                col3.innerHTML = system;
                const col4 = document.createElement('td');
                col4.innerHTML = played == "true" ? check : "";
        
                newRow.appendChild(col1);
                newRow.appendChild(col2);
                newRow.appendChild(col3);
                newRow.appendChild(col4);
        
                tbody.appendChild(newRow);

            });

            table.appendChild(tbody);
            div.appendChild(table);
            tables_container.appendChild(div);
        });
    },[]);

    return(
        <main>
            <section className='table-section'>
            <h2 className='table-h2'>TODAS LAS SAGAS.</h2>
                <article id='tables_container' className='first-article'>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Año</th>
                                <th>Sistema</th>
                                <th>Jugado</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">

                        </tbody>
                    </table> */}
                </article>
            </section>
        </main>
    );
}