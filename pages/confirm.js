import React, {useEffect, useState} from 'react'
// react arrow function component
import tw from "tailwind-styled-components";
import Map from './components/Map';

const confirm = () => {
const  [ pickUpCoordinates, setPickupCoordinates ] = useState()
const [dropOffCoordinates, setDropOffCoordinates] = useState()

 const getPickupCoordinates = () => {
     const pickUp = "Santa Monica"

     fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA",
                limit:1
            })
     )
     .then(response => response.json())
     .then(data => {
         console.log(pickUp)
         setPickupCoordinates(data.features[0].center)
     } )
 }

   const getDropOffCoordinates = () => {
    const dropOff = "Chicago";

    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?`+
           new URLSearchParams({
               access_token: "pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA",
               limit:1
           })
    )
    .then(response => response.json())
    .then(data => {
        console.log("dropOff")
        setDropOffCoordinates(data.features[0].center)
    } )
}
   console.log(pickUpCoordinates);
   console.log(dropOffCoordinates)

    useEffect(() => {
         getPickupCoordinates();
         getDropOffCoordinates();
    }, [])

    return (
        <Wrapper>
            <Map 
               pickUpCoordinates={pickUpCoordinates}
               dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
            
            </RideContainer>

        </Wrapper>
    )
}

export default confirm


const Wrapper = tw.div`
   flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1
`
