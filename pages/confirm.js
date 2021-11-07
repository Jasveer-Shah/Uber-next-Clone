import React, {useEffect, useState} from 'react'
// react arrow function component
import tw from "tailwind-styled-components";
import Map from './components/Map';
import  {useRouter} from "next/router";
import RideSelector from './components/RideSelector';
import Link from 'next/link';
const confirm = () => {
    const router  = useRouter();
    const {pickUp, dropOff} = router.query;
    console.log("pickUp", pickUp);
    console.log("DropOff", dropOff);

const  [ pickUpCoordinates, setPickupCoordinates ] = useState([0, 0])
const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0])

 const getPickupCoordinates = (pickUp) => {

    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA",
                limit:1
            })
     )
     .then(response => response.json())
     .then(data => {
        //  console.log(pickUp)
         setPickupCoordinates(data.features[0].center)
     } )
 }

   const getDropOffCoordinates = (dropOff) => {
  

    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?`+
           new URLSearchParams({
               access_token: "pk.eyJ1IjoidGFsa2phc3ZlZXIiLCJhIjoiY2tzbDB0OHhxMnN5OTMwbjVqNXE1amVpbiJ9.xO3wVJ1H6z8VkAFvGJw1AA",
               limit:1
           })
    )
    .then(response => response.json())
    .then(data => {
        console.log(dropOff)
        setDropOffCoordinates(data.features[0].center)
    } )
}
   console.log(pickUpCoordinates);
   console.log(dropOffCoordinates)

    useEffect(() => {
         getPickupCoordinates(pickUp);
         getDropOffCoordinates(dropOff);
    }, [pickUp, dropOff])

    return (
        <Wrapper>
                <Link href="/search">
              <ButtonContainer>
                  <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
              </ButtonContainer>
              </Link>
            <Map 
               pickUpCoordinates={pickUpCoordinates}
               dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                    <RideSelector 
                               pickUpCoordinates={pickUpCoordinates}
                               dropOffCoordinates={dropOffCoordinates}
                    />
                    

                    <ConfirmButtonContainer>
                        <ConfirmButton>
                             Confirm UberX
                        </ConfirmButton>
                    </ConfirmButtonContainer>
            </RideContainer>

        </Wrapper>
    )
}

export default confirm


const Wrapper = tw.div`
   flex h-screen flex-col
`

const RideContainer = tw.div`
  flex  flex-1 flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
   border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ButtonContainer = tw.div`
  h-14 w-2/12 rounded-full bg-gray-200   absolute mt-2 ml-2 z-10 
`
const BackButton = tw.img`
    rounded-full h-14 bg-white  cursor-pointer shadow-md
`