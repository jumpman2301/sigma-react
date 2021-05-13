import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import classNames from 'classnames';


export const TimelineDemo = () => {

    const customEvents = [
        {
            date: '15/10/2020 10:30',
            color: '#DE697E',
            image: 'imagen.jpg'
        }
    ];

    const horizontalEvents = [
        '2020', '2021', '2022', '2023'
    ];


    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`assets/demo/images/product/${item.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={700} className="p-shadow-2" />}
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={classNames('marker-icon', item.icon)}></i>
            </span>
        );
    };

    return <div className="p-grid timeline-demo">
        <div className="p-col-12">
            <div className="card">
                <h1>PuraVida Rooms - Management System for Hotels</h1>
                <h5></h5>
                <Timeline value={customEvents} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
        </div>
    </div>
}