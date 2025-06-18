// https://ui.shadcn.com/view/sidebar-07#
// https://ui.shadcn.com/docs/components/sidebar
// https://app.logsnag.com/dashboard/684da036a08ab9dbefb7d97c/product/summary
// https://www.radix-ui.com/primitives/docs/overview/getting-started

function App() {
  return (
    <div className="bg-background">
      <div className="sidebar-wrapper">
        <div className="sidebar-container">
          <div className="sidebar">
            <nav className="sidebar-links">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </nav>
            <div className="sidebar-">Icons</div>
          </div>
        </div>
        <main className="main">
          <header className="main-header">Header</header>
          <div className="main-content">Main</div>
        </main>
      </div>
    </div>
  );
}

export default App;
