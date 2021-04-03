// packages
import React from 'react';

// styles
import "./panel.scss"

// parts
import Button from '../../components/Button';

function Panel() {
    return (
        <main className="panel-wrap">
            <div className="panel-content">
                <h2 className="panel-title">Art is beautiful, Art is life,<br /> Buy Arts</h2>
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
