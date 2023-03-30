import React from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
}: Celebrity) => {
  return (
    <Accordion style={{ fontSize: "30px", padding: "20px", marginTop: "30px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar src={picture} />
        <Typography variant="h5" style={{ paddingLeft: "10px" }}>
          {`${first} ${last}`}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Age</span>
              <br />
              <span>18 yrs</span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Gender</span>
              <br />
              <span>{gender}</span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <span style={{ color: "grey" }}>Country</span>
              <br />
              <span>{country}</span>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "grey" }}>Description</span>
              <br />
              <span>{description}</span>
            </Typography>
          </Grid>

          <Grid item xs={12} >
          <Stack direction="row" spacing={2} style={{float:"right"}}>
            <Item>Edit</Item>
            <Item>Delete</Item>
          </Stack>
          </Grid>

        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ListItem;
