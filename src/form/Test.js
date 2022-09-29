import React, { useState } from 'react'
import { Grid, Typography, TableContainer, Paper, Table, TableCell, TextField, TableBody, TableHead, TableRow, Button, Autocomplete } from '@mui/material'


function Test() {

  const [value,setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value);
  }


  const top100Films = [
    { title: 'Higher Secondary' },
    { title: 'Under Graduate' },
    { title: 'Post Graduate' },
    { title: 'Diploma' },
  ];


  // const [serviceList, setServiceList] = useState([{ service: "" }]);

  // const handleChangeData = (e) => {

  // }

  // const handleServiceChange = (e, index) => {
  //     const { name, value } = e.target;
  //     const list = [...serviceList];
  //     list[index][name] = value;
  //     setServiceList(list);
  //   };

  //   const handleServiceRemove = (index) => {
  //     const list = [...serviceList];
  //     list.splice(index, 1);
  //     setServiceList(list);
  //   };

  //   const handleServiceAdd = () => {
  //     setServiceList([...serviceList, { service: "" }]);
  //   }; 

  //   const [serviceLists,setServiceLists] = useState([{service:""}])

  //   const handleAddChange =(e,index) => {

  //   }

  return (
    <div>
      <h1>hello din</h1>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          multiple
          value={value}
          onChange={handleChange}
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Qualification"
              placeholder="Qualification"
            />
          )}
        />
      </Grid>




      {/* <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Service(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
    </form>

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
                                            <TableRow
                                            >
                                                <TableCell >
                                                    <TextField placeholder="Designation" value="desig" name='desig' onChange={handleChangeData}>datrtrt</TextField>
                                                    </TableCell>
                                                <TableCell >
                                                    <TextField placeholder="Joining Date" type="date" value="joining" name='joining' onChange={handleChangeData} >data</TextField>
                                                    </TableCell>
                                                <TableCell >
                                                    <TextField placeholder="Resigned Date" type="date" value="resign" name='resign' onChange={handleChangeData}>data</TextField>
                                                    </TableCell>
                                                <TableCell >
                                                    <Button variant="contained" >Add</Button>
                                                    &nbsp;<Button variant="contained">X</Button>
                                                    </TableCell>
                                            </TableRow>
                                       
                                    </TableBody>
                                </Table>
                            </TableContainer>
                          </Grid> */}
    </div>
  )
}

export default Test