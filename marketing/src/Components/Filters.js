import { InputGroup} from "react-bootstrap";

function Filters() {
    
    return(
        <div className="Filters">
            <InputGroup >
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup>
            <InputGroup >
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup>
        </div>

    )

    
}

export default Filters;