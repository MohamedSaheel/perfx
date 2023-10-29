import React,{ useState } from "react";
import Box from "@mui/material/Box";
import { Slider, TextField } from '@mui/material';
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";

const Page2 = () => {
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const ITEM_HEIGHT = 20;
  const ITEM_PADDING_TOP = 20;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = ["LOad Test", "Spike Test", "Endurance Test"];

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

 
  const [sliderValue, setSliderValue] = useState(0);
  const [textFieldValue, setTextFieldValue] = useState(0);

  // Handler for changing the Slider value
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setTextFieldValue(newValue);
  };

  // Handler for changing the TextField value
  const handleTextFieldChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
    setTextFieldValue(newValue);
  };  

  return (
    <div className="w-full flex justify-center items-center rounded-lg">
      <div className="rounded-lg mt-5 w-3/4 bg-white">
        <div className="font-semibold px-8 pt-3 text-sm">Target</div>
        <div className="flex flex-col pt-2 px-8">
          <label className="font-semibold text-sm">Url</label>
          <input
            type="text"
            className="rounded-lg outline-none border-blue-400 border mt-2 pl-3 p-1 text-sm"
            placeholder="Enter Name"
          />
        </div>
        <div className="">
          <div className="mb-4 px-8 pt-3">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white hover:bg-[#02B8E0] "
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Load Test
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white  hover:bg-[#02B8E0] "
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Stress
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white  hover:bg-[#02B8E0] dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Spike Test
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="px-8 font-semibold text-sm">Phase 01</div>
          <div className="flex flex-col pt-3 px-8">
            <label className="font-semibold text-sm">Name</label>
            <FormControl sx={{ mt: 3, width: 250 }}>
              <InputLabel id="demo-multiple-name-label">Select Test</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Select Test" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-evenly pt-3">
      <label className="font-semibold mt-4 ml-8 text-sm">Duration</label>
       <label className="font-semibold mt-4 ml-8 text-sm">Enter the value</label>
        <label className="font-semibold mt-4 ml-8 text-sm">Show values</label>
      </div>
          <div className="flex justify-around pt-5">    
             
      <div>
              <Box sx={{ width: 160, paddingTop: "25px" }}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={200}
          step={1}
        />
         </Box></div>
         <div>
        <TextField
          type="number"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          label="Value"
          variant="outlined"
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
          }}
        /> 
     </div>
         
            <div className="">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center mt-3"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white hover:bg-[#02B8E0] "
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Minutes
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white  hover:bg-[#02B8E0] "
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Seconds
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-evenly pt-3">
      <label className="font-semibold mt-4 ml-8 text-sm">Duration</label>
       <label className="font-semibold mt-4 ml-8 text-sm">Enter the value</label>
        <label className="font-semibold mt-4 ml-8 text-sm">Show values</label>
      </div>
  <div className="flex justify-around pt-5">    
             
      <div>
              <Box sx={{ width: 160, paddingTop: "25px" }}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={200}
          step={1}
        />
         </Box></div>
         <div>
        <TextField
          type="number"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          label="Value"
          variant="outlined"
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
          }}
        /> 
     </div>
         
            <div className="">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center mt-3"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className="text-sm bg-[#02B8E0] text-white inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white hover:bg-[#02B8E0] "
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Minutes
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white  hover:bg-[#02B8E0] "
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Seconds
                  </button>
                </li>
              </ul>
            </div>
          </div>
           <div className="flex justify-evenly pt-3">
      <label className="font-semibold mt-4 ml-8 text-sm">Duration</label>
       <label className="font-semibold mt-4 ml-8 text-sm">Enter the value</label>
        <label className="font-semibold mt-4 ml-8 text-sm">Show values</label>
      </div>
  <div className="flex justify-around pt-5">    
             
      <div>
              <Box sx={{ width: 160, paddingTop: "25px" }}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={200}
          step={1}
        />
         </Box></div>
         <div>
        <TextField
          type="number"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          label="Value"
          variant="outlined"
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
          }}
        /> 
     </div>
         
            <div className="">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center mt-3"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white hover:bg-[#02B8E0] "
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Minutes
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="text-sm inline-block p-4 border-b-2 border-blue-500 rounded-t-lg hover:text-white  hover:bg-[#02B8E0] "
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Seconds
                  </button>
                </li>
              </ul>
            </div>
          </div>


        </div>
        <div className="flex justify-around mt-5">
          
            <div className="my-2">
              <button className="bg-primary text-white font-medium text-sm px-5 py-2.5 border rounded-lg">
                + Add phase
              </button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Page2;
