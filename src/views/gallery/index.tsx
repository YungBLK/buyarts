// packages
import React from "react";
import Button from "../../components/Button";
import FeaturedArtworks from "../../containers/FeaturedArtworks";

// parts
import Panel from "../../containers/Panel";
import SearchArtists from "../../containers/SearchArtists";

const artworks = [{}, {}, {}, {}, {}];

function Gallery() {
    return (
        <>
        <Panel title="Art Gallery" />
        <SearchArtists /> 
        <div className="section-title">
            <h2 className="title">Featured Artworks</h2>
            <Button type="button" buttonClass="cta-primary" text="View All" />
        </div>

        <div className="wrapper">
        {  artworks.map(() => {
            return <FeaturedArtworks title="2 pieces" subtitle="Lilla Hazlett" />
        })
        }
        </div>
        
    
        <div className="section-title">
            <h2 className="title">Top Artists</h2>
            <Button type="button" buttonClass="cta-primary" text="View All" />
        </div>

        <div className="wrapper">
        {  artworks.map(() => {
            return <FeaturedArtworks title="2 pieces" subtitle="Lilla Hazlett" />
        })
        }
        </div>
        
    

        <div className="section-title">
            <h2 className="title">Categories</h2>
            <Button type="button" buttonClass="cta-primary" text="View All" />
        </div>
        <div className="wrapper">
        {  artworks.map(() => {
            return <FeaturedArtworks title="2 pieces" subtitle="Lilla Hazlett" />
        })
        }
        </div>
        
        </>
    )
}

export default Gallery;
