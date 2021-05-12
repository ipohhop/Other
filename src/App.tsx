import React from 'react';
import './App.css';
import NavMenu from "./component/nav_menu/NavMenu";
import BodyRoot from "./component/body/BodyRoot";


function App() {
    return (
        <div className="root_container">
            <section className="nav-menu__root">
                <NavMenu/>
            </section>
            <aside className="body__root">
                <BodyRoot/>
            </aside>

        </div>
    );
}

export default App;
