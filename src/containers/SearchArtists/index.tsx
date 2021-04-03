// packages
import React from "react";

// parts
import Button from "../../components/Button";

// styles
import "./searchArtists.scss"


function SearchArtists() {
    return (
        <div className="search-wrapper">
            <div className="search-input-wrapper">
                <input className="search-input" type="text" placeholder="Search by name, artist" />
            </div>
            <div className="search-input-wrapper">
                <input className="search-input" type="text" placeholder="Choose category" />
            </div>
            <Button text="Search" buttonClass="cta-secondary" type="button" />
        </div>
    );
}

export default SearchArtists;
