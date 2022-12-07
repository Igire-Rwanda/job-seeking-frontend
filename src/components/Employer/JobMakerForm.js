import React,{useState,useEffect} from 'react'
import{Box,TextField ,Button,MenuItem} from '@mui/material';
import {useDispatch,useSelector} from "react-redux";
import {jobAction} from "../../redux/jobPost/action";
import LoadingButton from '@mui/lab/LoadingButton';
import {useNavigate} from "react-router-dom"


  const Form = ()=> {
    const [inputs, setInputs] = useState({
 companyLogo: "",
 jobDeadLine: "",
 email: "",
 phone: "",
 password: "",
 confpassword:""
    })
  


const handleSubmit = (e) => {
  e.preventDefault()

  console.log(inputs);
}


const degree = [
  {
    value: 'office',
    label: 'Office'
  },
  {
    value: 'remote',
    label: 'Remote'
  },
 
{
  value: 'parttime',
  label: 'PartTime'
},
{
  value: 'fulltime',
  label: 'FullTime'
}

]

const [companyLogo,setcompanyLogo]=useState()
const [jobDeadLine,setjobDeadLine]=useState()
const [jobTitle,setjobTitle]=useState()
const [companyName,setcompanyName]=useState()
const [jobDescription,setjobDescription]=useState()
const [companyWebsite,setCompanyWebsite]=useState()
const [jobRequirements,setJobRequirements]=useState()
const [emplomentMode,setEmplomentMode]=useState()




const [selectDegree, setSelectDegree] = useState('home','remote','parttime','fulltime')
const handleChange = (event) => {
  setSelectDegree(event.target.value);
};
const navigate=useNavigate();
const dispatch=useDispatch();
const {token,isFetching} = useSelector((state)=>state?.job);

useEffect(()=>{
  if(token){
    navigate("/");
  }
},[token])
const jobCreate=()=>{
  jobAction({companyLogo,jobDeadLine,jobTitle,companyName,jobDescription,companyWebsite,jobRequirements})(dispatch)
}


  return (
    <div className='container'>

      
        <h1> FORM APPLICATION</h1>
    <form onSubmit={handleSubmit}>
    
    <Box className='box'  
 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '27ch' ,marginLeft: "80px"},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
      id="outlined-basic"
  // helperText="Please enter your First name"
  name='companyLogo'
  type="file"

  onChange={(e)=>setcompanyLogo(e.target.value)}
  
  variant="outlined"
  helperText="Upload your logo Here"
/>

      </div>
      <div>

      <TextField
          id="outlined-basic"
          type="date"
          variant="outlined"
          onChange={(e)=>setjobDeadLine(e.target.value)}
          name="jobDeadLine"
          helperText="Enter Job DeadLine"

      
        />
</div>

<div>



<TextField
   id="outlined-basic"
    label="Job Title"
    onChange={(e)=>setjobTitle(e.target.value)}
    type="text"
    variant="outlined"
   name='jobTitle'
  />
       

</div>

<div>
<TextField
         id="outlined-basic"
          label="Company Name"
          type="text"
          name='companyName'
          variant="outlined"
          onChange={(e)=>setcompanyName(e.target.value)}
          
        />
</div>

<div>



<TextField
    id="standard-textarea"
    label="Job Description"
   
    onChange={(e)=>setjobDescription(e.target.value)}
    type="text"
    multiline
    variant="standard"
    name='jobDescription'
   
  />
       

</div>



{/* <div className='file'>
 <input type='file' placeholder="upload image"


  />
</div> */}




<div>



<TextField
   id="outlined-basic"
    label="Company Website"
   
    onChange={(e)=>setCompanyWebsite(e.target.value)}
    type="text"
    variant="outlined"
    name='companyWebsite'
   
  />
       

</div>
<div>



<TextField
     id="standard-textarea"
    label="Job Requirements"
   
    onChange={(e)=>setJobRequirements(e.target.value)}
    type="text"
    multiline
    variant="standard"
    name='jobRequirements'
   
  />
       

</div>


<div>
<TextField
    id="outlined-select-currency"
    select
    label=" Emploment Mode"
    name='emplomentMode'
    
    onChange={handleChange}
    value={selectDegree}

    >
    {degree.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
 </TextField>
</div> 

<div className='buto'>
<LoadingButton loading={isFetching} variant="contained" type='submit' onClick={()=> {
  jobCreate()
  console.log({companyLogo,jobDeadLine,jobTitle,companyName,jobDescription,companyWebsite,jobRequirements,emplomentMode})
}}>
 Apply
</LoadingButton>
</div>
    </Box>
    </form>
    </div>
  );
}
export default Form