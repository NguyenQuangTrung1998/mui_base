import PropTypes from "prop-types";
// @mui
import { Box, Checkbox, BoxProps, CheckboxProps } from "@mui/material";
//
import Icon from "./Icon";

// ----------------------------------------------------------------------

ColorMultiPicker.propTypes = {
  sx: PropTypes.object,
  colors: PropTypes.array,
  onChangeColor: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
};

export type ColorMultiPickerProps = Partial<BoxProps> & {
  colors?: string[];
  selected?: string[];
  onChangeColor?: (newColor: string) => void;
  checkboxProps?: Partial<CheckboxProps>;
};
export default function ColorMultiPicker({
  colors,
  selected,
  onChangeColor,
  checkboxProps,
  sx,
  ...other
}: ColorMultiPickerProps) {
  return (
    <Box sx={sx} {...other}>
      {colors?.map?.((color: string) => {
        const whiteColor = color === "#FFFFFF" || color === "white";

        return (
          <Checkbox
            size="small"
            value={color || null}
            checked={selected?.includes?.(color) || false}
            onChange={() => onChangeColor?.(color)}
            icon={<Icon whiteColor={whiteColor} />}
            checkedIcon={<Icon checked whiteColor={whiteColor} />}
            {...checkboxProps}
            sx={{
              ...checkboxProps?.sx,
              color,
              "&:hover": { opacity: 0.72 },
              "& svg": { width: 12, height: 12 },
            }}
          />
        );
      })}
    </Box>
  );
}