import React, { useEffect, useState } from "react";
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
import { Input, InputLabel, MenuItem, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import moment from "moment";

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
  onAccordianSelect,
  idSelected,
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
  const [validationError, setValidationError] = useState("");


  useEffect(() => {
    if (
      (first.length > 0 && firtsValue.length === 0) ||
      (last.length > 0 && lastValue.length === 0) ||
      (country.length > 0 && countryValue.length === 0) ||
      (description.length > 0 && descriptionValue.length === 0)
    ) {
      setValidationError("Values cannot be empty");
    } else {
      setValidationError("");
    }
  }, [firtsValue, lastValue, countryValue, descriptionValue]);



  return (
    <Accordion style={{ fontSize: "30px", padding: "20px", marginTop: "30px" }} onClick={() => onAccordianSelect(_id)} expanded={_id === idSelected}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar src={picture} />
        <Typography variant="h5" style={{ paddingLeft: "10px" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={firtsValue}
            onChange={(e) => setFirstValue(e.target.value)}
            disabled={!editable}
            error={firtsValue.length === 0}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={lastValue}
            onChange={(e) => setLastValue(e.target.value)}
            disabled={!editable}
            error={lastValue.length === 0}
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
                value={moment().diff(dobValue, "years")}
                onChange={(e) => setDOBValue(e.target.value)}
                disabled
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Gender</span>
              <br />

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genderValue}
                label="Age"
                disabled={!editable}
                onChange={(e) => setGenderValue(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="transgender">Transgender</MenuItem>
                <MenuItem value="rather not to say">Rather not to say</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
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
                error={countryValue.length === 0}
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
                error={descriptionValue.length === 0}
              />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={2} style={{ float: "right" }}>
              {editable && moment().diff(dobValue, "years") > 18 ? (
                <>
                  <IconButton aria-label="delete" size="large">
                    <CancelIcon
                      fontSize="inherit"
                      style={{ color: "red" }}
                      onClick={() => setEditable(false)}
                    />
                  </IconButton>
                  <span>{validationError}</span>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    disabled={validationError.length > 0}
                  >
                    <CheckCircleOutlineIcon
                      fontSize="inherit"
                      style={{ color: "green" }}
                      onClick={() => setEditable(false)}
                    />
                  </IconButton>
                </>
              ) : (
                <>
                  {moment().diff(dobValue, "years") < 18 && (
                    <span>Non adult</span>
                  )}
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handleDeleteModalOpen(_id)}
                  >
                    <DeleteIcon fontSize="inherit" style={{ color: "red" }} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => setEditable(true)}
                    disabled={moment().diff(dobValue, "years") < 18}
                  >
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
