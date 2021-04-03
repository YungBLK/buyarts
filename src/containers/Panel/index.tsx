// packages
import React from 'react';

// styles
import "./panel.scss"

// parts
import Button from '../../components/Button';

//types
import { PanelInterface } from "./types";

function Panel(props: PanelInterface) {
    return (
        <main className={`panel-wrap ${props.bg === "homepage" ? "panel-wrap-bg-1": "panel-wrap-bg-2"}`}>
            <div className="panel-content">
                <h2 className="panel-title">{props.title}</h2>
                <div className="panel-body">
                    <p>Browse our collection to find the masterpiece that you desire or <br />
                    Join us today to start selling.</p>
                </div>
                <div className="panel-actions">
                    <Button type="button" buttonClass="cta-secondary" text="Explore Artworks"/>
                    <Button type="button" buttonClass="cta-primary" text="Start selling"/>
                </div>
            </div>
        </main>
    );
}


export default Panel;
