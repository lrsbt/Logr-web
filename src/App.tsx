// https://ui.shadcn.com/view/sidebar-07#
// https://ui.shadcn.com/docs/components/sidebar
// https://app.logsnag.com/dashboard/684da036a08ab9dbefb7d97c/product/summary
// https://www.radix-ui.com/primitives/docs/overview/getting-started

import logo from "./assets/images/logo_1.png";
import {
  LiInboxIn,
  LiMagnifer,
  LiHashtag,
  LiServerSquare,
  LiUserCircle,
  LiHomeAngle,
} from "solar-icon-react/li";

function App() {
  return (
    <div className="bg-background">
      <div className="sidebar-wrapper">
        <div className="sidebar-container">
          <div className="sidebar">
            <nav className="sidebar-main">
              <div className="sidebar-logo">
                <img src={logo} className="sidebar-logoImage" />
              </div>
              <ul className="sidebar-main-items">
                <li className="sidebar-main-item">
                  <a href="#">
                    <LiHomeAngle />
                  </a>
                </li>
                <li className="sidebar-main-item">
                  <a href="#">
                    <LiServerSquare />
                  </a>
                </li>
                <li className="sidebar-main-item">
                  <a href="#">
                    <LiUserCircle />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="sidebar-sub">
              <h2 className="sidebar-sub-h2">activity</h2>
              <ul className="sidebar-sub-items">
                <li className="sidebar-sub-item active">
                  <a href="#">
                    <LiInboxIn />
                    <span>feed</span>
                  </a>
                </li>
                <li className="sidebar-sub-item">
                  <a href="#">
                    <LiMagnifer />
                    <span>Search</span>
                  </a>
                </li>
              </ul>
              <h3 className="sidebar-sub-h3">channels</h3>
              <ul className="sidebar-sub-items">
                <li className="sidebar-sub-item">
                  <a href="#">
                    <LiHashtag />
                    <span>heartbeat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main className="main">
          <header className="main-header">
            <h2>feed</h2>
          </header>
          <div className="main-content">Main</div>
        </main>
      </div>
    </div>
  );
}

export default App;
