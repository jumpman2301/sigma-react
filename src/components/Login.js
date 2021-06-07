import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';


export const Login = () => {

    return (
        <div className="p-grid">
            <div className="p-col-12 p-md-6">
                <div className="card">

                <h5>Login</h5>
                    <div className="p-field p-fluid">
                        <label htmlFor="name1">Username: </label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="p-field p-fluid">
                        <label htmlFor="email1">Password: </label>
                        <InputText id="email1" type="password" />
                    </div>

                    <h5></h5>
                    <Button label="Login" className="p-mr-2 p-mb-2 p-buttom-center"></Button>
                    <Button label="Register" className="p-mr-2 p-mb-2" ></Button>
                    <Button label="Forgot your password?" className="p-button-link p-mb-2 p-mr-2"></Button>
                </div>
            </div>
        </div>
    )
}
