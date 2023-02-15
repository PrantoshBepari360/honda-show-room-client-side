import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:
      "One to One Service is our way of ensuring every customer has a Kando* experience.",
    imgPath:
      "https://www.yamaha-motor-india.com/theme/v3/image/products/banner-bike-pc.jpg",
  },
  {
    label:
      "All the latest about the Yamaha Racing Team, rider profiles, race results and more.",
    imgPath:
      "https://www.yamaha-motor-india.com/theme/v3/image/r15m/kv01_pc.jpg?v=2",
  },
  {
    label:
      "Here we introduce initiatives for YTA, our technician training program, which we conduct around the world.",
    imgPath:
      "https://www.yamaha-motor-india.com/theme/v3/image/motogpeditions/kv01_pc.jpg?v=6",
  },
  {
    label:
      "All the latest about the Yamaha Racing Team, rider profiles, race results and more.",
    imgPath:
      "https://www.yamaha-motor-india.com/theme/v3/image/r15v3/kv02_pc.jpg?v=2",
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="bg-primary py-5">
      <Container className="py-5">
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep]?.label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme?.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images?.map((step, index) => (
            <div key={index}>
              {Math?.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 400,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    margin: "auto",
                  }}
                  src={step?.imgPath}
                  alt={step?.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme?.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme?.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Container>
    </Box>
  );
}

export default Banner;
