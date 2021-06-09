import React, { useState, useEffect } from 'react';
import { Panel } from 'primereact/panel';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProductService } from '../service/ProductService';
import { EventService } from '../service/EventService';




export const Dashboard = () => {

    const [tasksCheckbox, setTasksCheckbox] = useState([]);
    const [dropdownCity, setDropdownCity] = useState(null);
    const [events, setEvents] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const productService = new ProductService();
        const eventService = new EventService();
        productService.getProductsSmall().then(data => setProducts(data));
        eventService.getEvents().then(data => setEvents(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onTaskCheckboxChange = (e) => {
        let selectedTasks = [...tasksCheckbox];
        if (e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        setTasksCheckbox(selectedTasks);
    };

    return (
        <div className="p-grid p-fluid dashboard">
            <div className="p-col-12 p-lg-24">
                <div className="card">
                    <h1 style={{ fontSize: '16px' }}>My Hotels</h1>
                    <DataTable value={products} className="p-datatable-customers" rows={5} style={{ marginBottom: '20px' }} paginator>
                        <Column header="Logo" body={(data) => <img src={`assets/demo/images/product/${data.image}`} alt={data.image} width="50" />}></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="price" header="Price" sortable body={(data) => formatCurrency(data.price)}></Column>
                        <Column header="View" body={() => (
                            <>
                                <Button icon="pi pi-search" type="button" className="p-button-success p-mr-2 p-mb-1"></Button>
                                <Button icon="pi pi-times" type="button" className="p-button-danger p-mb-1"></Button>
                            </>
                        )}></Column>
                    </DataTable>
                </div>
            </div>
            <div className="p-col-12 p-lg-6">
            </div>
        </div>
    );
}
