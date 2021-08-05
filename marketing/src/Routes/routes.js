import { Switch, Route } from "react-router";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";

export default function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/products/appliances">
            <Products product="appliances" />
        </Route>
        <Route exact path="/products/computer">
            <Products product="computer" />
        </Route>
        <Route exact path="/products/kitchen">
            <Products product="kitchen" />
        </Route>
        <Route exact path="/products/cam">
            <Products product="cam" />
        </Route>
        <Route exact path="/products/ac">
            <Products product="ac" />
        </Route>
        <Route exact path="/products/games">
            <Products product="games" />
        </Route>
        <Route exact path="/products/phone">
            <Products product="phone" />
        </Route>
        <Route exact path="/products/tv">
            <Products product="tv" />
        </Route>
        <Route exact path="/products/printer">
            <Products product="printer" />
        </Route>
        <Route exact path="/products/women">
            <Products product="women" />
        </Route>
        <Route exact path="/products/men">
            <Products product="men" />
            </Route>
        <Route exact path="/products/gold">
            <Products product="gold" />
            </Route>
        <Route exact path="/products/outdoor">
            <Products product="outdoor" />
            </Route>
        <Route exact path="/products/kids">
            <Products product="kids" />
            </Route>
            <Route exact path="/products/table">
            <Products product="table" />
            </Route>
            <Route exact path="/products/household">
            <Products product="household" />
            </Route>
            <Route exact path="/products/furniture">
            <Products product="furniture" />
            </Route>
            <Route exact path="/products/lighting">
            <Products product="lighting" />
            </Route>
            <Route exact path="/products/hometextile">
            <Products product="hometextile" />
            </Route>
            <Route exact path="/products/decoration">
            <Products product="decoration" />
            </Route>
            <Route exact path="/products/bed">
            <Products product="bed" />
            </Route>
            <Route exact path="/products/officefurniture">
            <Products product="officefurniture" />
            </Route>
            <Route exact path="/products/officestationery">
            <Products product="office-stationery" />
            </Route>
            <Route exact path="/products/bath">
            <Products product="bath" />
            </Route>
      </Switch>
      ;
    </div>
  );
}