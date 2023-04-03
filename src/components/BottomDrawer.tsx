import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Stack, Typography } from "@mui/material";

type Anchor = "top" | "left" | "bottom" | "right";

interface IModalProps {
    openModal: boolean;
    handleDeleteModalClose: Function;
    onDelete:Function
  }

const BottomDrawer : React.FC<IModalProps> = (props: IModalProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
    
        <React.Fragment key={"bottom"}>
          <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button>
          <Drawer
            anchor="bottom"
            open={props.openModal}
            onClose={() => props.handleDeleteModalClose()}
          >
            <Box sx={{textAlign:"center",padding:"100px"}}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to delete ?
              </Typography>
              <Stack direction="row" spacing={2} style={{ float: "right" }} onClick={() => props.onDelete()}>
                <Button variant="contained" color="error">
                  Yes
                </Button>
                <Button variant="contained" onClick={() => props.handleDeleteModalClose()}>Cancel</Button>
              </Stack>
            </Box>
          </Drawer>
        </React.Fragment>
      
    </div>
  );
};

export default BottomDrawer;
