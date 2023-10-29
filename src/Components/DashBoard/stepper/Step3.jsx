import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";


const Page3 = () => {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    
  });
  

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
  const names = ["Load Test", "Spike Test", "Performance Test"];

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

  return (
    <div className='flex justify-center h-screen'>
      
        <div className='bg-white h-fit mb-3 w-3/4 rounded-xl mt-5'>

                   <div className='pt-5 pl-10'>
                    <span>Phase 01</span>
                   </div>
                   <div>
                   <FormControl sx={{ mt:3, width: 250, ml:5 }}>
                <InputLabel id="demo-multiple-name-label">
                  Select Test
                </InputLabel>
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
                   <div className='pt-5 pl-10'>
                    <span>Url</span>
                   </div>
                   <div className='ml-10'>
                   <input
              type="text"
              className="rounded-lg outline-none w-3/4 border-blue-400 border mt-3 pl-3 p-1 text-sm"
              placeholder="Enter Name"
            />
                   </div>
                   <div>
                   <div className="mb-4 px-7 pt-3">
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
                    Request Body
                  </button>
                </li>
              </ul>
            </div>
                   </div>
                   <div className='ml-10'>
                   <textarea id="message" rows="4" className="p-2.5 w-3/5 block text-sm text-gray-900 rounded-lg focus:ring-blue-500 border border-blue-500 focus:border-blue-500 focus:outline-none bg-gray-50" placeholder="Type something..."></textarea>
                   </div>
                   <div className='flex flex-col px-10'>
                   <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
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
                    File upload
                  </button>
                </li>
              </ul>



                    <div className='mt-3 mb-3'>
                   <Button component="label" variant="contained" className='w-40' startIcon={<CloudUploadIcon />}>
                   Browse
      <VisuallyHiddenInput type="file" />
    </Button>
    </div>
                   </div>
                   <div className="flex justify-around mt-5">
            <Link>
              <div className="my-2">
                <button className="bg-primary text-white font-medium text-sm px-5 py-2.5 border rounded-lg">
                  + Add phase
                </button>
              </div>
            </Link>
          </div>
<div>
  
</div>
                   
        </div>
    </div>
  )
}

export default Page3