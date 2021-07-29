import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CandyBar from "./CandyBar";
import PotatoChips from "./PotatoChips";
import Soda from "./Soda";
import NavBar from "./NavBar";

function VendingMachine() {
  return (
    <div>
      <h1>Pick Something From The Vending Machine</h1>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <div>
            <Link exact to="/candy-bar">
              Candy Bar
            </Link>
          </div>
          <div>
            <Link exact to="/potato-chips">
              Potato Chips
            </Link>
          </div>
          <div>
            <Link exact to="/soda">
              Soda
            </Link>
          </div>
        </Route>
        <Route exact path="/candy-bar">
          <CandyBar />
          <Link exact to="/">
            Back to vending machine
          </Link>
        </Route>
        <Route exact path="/potato-chips">
          <PotatoChips />
          <Link exact to="/">
            Back to vending machine
          </Link>
        </Route>
        <Route exact path="/soda">
          <Soda />
          <Link exact to="/">
            Back to vending machine
          </Link>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
