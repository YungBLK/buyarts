// packages
import React, { useState } from "react";

// parts
import Button from "../../components/Button";

// styles
import "./searchArtists.scss"

// types
import { SearchArtistsInterface } from "./types";

function SearchArtists() {
    // states
    const [searchArtistsInput, setSearchArtistsInput] = useState<SearchArtistsInterface>({
        artistName: "",
        artsCategory: "", 
    });

    // form submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert('Um artista foi procurado: ' + searchArtistsInput.artistName + "da categoria: " + searchArtistsInput.artsCategory);
        event.preventDefault();
    }

    // inputs on change event
    const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchArtistsInput({
            artistName: event.target.value,
            artsCategory: searchArtistsInput.artsCategory
        });
    }

    const handleArtCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchArtistsInput({
            artistName: searchArtistsInput.artistName,
            artsCategory: event.target.value
        });
    }


    return (
            <form className="search-wrapper" onSubmit={(event) => handleSubmit(event)}>
            <div className="search-input-wrapper">
                <input 
                    className="search-input"
                    name="artistName"
                    value={searchArtistsInput.artistName}
                    onChange={handleArtistNameChange}
                    type="text"
                    placeholder="Search by name, artist" />
            </div>
            <div className="search-input-wrapper">
                <input 
                    className="search-input"
                    name="ArtsCategory"
                    value={searchArtistsInput.artsCategory}
                    onChange={handleArtCategoryChange}
                    type="text"
                    placeholder="Choose category" />
            </div>
            <Button text="Search" buttonClass="cta-secondary" type="submit" />
            </form>
    );
}

export default SearchArtists;
