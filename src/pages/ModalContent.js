import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { link, NavLink } from 'react-router-dom'
import '../Views/jobs2.css'
import CloseIcon from '@mui/icons-material/Close';




export default function ModalContent({onClose}) {
    return (
        <>
        <Box sx={{ width: "80%", padding:4, paddingTop:10, height:"100%", backgroundColor: "rgba(255, 255, 255)", margin:"auto" }}>
            <div className="flex justify-between">
            <div>
               <Typography variant="h4" gutterBottom >
                Job Title
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                Dec 12th, 2021
            </Typography><br/> 
            </div>
            <div>
            <CloseIcon style={{width: 50, height: 50, cursor: "pointer"}} onClick={onClose}/>
            </div>
            </div>
            
            <Typography variant="h6" gutterBottom sx={{paddingBottom:20}}>
                Job Description
            </Typography><br/>
            <Typography variant="body1" gutterBottom>
                We are hiring for a highly skilled Backend Developer
                professional to join our team in Rwanda. If you're excited to be part of
                an excellent startup team, AmaliTech is a great place to grow your career.
                You'll be glad you applied to AmaliTech.
            </Typography><br/>

            <Typography variant="h6" gutterBottom>
                Responsibilities
            </Typography><br/>
            <Typography variant="body1" gutterBottom>
                <ul>
                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                    <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>
                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                    <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                    <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                    <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                    <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>

                </ul>
            </Typography> <br/>

            <Typography variant="h6" gutterBottom>
            Job Qualifications
            </Typography><br/>
            <Typography variant="body1" gutterBottom>
            In order to be eligible, one must satisfy one of the following two:
                    Minimum of  a Bachelor’s Degree Computer Science, Computer/Software Engineering/ IT OR
                    A Bachelor’s Degree in STEM field with proficiency in at least one of the programming languages C++, Java or JavaScript
                    Must have taken courses in Data Structures, Algorithms, Object Oriented Programming during their undergraduate studies
                    Strong interest and temperament for Computer Programming and Mathematics is a must
                    Previous software development experience is an advantage
            </Typography> <br />

            <Typography variant="button" display="block" gutterBottom sx={{ display: "flex", justifyContent:"center"}}>
                <NavLink to='/SignUp'><button className="btn4">APPLY HERE</button></NavLink>
            </Typography>
        </Box>
        
        </>
        
    );
}