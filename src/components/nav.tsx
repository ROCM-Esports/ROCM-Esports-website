export function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li className="tabActive"><a href="/">Home</a></li>
                <li className="tabActive"><a href="/teams">Teams</a></li>
                <li className="tabActive"><a href="/goals">Goals</a></li>
                <li className="tabActive"><a href="/partners">Partners</a></li>
                <li className="tabActive"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}