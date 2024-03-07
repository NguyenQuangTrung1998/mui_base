import { useState } from "react";
// @mui
import { Menu, Button, MenuItem, Box } from "@mui/material";
// component
// import Iconify from "../../../components/iconify";
import { ContainerMenu } from "./constants/ContainerMenu";

// ----------------------------------------------------------------------

export default function ProductMenu() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {ContainerMenu?.items?.map?.((item, index) => (
        <Box key={index}>
          <Button
            color="inherit"
            disableRipple
            onClick={handleOpen}
            // endIcon={
            //   <Iconify
            //     icon={open ? "eva:chevron-up-fill" : "eva:chevron-down-fill"}
            //   />
            // }
          >
            {item?.label}
          </Button>
          <Menu
            keepMounted
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {item?.options?.map?.((option: any) => {
              return (
                <MenuItem
                  onClick={handleClose}
                  key={option.value}
                  sx={{ typography: "body2" }}
                >
                  {option?.name}
                </MenuItem>
              );
            })}
          </Menu>
        </Box>
      ))}
    </>
  );
}
