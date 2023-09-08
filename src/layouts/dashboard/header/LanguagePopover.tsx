import { useState } from "react";
// @mui
import { alpha, styled } from "@mui/material";
import {
  Box,
  MenuItem,
  Stack,
  IconButton,
  Popover,
  IconButtonProps,
} from "@mui/material";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/assets/icons/ic_flag_en.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/assets/icons/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/assets/icons/ic_flag_fr.svg",
  },
];

// ----------------------------------------------------------------------
const IconButtonStyled = styled(IconButton, {
  shouldForwardProp: (p) => p !== "open",
})<IconButtonProps & { open?: boolean }>(({ theme, open }) => ({
  padding: 0,
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  ...((open && {
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.focusOpacity
    ),
  }) as any),
}));
export default function LanguagePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButtonStyled onClick={handleOpen} open={!!open}>
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </IconButtonStyled>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => handleClose()}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
