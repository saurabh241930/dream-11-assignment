import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "./ListItem";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  getCelebrities,
  searchCelebrities,
  deleteCelebrity,
} from "../redux/celebritySlice";
import useLazyFetch from "../hooks/useLazyFetch";
import { useMemo } from "react";
import Celebrity from "../interfaces";
import { AppDispatch } from "../redux/store";
import useDebounce from "../hooks/useDebounceInput";
import DeleteModal from "./DeleteModal";
import { CircularProgress, Typography } from "@mui/material";
import BottomDrawer from "./BottomDrawer";

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setModal] = useState<boolean>(false);
  const { status, celebrities } = useSelector(
    (state: RootState) => state.celebrity
  );

  const [searchinput, setSearchInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchinput, 500);
  const [modalSelected, setModalSelected] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  function handleDeleteModalOpen(id: number) {
    setModalSelected(id);
    setModal(true);
  }

  function handleAccordianSelected(id: number) {
    setModalSelected(id);
  }

  function onDelete() {
    dispatch(deleteCelebrity({ id: modalSelected }));
    setModal(false);
  }

  function handleDeleteModalClose() {
    setModal(false);
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

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1450);
  }, [window.innerWidth]);

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
              handleDeleteModalOpen={handleDeleteModalOpen}
              idSelected={modalSelected}
              onAccordianSelect={handleAccordianSelected}
            />
          ))}
          {isDesktop ? (
            <DeleteModal
              openModal={openModal}
              handleDeleteModalClose={handleDeleteModalClose}
              onDelete={onDelete}
            />
          ) : (
            <BottomDrawer
              openModal={openModal}
              handleDeleteModalClose={handleDeleteModalClose}
              onDelete={onDelete}
            />
          )}
        </div>
        {status === "loading" && <CircularProgress size={20} color="primary" />}
        {status === "searching" && (
          <div>
            <Typography>Searching please wait....../</Typography>
          </div>
        )}
        {status === "failed" && (
          <div>
            <Typography>Something went wrong :/</Typography>
          </div>
        )}

        {celebrities.length == 0 && (
          <div>
            <Typography>No data found</Typography>
          </div>
        )}
      </Grid>
      <Grid item xs={0} md={3} sm={3}></Grid>
    </>
  );
};

export default List;
