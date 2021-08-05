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
            <Route exact path="/products/autoaccessory">
            <Products product="autoaccessory" />
            </Route>
            <Route exact path="/products/allmotorcycle">
            <Products product="allmotorcycle" />
            </Route>
            <Route exact path="/products/garden">
            <Products product="garden" />
            </Route>
            <Route exact path="/products/bathroom">
            <Products product="bathroom" />
            </Route>
            <Route exact path="/products/electrik">
            <Products product="electrik" />
            </Route>
            <Route exact path="/products/construction">
            <Products product="construction" />
            </Route>
            <Route exact path="/products/worksafety">
            <Products product="worksafety" />
            </Route>
            <Route exact path="/products/baby">
            <Products product="baby" />
            </Route>
            <Route exact path="/products/toys">
            <Products product="toys" />
            </Route>
            <Route exact path="/products/lactation">
            <Products product="lactation" />
            </Route>
            <Route exact path="/products/babyroom">
            <Products product="babyroom" />
            </Route>
            <Route exact path="/products/diaper">
            <Products product="diaper" />
            </Route>
            <Route exact path="/products/babycare">
            <Products product="babycare" />
            </Route>
            <Route exact path="/products/allsports">
            <Products product="allsports" />
            </Route>
            <Route exact path="/products/alloutdoor">
            <Products product="alloutdoor" />
            </Route>
            <Route exact path="/products/sportswearshoes">
            <Products product="sportswearshoes" />
            </Route>
            <Route exact path="/products/outdoorshoes">
            <Products product="outdoorshoes" />
            </Route>
            <Route exact path="/products/fitnesscondition">
            <Products product="fitnesscondition" />
            </Route>
            <Route exact path="/products/scooterpaten">
            <Products product="scooterpaten" />
            </Route>
            <Route exact path="/products/sportsbranches">
            <Products product="sportsbranches" />
            </Route>
            <Route exact path="/products/bycyle">
            <Products product="bycyle" />
            </Route>
            <Route exact path="/products/fanproducts">
            <Products product="fanproducts" />
            </Route>
            <Route exact path="/products/campingtools">
            <Products product="campingtools" />
            </Route>
            <Route exact path="/products/waterproducts">
            <Products product="waterproducts" />
            </Route>
            <Route exact path="/products/fishinggear">
            <Products product="fishinggear" />
            </Route>
            <Route exact path="/products/actioncamera">
            <Products product="actioncamera" />
            </Route>
            <Route exact path="/products/cosmetic">
            <Products product="cosmetic" />
            </Route>
            <Route exact path="/products/perfume">
            <Products product="perfume" />
            </Route>
            <Route exact path="/products/makeup">
            <Products product="makeup" />
            </Route>
            <Route exact path="/products/skincare">
            <Products product="skincare" />
            </Route>
            <Route exact path="/products/suncare">
            <Products product="suncare" />
            </Route>
            <Route exact path="/products/personalcare">
            <Products product="personalcare" />
            </Route>
            <Route exact path="/products/oralcare">
            <Products product="oralcare" />
            </Route>
            <Route exact path="/products/shavingproducts">
            <Products product="shavingproducts" />
            </Route>
            <Route exact path="/products/supermarkethomepage">
            <Products product="supermarkethomepage" />
            </Route>
            <Route exact path="/products/detergentcleaning">
            <Products product="detergentcleaning" />
            </Route>
            <Route exact path="/products/diaperswetwipes">
            <Products product="diaperswetwipes" />
            </Route>
            <Route exact path="/products/paperproducts">
            <Products product="paperproducts" />
            </Route>
            <Route exact path="/products/beverages">
            <Products product="beverages" />
            </Route>
            <Route exact path="/products/foodproducts">
            <Products product="foodproducts" />
            </Route>
            <Route exact path="/products/petshop">
            <Products product="petshop" />
            </Route>
            <Route exact path="/products/householdconsumables">
            <Products product="householdconsumables" />
            </Route>
            <Route exact path="/products/officeconsumables">
            <Products product="officeconsumables" />
            </Route>
            <Route exact path="/products/bookmagazine">
            <Products product="bookmagazine" />
            </Route>
            <Route exact path="/products/musicainstrumentsmaterials">
            <Products product="musicainstrumentsmaterials" />
            </Route>
            <Route exact path="/products/dronemultikopter">
            <Products product="dronemultikopter" />
            </Route>
            <Route exact path="/products/hobbygame">
            <Products product="hobbygame" />
            </Route>
            <Route exact path="/products/film">
            <Products product="film" />
            </Route>
            <Route exact path="/products/digitalproducts">
            <Products product="digitalproducts" />
            </Route>
      </Switch>
      ;
    </div>
  );
}