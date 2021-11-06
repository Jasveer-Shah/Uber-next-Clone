import { useEffect } from 'react';
import React from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA';
const Map = () => {

    useEffect(() => {
   
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
        });

    return (
        <Wrapper id="map">
         
        </Wrapper >
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`


