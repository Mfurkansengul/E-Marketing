import { InputGroup, FormControl } from "react-bootstrap";

function Filters() {
    
    return(
        <div className="Filters">
            <InputGroup md={1}>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
        </div>

    )

    
}

export default Filters;