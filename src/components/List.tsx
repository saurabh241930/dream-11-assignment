import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "./ListItem";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getCelebrities, searchCelebrities } from "../redux/celebritySlice";
import useLazyFetch from "../hooks/useLazyFetch";
import { useMemo } from "react";
import { width } from "@mui/system";
import Celebrity from "../interfaces";
import { AppDispatch } from "../redux/store";
import useDebounce from "../hooks/useDebounceInput";
import { consumers } from "stream";
import DeleteModal from "./DeleteModal";

interface CelebrityProps {
  celebrities: Celebrity[];
}

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal,setModal] = useState<boolean>(false)
  const { status, celebrities } = useSelector(
    (state: RootState) => state.celebrity
  );

  const [searchinput, setSearchInput] = useState("");
  const debouncedValue = useDebounce<string>(searchinput, 500);

  const handleDeleteModal = (id:number) => {
    console.log(id);
    
  }

  useEffect(() => {
    dispatch(getCelebrities());
  }, []);

  useEffect(() => {
    if (searchinput.length > 2) {
      dispatch(searchCelebrities(searchinput));
    }

    return () => {
      dispatch(getCelebrities());
    };
  }, [debouncedValue]);




  return (
    <>
      <Grid item xs={0} md={3} sm={3}></Grid>
      <Grid item xs={12} md={6} sm={6}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          margin="normal"
          style={{
            marginTop: "50px",
            position: "fixed",
            top: "10",
            zIndex: "100",
            backgroundColor: " white",
          }}
          value={searchinput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={0} md={3} sm={3}></Grid>
      <Grid item xs={0} md={3} sm={3}></Grid>
      <Grid item xs={12} md={6} sm={6}>
        <div style={{ marginTop: "150px" }}>
          {celebrities.map((celebrity: Celebrity) => (
            <ListItem
              key={celebrity._id.toString()}
              _id={celebrity._id}
              first={celebrity.first}
              last={celebrity.last}
              dob={celebrity.dob}
              gender={celebrity.gender}
              email={celebrity.email}
              picture={celebrity.picture}
              country={celebrity.country}
              description={celebrity.description}
              handleDeleteModal={handleDeleteModal}
            />
          ))}
          <DeleteModal openModal={openModal}/>
        </div>
      </Grid>
      <Grid item xs={0} md={3} sm={3}></Grid>
    </>
  );
};

export default List;
