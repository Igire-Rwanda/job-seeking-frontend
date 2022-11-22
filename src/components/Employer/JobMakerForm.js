import React,{useState} from 'react'
import{Box,TextField ,Button,MenuItem} from '@mui/material'



  const Form = ()=> {
    const [inputs, setInputs] = useState({
 firstname: "",
 lastname: "",
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
    value: 'High school',
    label: 'Home'
  },
  {
    value: 'diploma',
    label: 'Remote'
  },
 
{
  value: 'under graduate',
  label: 'Office'
}

]

const [firstname,setFname]=useState()
const [lastname,setLname]=useState()
const [desc,setDesc]=useState()
const [qwo,setQwo]=useState()
const [lang,setLang]=useState()
const [attach,setAttach]=useState()




const [selectDegree, setSelectDegree] = useState('high shool')
const handleChange = (event) => {
  setSelectDegree(event.target.value);
};


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
  name='firstname'

  onChange={(e)=>setFname(e.target.value)}
  label="Job Title"
  variant="outlined"
/>

      </div>
      <div>

      <TextField
          id="standard-textarea"
          label="Job Description"
          type="text"
          multiline
          variant="standard"
          onChange={(e)=>setDesc(e.target.value)}
          
      
        />
</div>

<div>
<TextField
          id="standard-textarea"
          label="Company decription"
          type="text"
          multiline
          variant="standard"
          onChange={(e)=>setQwo(e.target.value)}
          
        />
</div>

<div>



<TextField
   id="outlined-basic"
    label="company website"
   
    onChange={(e)=>setLang(e.target.value)}
    type="text"
    variant="outlined"
    autoComplete="current-password"
  />
       

</div>

<div>
<TextField
    id="outlined-select-currency"
    select
    label="Vacancy type"
    name='diplome'
    
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

{/* <div className='file'>
 <input type='file' placeholder="upload image"


  />
</div> */}



<div className='buto'>
<Button variant="contained" type='submit' onClick={()=> {
  console.log({firstname,lastname,desc,qwo,lang,attach})
}}>
 Apply
</Button>
</div>
    </Box>
    </form>
    </div>
  );
}
export default Form