import React, {useState} from 'react'
import tw from "tailwind-styled-components";
import Link from "next/link";

function Search() {
 const [pickUp, setPickUp] = useState("");
 const [dropOff, setDropOff] = useState("");

 console.log(pickUp);
 console.log(dropOff);

    return (
        <Wrapper>
              <Link href="/">
              <ButtonContainer>
                  <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
              </ButtonContainer>
              </Link>
           


             <InputContiner>
                    <FormToIcons>
                           <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                           <Line src="https://img.icons8.com/ios-filled/50/9CA3AF/vertical-line.png"/>
                           <Square src="https://img.icons8.com/windows/32/000000/square-full.png"/>
                    </FormToIcons>
             
                
                    <InputBoxes>
                          <Input 
                          value={pickUp}
                          onChange={(e) => setPickUp(e.target.value)}
                          placeholder="Enter pickup location" />
                          <Input 
                          value={dropOff}
                          onChange={(e) => setDropOff(e.target.value)}
                            placeholder="Where to"
                          />
                    </InputBoxes>

                    <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>

             </InputContiner> 
             {/* Saved places */}

             <SavedPlaces>
                 <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                 saved places
             </SavedPlaces>
             
             <Link href={{    // query parameters
                 pathname: "/confirm",
                 query: {
                     pickup: {pickUp},
                     dropoff: {dropOff}
                 }
             }}>
             <ConfirmButtonContainer>
                  Confirm Locations
             </ConfirmButtonContainer>
             </Link>
           
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
     bg-gray-200 h-screen  
`
const ButtonContainer = tw.div`
     bg-white px-4
`

const BackButton = tw.img`
   h12 cursor-pointer
`

const InputContiner = tw.div`
     bg-white flex items-center px-4 mb-2
`

const FormToIcons = tw.div`
   w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
  h-2.5
`

const Line = tw.img`
   h-10
`

const Square = tw.img`
   h-3 
`

const InputBoxes = tw.div`
  flex flex-col flex-1 mr-4
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-md p-2 outline-none border-none
`

const PlusIcon = tw.img`
 w-10 h-10   bg-gray-200 rounded-full ml -3
   `

   const SavedPlaces = tw.div`
      flex items-center bg-white px-4 py-2
   `

   const StarIcon = tw.img`
      bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
   `

   const ConfirmButtonContainer = tw.div`
       bg-black text-white text-center mt-2 mx-4 p-3 text-2xl cursor-pointer
   `
 