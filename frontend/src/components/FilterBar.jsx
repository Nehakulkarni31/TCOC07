import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";

export default function FilterBar({
    selectedType,
    setSelectedType
}) {

    return (

        <FormControl
            fullWidth
            sx={{ mb: 3 }}
        >

            <InputLabel>
                Filter
            </InputLabel>

            <Select
                value={selectedType}
                label="Filter"

                onChange={(e) =>
                    setSelectedType(
                        e.target.value
                    )
                }
            >

                <MenuItem value="All">
                    All
                </MenuItem>

                <MenuItem value="Placement">
                    Placement
                </MenuItem>

                <MenuItem value="Result">
                    Result
                </MenuItem>

                <MenuItem value="Event">
                    Event
                </MenuItem>

            </Select>
        </FormControl>
    );
}