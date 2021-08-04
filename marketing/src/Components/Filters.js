import { Form } from "react-bootstrap";
import phones from "../Filters/Elektronik/Bilgisayar-tablet.json";

function Filters() {
  const keys = Object.keys(phones);

  return (
    <div className="Filters">
      <Form>
        {keys.map((key) => (
          <div>
            <Form.Label className="border border-5 border-dark w-100 text-center">{key}</Form.Label>
            {phones[key].map(item => (
                <div key={`${item}-checkbox`}>
                <Form.Check
                  type="checkbox"
                  id={`${item}-checkbox`}
                  label={item}
                />
              </div>
            ))}
            
          </div>
        ))}
      </Form>
    </div>
  );
}

export default Filters;