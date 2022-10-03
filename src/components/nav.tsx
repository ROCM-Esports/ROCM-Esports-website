import Link from "next/link" 
export function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li className="tabActive"><Link href="/">Home</Link></li>
                <li className="tabActive"><Link href="/teams">Teams</Link></li>
                <li className="tabActive"><Link href="/goals">Goals</Link></li>
                <li className="tabActive"><Link href="/partners">Partners</Link></li>
                <li className="tabActive"><Link href="/contact">Contact</Link></li>
                <li className="tabActive"><Link href="/shop">Shop</Link></li>
            </ul>
        </nav>
    );
}