import React from 'react'
import FormValidation from './FormValidation'
import FormData from './FormData'
import Test from './Test'
import Daterange from './Daterange'

function index({fetchData,item}) {
  return (
    <div>
        <FormValidation  fetchData={fetchData}/>
        {/* <FormData item={item}/> */}
        {/* <Test/> */}
        {/* <Daterange/> */}
    </div>
  )
}

export default index