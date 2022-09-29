import * as React from "react";
import './FormValidation.css';
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IMaskInput } from "react-imask";
import { PropTypes } from "prop-types";
import { Avatar, Select } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import validator from 'validator'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    Input,
    MenuItem,
    Typography,
    Radio,
    RadioGroup,
    Grid,
} from "@mui/material";
// toast.configure()   


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+91(#00) 000-0000"
            definitions={{
                "#": /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function FormValidation({ fetchData }) {

    let navigate = useNavigate()

    function getWeeksAfter(date, amount) {     //datepicker
        return date ? date.add(amount, 'week') : undefined;
    }
    // const [values, setValues] = React.useState([null, null]);

    const [value, setValue] = React.useState([null, null]);
    console.log(value);
    // const [msg,setMsg] = useState('')
    const [emailError, setEmailError] = useState(<span style={{ color: "red", fontSize: '12px' }}>required field*</span>)

    const emailValidation = () => {
        const exp = /\S+@\S+\.\S+/
        if (exp.test(allValues.email)) {
            setEmailError('')
        } else if (!exp.test(allValues.email)) {
            setEmailError(<span style={{ color: "red", fontSize: '12px' }}>Invalid email</span>)
        }


        // if (validator.isEmail(allValues.email)) {
        //     setEmailError("valid email")
        // } else {
        //     setEmailError("enter valid email")
        // }

        // const regEx = /[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
        // if (regEx.test(allValues.email))  {
        //     setMsg("email is valid")
        // } else if  (!regEx.test(allValues.email) && allValues.email!= '') {
        //     setMsg("email is invalid")
        // } else {
        //     setMsg('');
        // }
    }

    const [allValues, setAllValues] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
        contact: "+91(100) 000-0000",
        country: "",
        gender: "",
        qualification: "",
        dob: "",
        wrkExp: [{ desig: "", joining: "", resign: "" }],
        timeshift: [{starttime: "",endtime: ""}],
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        allValues.date = { value }
        emailValidation()
        if (
            allValues.name
            && allValues.email
            && allValues.address && allValues.password && allValues.contact && allValues.country &&
            allValues.gender
            //   && allValues.qualification 
        ) {
            fetchData(allValues)
            navigate('/formdata')
            // && allValues.description && allValues.date
            // window.location.href="/formdata"
            // console.log(allValues.name,allValues.email,allValues.password);
        } else {
            alert('invalid!!!! missing data')
        }
    };

    const handleChange = (event) => {   //validation
        if(event.target.name=="dob"  ){
            if(event.target.value < '2020-05-11'){
                setAllValues({
                    ...allValues,
                    [event.target.name]: event.target.value,
                })

            }else {
                alert ("not eligible")
            }
        }  else{
            setAllValues({
            ...allValues,
            [event.target.name]: event.target.value,
        })

        }   
    };



    const handleExpChange = (e, index, ftype) => {
        let expValue = allValues.wrkExp
        expValue[index][ftype] = e.target.value

        if(ftype=='resign'){
          let joinVal=allValues.wrkExp.map(d=>d.joining) 
          if(expValue[index]['resign'] > joinVal) {
            expValue[index]['resign'] = e.target.value
            setAllValues({
                ...allValues,
                wrkExp: expValue,
            })
          }else {
            alert("Invalid entry ")
          }
        }
        else {
            setAllValues({
                ...allValues,
                wrkExp: expValue,
            })
        }
        console.log(allValues.wrkExp);
    };


    const getTimeValues =(e,index,ftype) => {
        const expValue = allValues.timeshift
        expValue[index][ftype] = e.target.value
        setAllValues({...allValues,timeshift:expValue})
        
    }

    // const handleData = (e, index) => {
    // const { name, value } = e.target
    // const list = [...wrkExp]
    // list[index][name] = value
    // setWrkExp(list)
    // }

    const addExp = () => {
        const expValue = allValues.wrkExp
        expValue.push({ desig: '', joining: "", resign: '' })
        setAllValues({
            ...allValues,
            wrkExp: expValue,
        });
    }

    const removeExp = (index) => {
        const expValue = allValues.wrkExp
        expValue.splice(index, 1)
        setAllValues({
            ...allValues,
            wrkExp: expValue,
        });
    }

    // const handleClick 


    // const buttonClicked= (name,email)=> {
    //     if (name == '' & email == '') {
    //         alert('values are empty')
    //     }else
    //     alert('values are added',name ,email)

    // }

    return (
        <div>
            <Container style={{ backgroundColor: "gray", padding: '100px' }}>
                <Box component="form" onSubmit={handleSubmit} style={{ border: "2px solid red", padding: 20, backgroundColor: "white" }}>
                    <div style={{ display: 'flex' }}>
                        <Avatar>D</Avatar>
                        <Typography variant="h6" marginLeft={2}>User-name</Typography>
                    </div>
                    <h2 style={{ textAlign: "center" }}>Registration Form</h2>


                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                id="name"
                                name="name"
                                label="Name"
                                value={allValues.name}
                                onChange={handleChange}
                                error={allValues.name ? false : true}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                fullWidth
                                isRequired
                                id="email"
                                label="Email Address"
                                name="email"
                                value={allValues.email}
                                onChange={handleChange}
                                error={allValues.email ? false : true}
                                autoFocus
                            />
                            {emailError}
                            {/* {msg} */}
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField
                                id="address"
                                name='address'
                                label="Address"
                                required
                                margin="normal"
                                value={allValues.address}
                                fullWidth
                                onChange={handleChange}
                            // multiline
                            // rows={3}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={allValues.password}
                                onChange={handleChange}
                                error={allValues.password ? false : true}
                            />
                        </Grid>
                        <Grid item sx={12} sm={6}>
                            <InputLabel htmlFor="formatted-text-mask-input">
                                Contact-Number
                            </InputLabel>
                            <Input
                                variant='contained'
                                value={allValues.contact}
                                onChange={handleChange}
                                name="contact"
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>

                            <FormControl fullWidth style={{ marginBottom: "6px" }}>
                                <InputLabel id="select-input">Country</InputLabel>
                                <Select
                                    // margin='normal'
                                    label="countries"
                                    name="country"
                                    multiline
                                    onChange={handleChange}
                                    value={allValues.country}
                                >
                                    <MenuItem value='India'>INDIA</MenuItem>
                                    <MenuItem value='Australia'>AUSTRALIA</MenuItem>
                                    <MenuItem value='Canada'>CANADA</MenuItem>
                                </Select>
                            </FormControl>
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl >
                                <FormLabel id="demo-row-radio-buttons-group-label">
                                    Gender
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="gender"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="Female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="Male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="Other"
                                        control={<Radio />}
                                        label="Other"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="date"
                                label="DOB"
                                name='dob'
                                type="date"
                                min=''
                                onChange={handleChange}
                                value={allValues.dob}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateRangePicker
                                    // disablePast
                                    value={values}
                                    startDate = {new Date('2020-08-08')}
                                    endDate = {new Date('2021-08-08')}
                                    // minDate={getWeeksAfter(value[0], 1)}
                                    onChange={(newValue) => {
                                        setValues(newValue);
                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps} />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>  */}
                        </Grid>
                        {allValues.timeshift.map((e,index) => (
                            <>
                            <TextField name='time' type='time' />
                            <TextField name='time' type='time'/>
                            </>
                        ))
    
                        }
                        
                        <Grid>

                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <FormControl fullWidth >
                                <InputLabel id="select-input">Qualification</InputLabel>
                                <Select
                                    // margin='normal'
                                    label="Qualification"
                                    onChange={handleChange}
                                    name='qualification'
                                    value={allValues.qualification}
                                >
                                    <MenuItem value='Highersecondary'>HIGHER SECONDARY</MenuItem>
                                    <MenuItem value='Undergraduate'>UNDER-GRADUATE</MenuItem>
                                    <MenuItem value='Postgraduate'>POST-GRADUATE</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> */}
                        {/* <Grid item xs={12} md={9}>
                <Select options={multiSelect}/>
              </Grid> */}

                        {/* <Grid item xs={4} md={6} >
                            <TextField
                                fullWidth
                                name='description'
                                label='Job-description'
                                value={allValues.description}
                                onChange={handleChange} />
                        </Grid> */}

                        {/* <Grid item xs={12} sm={6}>
                            <table style={{ border: "2px solid black" }}>
                                <tr style={{ border: "2px solid black" }}>
                                    <th style={{ border: "2px solid black" }}>Joining</th>
                                    <th style={{ border: "2px solid black" }}>Resign</th>
                                    <th style={{ border: "2px solid black" }}>Designation</th>
                                    <th style={{ border: "2px solid black" }}>Next</th>
                                </tr>

                                <tr>
                                    <td>aug 2</td>
                                    <td>sep 3</td>
                                    <td>developer</td>
                                    <td>aug 2</td>
                                </tr>

                            </table>
                    </Grid> */}
                        {/* <Grid item xs={12} md={6}>
                            <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                                localeText={{ start: 'Joining-date', end: 'Resign-date' }}
                            >
                                <Typography variant="h6">Work Experience</Typography>
                                <DateRangePicker
                                    value={value}
                                    onChange={(e) => setValue(e)}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps} />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid> */}
                        

                        <Grid item xs={12} md={12}>
                            <Typography variant="h6">Work Experience</Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Designation</TableCell>
                                            <TableCell>Joined Date</TableCell>
                                            <TableCell>Resigned Date</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {
                                            allValues.wrkExp.map((d, index) => (
                                                <>
                                                    <TableRow key={index}
                                                    >
                                                        <TableCell >
                                                            <TextField placeholder="Designation" value={d.desig} name='desig' onChange={(e) => handleExpChange(e, index, "desig")}>datrtrt</TextField>
                                                        </TableCell>
                                                        <TableCell >
                                                            <TextField placeholder="Joining Date" type="date" value={d.joining} name='joining' onChange={(e) => handleExpChange(e, index, "joining")} >data</TextField>
                                                        </TableCell>
                                                        <TableCell >
                                                            <TextField placeholder="Resigned Date" type="date" value={d.resign} name='resign' onChange={(e) => handleExpChange(e, index, "resign")}>data</TextField>
                                                        </TableCell>
                                                        <TableCell >
                                                            {d.desig && d.joining && d.resign && allValues.wrkExp.length - 1 == index &&
                                                                allValues.wrkExp.length < 4 &&
                                                                (<Button variant="contained" onClick={addExp} >Add</Button>)}
                                                            &nbsp;
                                                            {allValues.wrkExp.length !== 1 && (<Button variant="contained" onClick={() => removeExp(index)}>X</Button>)}

                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // sx={{ mt: 3, mb: 2 }}
                            style={{ marginTop: 15, marginLeft: 10 }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
}


export default FormValidation;