import TextField from "@mui/material/TextField";

const dimensionsOptions = [
  { label: "W", property: "width" },
  { label: "H", property: "height" },
];

type Props = {
  width: string;
  height: string;
  isEditingRef: React.MutableRefObject<boolean>;
  handleInputChange: (property: string, value: string) => void;
};

const Dimensions = ({
  width,
  height,
  isEditingRef,
  handleInputChange,
}: Props) => (
  <section className="flex flex-col border-b border-gray-200">
    <div className="flex flex-col gap-4 px-6 py-3">
      {dimensionsOptions.map((item) => (
        <div
          key={item.label}
          className="flex flex-1 items-center gap-3 rounded-sm"
        >
          <TextField
            type="number"
            label={item.label}
            id={item.property}
            placeholder="100"
            value={item.property === "width" ? width : height}
            className="input-ring"
            onChange={(e) => handleInputChange(item.property, e.target.value)}
            onBlur={(e) => {
              isEditingRef.current = false;
            }}
            sx={{}}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Dimensions;
