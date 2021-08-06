import { Form } from "react-bootstrap";
import SwitchFilter from "../utils/SwitchFilters";

function Filters(props) {
  const product = SwitchFilter(props.products.product);
  const keys = Object.keys(product);
  const common = SwitchFilter("common");
  const commonKeys = Object.keys(common);

  return (
    <div className="Filters" style={{maxHeight: "1100px", overflowY: "scroll"}}>
      <Form>
        {keys.map((key) => (
          <div>
            <Form.Label className="border border-5 border-dark w-100 text-center">
              {key}
            </Form.Label>
            {product[key].map((item) => (
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
        {commonKeys.map((key) => (
          <div>
            <Form.Label className="border border-5 border-dark w-100 text-center">
              {key}
            </Form.Label>
            {common[key].map((item) => (
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