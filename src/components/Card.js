import React from 'react'
import CreatePlan from './CreatePlan'
import Plans from './Plans'

window.addEventListener("DOMContentLoaded", event => {
  const options = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  };

  const tabsContainer = document.querySelector(".tabs");
  window.M.Tabs.init(tabsContainer, options);
});

function Card({contract, provider, signer}) {
  return (
    <div className="main">
      <div className="main-card card large grey lighten-2 hoverable">
        <div className="card-content">
          <p>Crypto Subscription Service</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
          <li className="tab"><a href="#create">Create Plan</a></li>
          <li className="tab"><a className="active" href="#subscribe">Subscribe to a Plan</a></li>
          <li className="tab"><a href="#cancel">Cancel Plan</a></li>
          <li className="tab"><a href="#pay">Pay Due Amount</a></li>
        </ul>
        </div>
        <div className="tab-cont card-content grey lighten-5">
          <div id="create">
            <CreatePlan contract={contract} signer={signer} />
          </div>
          <div id="subscribe">
            <Plans provider={provider} contract={contract} signer={signer} />
          </div>
          <div id="cancel">
            Test 3
          </div>
          <div id="pay">Test 4</div>
        </div>
      </div>
    </div>
  )
}

export default Card
