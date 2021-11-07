import React, {useEffect} from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from "next/router"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import {auth, provider} from '../firebase'

const Login = () => {
     const router = useRouter();

     useEffect(() => {
         onAuthStateChanged(auth, user => {
             if(user) {
                 router.push('/')
             }
         })
     })

    return (
        <Wrapper>
            <UberLogo 
                 src="https://i.ibb.co/ZMhy8ws/uber-logo.png"
                />
             <Title>Login to access your account</Title>   
             <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
        </Wrapper> 
          )
}

export default Login


const Wrapper = tw.div`
    h-screen flex flex-col bg-gray-200  p-4
`

const SignInButton = tw.button`
 bg-black text-white text-center py-4 mt-8 w-full self-center 
`

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`

const Title = tw.div`
    text-xxl pt-4 text-gray-500
`

const HeadImage = tw.img`

object-contain w-full
`