import {
  fontFamilyOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "@/constants";
import {
  colors,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const selectConfigs = [
  {
    property: "fontFamily",
    placeholder: "Choose a font",
    options: fontFamilyOptions,
  },
  { property: "fontSize", placeholder: "30", options: fontSizeOptions },
  {
    property: "fontWeight",
    placeholder: "Semibold",
    options: fontWeightOptions,
  },
];

type TextProps = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  handleInputChange: (property: string, value: string) => void;
};

const Text = ({
  fontFamily,
  fontSize,
  fontWeight,
  handleInputChange,
}: TextProps) => (
  <div className="flex flex-col gap-3 border-b border-gray-200 px-5 py-3">
    <h3 className="text-[10px] uppercase">Text</h3>

    <div className="flex flex-col gap-3">
      {RenderSelect({
        config: selectConfigs[0],
        fontSize,
        fontWeight,
        fontFamily,
        handleInputChange,
      })}

      <div className="flex gap-2">
        {selectConfigs.slice(1).map((config) =>
          RenderSelect({
            config,
            fontSize,
            fontWeight,
            fontFamily,
            handleInputChange,
          })
        )}
      </div>
    </div>
  </div>
);

type Props = {
  config: {
    property: string;
    placeholder: string;
    options: { label: string; value: string }[];
  };
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  handleInputChange: (property: string, value: string) => void;
};

const RenderSelect = ({
  config,
  fontSize,
  fontWeight,
  fontFamily,
  handleInputChange,
}: Props) => (
  <>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        key={config.property}
        onChange={(value: any) => handleInputChange(config.property, value)}
        value={
          config.property === "fontFamily"
            ? fontFamily
            : config.property === "fontSize"
            ? fontSize
            : fontWeight
        }
        placeholder={
          config.property === "fontFamily"
            ? "Choose a font"
            : config.property === "fontSize"
            ? "30"
            : "Semibold"
        }
      >
        {config.options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              ":hover": { backgroundColor: colors.green[700], color: "white" },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>
);

export default Text;
