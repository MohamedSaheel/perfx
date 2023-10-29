import React,{useState}from "react";

import { Autocomplete, Chip, TextField } from "@mui/material";
// import { IconClose } from "assets/Icons/Icons";
// import { CustomAutoComplete } from "Styles/commonStyle";

const Step1 = ({ projectData }) => {
  const [selectedTestNames, setSelectedTestNames] = useState([]);
  const handleChangeDropDown = (event, newValue) => {
    setSelectedTestNames(newValue);
  };

  let data = [
    {
      testName: "Load Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Performance Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Spike Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Functional Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Endurance Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
  ];
  return (
    <div className="bg-white w-4/5 rounded-lg mt-10 ml-24 mb-5">
      <div className="p-10">
        <div className="flex flex-col">
          <label className="font-semibold">Application Name</label>
          <input
            type="text"
            className=" w-3/5 mt-3 py-2 pl-3 text-sm text-gray-900 border border-blue-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="Enter name"
          />
        </div>
        <div className="pt-3">
          <label className="font-semibold">Test Name</label>
        <div className="pt-5">
          <Autocomplete
      multiple
      id="Test Name"
      label="Test Name"
      name="TestName"
      options={data}
      getOptionLabel={(option) => option.testName}
      onChange={handleChangeDropDown}
      isOptionEqualToValue={(option, value) => option.testName === value.testName}
      value={selectedTestNames}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.testName}
            {...getTagProps({ index })}
            // deleteIcon={<CloseIcon sx={{ color: '#90EBFF !important' }} 
            />
          )
        )
      }
      sx={{
        // Your styling here
      }}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Test Name"
          placeholder="Test Name"
          sx={{
            // Your input styling here
          }}
        />
  )}
  
    />
    </div>
    
        </div>
        <div className="pt-3">
          <label className="font-semibold">Description</label>
          <textarea
            id="message"
            rows="4"
            className="p-2.5 w-3/5 mt-3 block text-sm text-gray-900 rounded-lg focus:ring-blue-500 border border-blue-500 focus:border-blue-500 focus:outline-none bg-gray-50"
            placeholder="Type something..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Step1;
 

/* import React, { useState } from 'react'
import { Grid, Button, InputLabel, TextField } from '@mui/material'
import { Autocomplete, Chip } from "@mui/material";

const Step1 = () => {

  const [selectedTestNames, setSelectedTestNames] = useState([]);
  const handleChangeDropDown = (event, newValue) => {
    setSelectedTestNames(newValue);
  };
  let data = [
    {
      testName: "Load Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Performance Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Spike Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Functional Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
    {
      testName: "Endurance Testing",
      phases: [{ name: "", duration: "", rampTo: "", arrivalRate: "" }],
    },
  ];


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <InputLabel sx={{color:"black", fontWeight:"bold"}}>Application Name
          </InputLabel>
          <div className='pt-2'>
          <TextField 
          fullWidth
          border="1px solid #EAEAEA"
          name="Application Name"
          variant="outlined"
          size='small'
          placeholder='Enter your application name..'
          >
          </TextField>
          </div>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <InputLabel sx={{color:"black", fontWeight:"bold"}}>Test Name
          </InputLabel>
          <Autocomplete
      multiple
      id="Test Name"
      label="Test Name"
      name="TestName"
      options={data}
      getOptionLabel={(option) => option.testName}
      onChange={handleChangeDropDown}
      isOptionEqualToValue={(option, value) => option.testName === value.testName}
      value={selectedTestNames}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.testName}
            {...getTagProps({ index })}
            // deleteIcon={<CloseIcon sx={{ color: '#90EBFF !important' }} 
            />
          )
        )
      }
      sx={{
        // Your styling here
        paddingTop:"10px"
      }}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Test Name"
          placeholder="Test Name"
          sx={{
            // Your input styling here
          }}
        />
  )}
  
    />
        </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
              <InputLabel sx={{color:"black", fontWeight:"bold", mb:"2px"}}>Description</InputLabel>
              <textarea 
              name="description"
              placeholder='Type Something....'
              className='border border-gray-300 rounded-md w-full h-20 p-2 hover:border-black focus:ring-blue-600 focus:border-blue-600 focus:outline-none'
              ></textarea>
            </Grid>



      <Grid item lg={12} md={12} sm={12} xs={12}>
          <Button
            variant="contained"
            fullWidth

          >
            NEXT
          </Button>
        </Grid>
        </Grid>
    </div>

  )
}

export default Step1 */