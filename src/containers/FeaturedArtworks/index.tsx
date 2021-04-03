// packages
import React from "react";

// parts
import Button from "../../components/Button";

// styles
import "./featuredArtworks.scss"
import artwork from "../../assets/images/artwork.jpeg"


interface FeaturedArtworkInterface {
    title: string;
    subtitle: string;
}

function FeaturedArtworks(props: FeaturedArtworkInterface) {
    const { title, subtitle } = props;
    return (
        <div className="artwork-wrapper">
            <div className="image-wrapper">
                <img src={artwork} alt=""/>
            </div>
            <div className="artwork-body">
                <h1>{ title }</h1>
                <p>{ subtitle }</p>
            </div>
        </div>
    );
}

export default FeaturedArtworks;
