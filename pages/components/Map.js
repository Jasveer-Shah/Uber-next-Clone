import { useEffect } from 'react';
import React from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA';
const Map = (props) => {
     // console.log(props)
    useEffect(() => {  // this useeffect gonna initialize the map
   
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
          
        if(props.pickUpCoordinates){

            addToMap(map, props.pickUpCoordinates);   //function callback
        } if (props.dropOffCoordinates){
            addToMap(map, props.dropOffCoordinates)
        }

        if(props.pickUpCoordinates && props.dropOffCoordinates){

            map.fitBounds([
                   props.pickUpCoordinates,
                   props.dropOffCoordinates
            ], {
                padding: 60
            });
        }
        }, [props.pickUpCoordinates, props.dropOffCoordinates]);

        const addToMap = (map, coordinates) => {
            const marker1 = new mapboxgl.Marker()
           .setLngLat(coordinates)
           .addTo(map);
        }

      


    return (
        <Wrapper id="map">
         
        </Wrapper >
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`


