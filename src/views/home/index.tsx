import React from 'react';

// parts


import Panel from '../../containers/Panel';
import SearchArtist from "../../containers/SearchArtists";
import Button from "../../components/Button";
import FeaturedArtworks from "../../containers/FeaturedArtworks"


// assets
import "./home.scss"



const artworks = [{}, {}, {}, {}, {}];
 
function HomePage() {
    return (
        <>
        <Panel />
        <SearchArtist /> 
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
    );
}


export default HomePage;
