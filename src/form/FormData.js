import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

function FormData({item}) {
  // console.log(item.name);
  return (
    <> 
      <Container>
      <Typography style={{textAlign:'center',color:"red"}} variant='h6'>Registered-data</Typography>
        <Table style={{border:'1px solid green'}}>
          <TableHead  style={{backgroundColor:'violet'}}>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Gender</TableCell>
            {/* <TableCell>Qualification</TableCell> */}
            <TableCell>Job-description</TableCell>
            <TableCell>DOB</TableCell>
            {/* <TableCell>Work Experience</TableCell> */}
            
          </TableHead>
          <TableBody style={{textAlign:"center",backgroundColor:"gray",color:"white"}}>
            {item.map(d=>(
              <>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.email}</TableCell>
              <TableCell>{d.password}</TableCell>
              <TableCell>{d.address}</TableCell>
              <TableCell>{d.contact}</TableCell>
              <TableCell>{d.country}</TableCell>
              <TableCell>{d.gender}</TableCell>
              {/* <TableCell>{d.qualification}</TableCell> */}
              <TableCell>{d.description}</TableCell>
              <TableCell>{d.dob}</TableCell>
              {/* <TableCell>{d.date}</TableCell> */}
              </>
            ))}
            
          </TableBody>
        </Table>
      </Container>
    
    </>
  )
}

export default FormData