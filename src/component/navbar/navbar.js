import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarDesc">
                <h2 classNAme="navbarHead">Treact</h2>

                <ul>
                    <li className="one">License & Usage</li>
                    <li className="two">Who Am I?</li> 
                    <li className="three">Twitter</li>
                    <li className="four">Hire Me!</li>
                    <li className="active">Download Now</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar