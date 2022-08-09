import navItems from "./navItems";
import './Nav.scss'


const Nav = () => {
    return(
        <nav>
            <h1 className="nav-header">Blockstart</h1>
            <ul className="nav-items">
            {navItems.map(item => (
                <li key={item.id} className={item.className}>{item.name}</li>
            ))}
            <button className="nav-button">Connect Wallet</button>
            </ul>
            
        </nav>
    )
}

export default Nav;