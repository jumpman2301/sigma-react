import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import classNames from 'classnames';


export const HomePage = () => {

    const customEvents = [
        {
            image: 'imagen.jpg',
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            height: 500
        }
    ];

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`assets/demo/images/product/${item.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={700} className="p-shadow-12" />}
            </Card>
        );
    };

    const customizedMarker = (item) => {
        return (
            <div className="p-grid texto">
        </div>
        
        );
    };

    return <div className="p-grid homepage">
        <div className="p-col-12">
            <div className="card">
                <h1>PuraVida Rooms - Management System for Hotels</h1>
                <Timeline value={customEvents} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
        </div>
    </div>
}