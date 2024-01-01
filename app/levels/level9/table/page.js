'use client';

import Image from 'next/image';
import Link from 'next/link';
import './table.css';

import { currentSagaId } from '../page';
import { punchOut } from './allSagas';
import { useEffect } from 'react';
// import { useState } from 'react';

const allSagas = [punchOut];
console.log('allSagas',allSagas);

console.log('currentSagaId',currentSagaId);

const currentSaga = allSagas.find((element)=> element["id"] = currentSagaId);

console.log('currentSaga',currentSaga);

export default function table() {

    // const [saga, setSaga] = useState("");
    // const [sagaId, setSagaId] = useState("");

    useEffect(()=>{
        const tableBody = document.getElementById('tableBody');

        tableBody.innerHTML = '';

        // setSaga(currentSaga);
        // setSagaId(currentSagaId);

        currentSaga["games"].forEach(element=> {
            const name = element["name"];
            const year = element["year"];
            const system = element["system"];
            const played = element["played"];
    
            const newRow = document.createElement('tr');
            const col1 = document.createElement('td');
            col1.innerHTML = name;
            const col2 = document.createElement('td');
            col2.innerHTML = year;
            const col3 = document.createElement('td');
            col3.innerHTML = system;
            const col4 = document.createElement('td');
            col4.innerHTML = played ? "Sí" : "No";
    
            newRow.appendChild(col1);
            newRow.appendChild(col2);
            newRow.appendChild(col3);
            newRow.appendChild(col4);
    
            tableBody.appendChild(newRow);

            console.log('done');
        });
    },[]);

    return(
        <main>
            <table>
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
            </table>
        </main>
    );
}