import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Celebrity from "../interfaces";
import { Input, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const ListItem = ({
  _id,
  first,
  last,
  dob,
  gender,
  email,
  picture,
  country,
  description,
  handleDeleteModalOpen,
  idSelected
  
}: Celebrity) => {

  
  const [editable, setEditable] = useState(false);

  const [firtsValue, setFirstValue] = useState(first);
  const [lastValue, setLastValue] = useState(last);
  const [dobValue, setDOBValue] = useState(dob);
  const [genderValue, setGenderValue] = useState(gender);
  const [emailValue, setEmailValue] = useState(email);
  const [pictureValue, setPictureValue] = useState(picture);
  const [countryValue, setCountryValue] = useState(country);
  const [descriptionValue, setDescriptionValue] = useState(description);

  return (
    <Accordion style={{ fontSize: "30px", padding: "20px", marginTop: "30px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar src={picture} />
        <Typography variant="h5" style={{ paddingLeft: "10px" }}>
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            value={firtsValue}
            onChange={(e) => setFirstValue(e.target.value)}
            disabled={!editable}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={lastValue}
            onChange={(e) => setLastValue(e.target.value)}
            disabled={!editable}
          />
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Age</span>
              <br />
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={dobValue}
                onChange={(e) => setDOBValue(e.target.value)}
                disabled={!editable}
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Gender</span>
              <br />
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={genderValue}
                onChange={(e) => setGenderValue(e.target.value)}
                disabled={!editable}
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Country</span>
              <br />
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={countryValue}
                onChange={(e) => setCountryValue(e.target.value)}
                disabled={!editable}
              />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "grey" }}>Description</span>
              <br />
              <TextField
                id="outlined-basic"
                style={{ border: "none" }}
                variant="outlined"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                fullWidth
                multiline
                maxRows={4}
                disabled={!editable}
              />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={2} style={{ float: "right" }}>
              {editable ? (
                <>
                  <IconButton aria-label="delete" size="large">
                    <CancelIcon fontSize="inherit" style={{ color: "red" }}  onClick={() => setEditable(false)}/>
                  </IconButton>
                  <IconButton aria-label="delete" size="large">
                    <CheckCircleOutlineIcon
                      fontSize="inherit"
                      style={{ color: "green" }}
                      onClick={() => setEditable(false)}
                    />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton aria-label="delete" size="large" onClick={() => handleDeleteModalOpen(_id)}>
                    <DeleteIcon fontSize="inherit" style={{ color: "red" }}/>
                  </IconButton>
                  <IconButton aria-label="delete" size="large" onClick={() => setEditable(true)}>
                    <EditIcon fontSize="inherit" style={{ color: "blue" }} />
                  </IconButton>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
    
  );
};

export default ListItem;
