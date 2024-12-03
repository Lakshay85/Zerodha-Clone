import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha client contribute to over 15% of all volume in
            India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Goverment Securities </p>
                </li>
              </ul>
            </div>
          </div>
          <img src='media/pressLogos.png'alt='pressLogo img' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
