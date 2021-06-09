import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

export const EmptyPage = () => {

    return (
        <div className="p-grid">
            <div className="p-col-12 p-md-6">
                <div className="card">

                <h5>Register</h5>
                    <div className="p-field p-fluid">
                        <label htmlFor="username">Username: </label>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="email">Email: </label>
                        <InputText id="email" type="text" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="password">Password: </label>
                        <InputText id="password" type="password" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="password">Confirm Password: </label>
                        <InputText id="password" type="password" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="name">Nombre: </label>
                        <InputText id="name" type="text" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="lastname1">Primer Apellido: </label>
                        <InputText id="lastname1" type="text" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="lastname2">Segundo Apellido: </label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <h5></h5>
                    <Button label="Register" className="p-mr-2 p-mb-2" ></Button>
                </div>
            </div>
        </div>
    )
}
