import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import Step1 from '../stepper/Step1';
import Page2 from '../stepper/Step2';
import Page3 from '../stepper/Step3';

function MainForm() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field5: '',
  });

  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Step 1', 'Page 2', 'Page 3'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormSubmit = () => {
    console.log(formData); // Print the form data to the console
  };

  return (

    <div className='w-full h-screen '>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>Form submitted successfully!</p>
          </div>
        ) : (
          <div>
            {activeStep === 0 && (
              <Step1 formData={formData} setFormData={setFormData} />
            )}
            {activeStep === 1 && (
              <Page2 formData={formData} setFormData={setFormData} />
            )}
            {activeStep === 2 && (
              <Page3 formData={formData} setFormData={setFormData} />
            )}
            <div className='ml-20'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {activeStep < steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        )}
      </div>


      
    </div>
  );
}

export default MainForm;

 
/* import React, { useState } from "react";
import { Paper, Step, StepLabel, Stepper, Box } from "@mui/material";
import Step1 from "../stepper/Step1";
import Step2 from "../stepper/Step2";
import Step3 from "../stepper/Step3";

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Project Details", "Configuration", "Scenarios"];

  const getStepsContent = (index) => {
    switch (index) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return "unknown";
    }
  };
  return (
    <div className="w-full flex justify-center rounded-lg bg-secondary">
      <div className="w-3/8 mt-5 rounded-lg">
        <Box>
          <Paper elevation={0}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                mt: 3,
                mb: 3,
                pt: 3,
                pb: 3,
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
          <Box
            sx={{
              display: "flex",
              flexwrap: "wrap",
              "& > :not(style)": { m: 1, width: "100%", height: "100%" },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                pt: 3,
                pl: 5,
                pr: 5,
                pb: 3,
              }}
            >
              {getStepsContent(activeStep)}
            </Paper>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default FormStepper; */
