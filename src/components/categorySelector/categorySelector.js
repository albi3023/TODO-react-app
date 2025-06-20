import { FormControl, MenuItem, Select } from "@mui/material";

const CategorySelector = ({ category, setCategory }) => {
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={category}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{ height: "40px", width: "140px" }}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"completed"}>Completed</MenuItem>
        <MenuItem value={"pending"}>Pending</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategorySelector;
