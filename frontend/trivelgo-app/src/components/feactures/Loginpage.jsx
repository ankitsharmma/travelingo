import React from 'react'
import styled from 'styled-components'
import colors from '../Styledcolor/color'
import backgrounimg from '../../assets/loginbackgroundimg.jpg'
// import logoimg from '../../assets/traveling-logo1.png'
import { FaMountainSun } from "react-icons/fa6";


function Loginpage() {
    const breakpoints = {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
      };

    const Button = styled.button({
        width:"100%",
        padding:"0.5rem",
        backgroundColor:`${colors.loginPrimary}`,
        color:`${colors.loginText}`,
        border:"none",
        borderRadius:"5px",
        cursor:"pointer",
        transition:"all 0.3s ease",
        marginBottom:"1rem",
        fontWeight:"bold",
        fontSize:"12px",
        textTransform:"capitalize",
'&:hover':{
backgroundColor:`${colors.loginAccent}`,

    }
    ,
     // Media query for mobile devices
  [`@media (max-width: ${breakpoints.mobile})`]: {
    padding: '8px',
  },
}) ;
    const Container=styled.div({
      width:"100%",
        height:"100vh",
      
      
       
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(${backgrounimg})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        padding:"2rem",
        opacity:"0.90",
        filter: "brightness(1.3)",
        filter : "contrast(1.5)",
        filter : "grayscale(0.1)",
      
        // Media query for mobile devices
  [`@media (max-width: ${breakpoints.mobile})`]: {
    padding: '10px',
  },
  // Tablet styling
  ['@media ( (max-width: ${breakpoints.tablet})']: {
    padding: "20px",
  },

  // Desktop styling
  ['@media ( (max-width: ${breakpoints.desktop})']: {
    padding: "40px",
  },



        



  
    })  ;
    const LoginForm=styled.form({
        backgroundColor:    `${colors.loginBackground}`,
        padding:"2rem",
        borderRadius:"10px",
        boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        zIndex:"0",
        width:"400px",

        [`@media (max-width: ${breakpoints.mobile})`]: {
            width: '90%',
            padding: '15px',
          },
          [`@media (max-width: ${breakpoints.tablet})`]: {
            width: '250px',
            
          },


    })   
    const Title=styled.span({
        fontSize:"24px",
        color:`${colors.loginSecondary}`,
        fontWeight:"bold",
        marginBottom:"20px",
       
        textTransform:"uppercase",
        [`@media (max-width: ${breakpoints.mobile})`]: {
            fontSize: '20px',
          },

          [`@media (max-width: ${breakpoints.tablet})`]: {
            fontSize: '22px',
          },

   
        
        
    })    
    const Input=styled.input({
        width:"100%",
        padding:"0.6rem",
        marginBottom:"1rem",
        borderRadius:"5px",
        border:"none",
        
        "&:focus":{
            outline:"none",
           border: "none"
            
        },
        "&::placeholder":{
            color:`${colors.loginAccent}`,
            
        },
// Media query for mobile devices
[`@media (max-width: ${breakpoints.mobile})`]: {
    padding: '8px',
  },
        

    })
    const Logo = styled.img({
        width:"140px",
        height:"auto",
      marginTop:"0px",
      
      marginBottom:"0px",

    })



  return (
    <>
    <Container >
       
    <FaMountainSun style={{color:`${colors.loginSecondary}`}} size={40} /> <Title>Travelin-Go</Title>

   
    
<LoginForm>

<Input type="text" placeholder="Username" />
<Input type="password" placeholder="Password" />
<span style={{color:`${colors.loginSecondary}`}}>Forgot Password?</span>

<Button >Logout</Button>
    </LoginForm>

    </Container>
   
    </>
    
  )
}

export default Loginpage;
