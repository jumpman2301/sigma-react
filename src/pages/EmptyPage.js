import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../service/CountryService';
import { SplitButton } from 'primereact/splitbutton';
    
    export const EmptyPage = () => {
    
        const [countries, setCountries] = useState([]);
        const [filteredCountries, setFilteredCountries] = useState(null);
        const [value1, setValue1] = useState('');
        const [value2, setValue2] = useState('');
        const [value3, setValue3] = useState(null);
        const [value4, setValue4] = useState('');
        const [value5, setValue5] = useState('');
        const [value6, setValue6] = useState('');
        const [value7, setValue7] = useState('');
        const [value8, setValue8] = useState('');
        const [value9, setValue9] = useState([]);
        const [value10, setValue10] = useState(null);
    
        const cities = [
            { name: 'San José', code: 'SJ' },
            { name: 'Alajuela', code: 'AL' },
            { name: 'Heredia', code: 'HE' },
            { name: 'Cartago', code: 'CA' },
            { name: 'Limon', code: 'LI' },
            { name: 'Puntarenas', code: 'PN' },
            { name: 'Guanacaste', code: 'GN' },
        ];
    
        useEffect(() => {
            const countryService = new CountryService();
            countryService.getCountries().then((countries) => {
                setCountries(countries);
            });
        }, []);
    
        const searchCountry = (event) => {
            // in a real application, make a request to a remote url with the query and
            // return filtered results, for demo we filter at client side
            const filtered = [];
            const query = event.query;
            for (let i = 0; i < countries.length; i++) {
                const country = countries[i];
                if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filtered.push(country);
                }
            }
            setFilteredCountries(filtered);
        };
    
        return (
            <div className="p-grid floatlabel-demo">
                <div className="p-col-12">
                    <div className="card p-fluid">
                        <h1>Registro de Usuario.</h1>
                        <h2>Por favor ingrese sus datos.</h2>
                        <p><strong>*Todos los campos son obligatorios.</strong></p>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
                                        <label htmlFor="inputtext">Nombre de Usuario</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="password" type="password"/>
                                        <label htmlFor="inputtext">Password</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="password" type="password"/>
                                        <label htmlFor="inputtext">Confirm Password</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="password" />
                                        <label htmlFor="inputtext">Nombre</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="password" />
                                        <label htmlFor="inputtext">Primer Apellido</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="password" />
                                        <label htmlFor="inputtext">Segundo Apellido</label>
                                    </span>
                                </div>
                            </div>
    
                            <div className="p-col-12 p-md-6">
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText type="text" id="inputtext"/>
                                        <label htmlFor="inputtext">Correo electrónico</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <Calendar inputId="calendar" value={value7} onChange={(e) => setValue7(e.value)}></Calendar>
                                        <label htmlFor="calendar">Fecha de Nacimiento</label>
                                    </span>
                                </div>
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <Dropdown id="dropdown" options={cities} value={value8} onChange={(e) => setValue8(e.value)} optionLabel="name"></Dropdown>
                                        <label htmlFor="dropdown">Provincia de Residencia</label>
                                    </span>
                                </div>
                                <h5></h5>
                                <Button label="Register" className="p-mr-2 p-mb-2" ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    