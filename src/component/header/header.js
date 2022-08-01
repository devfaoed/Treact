import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-brands-svg-icons"
import {faNoteSticky} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return(
        <section className="header">
            <div className="headerDesc">
                <h2 className="headerHead">Free Modern React Templates for every need.</h2>
                <p className="headerPara">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                </p>

                <div className="headerOther">
                    <div className="headerPro">
                        <p><FontAwesomeIcon icon={faNoteSticky} /> 7 Landing Page Demos </p>
                        <p><FontAwesomeIcon icon={faNoteSticky} /> 52 Components </p>
                        <p><FontAwesomeIcon icon={faNoteSticky} /> Fully Responsive </p>
                    </div>

                    <div className="headerPro">
                        <p><FontAwesomeIcon icon={faNoteSticky} /> 8 Inner Pages </p>
                        <p><FontAwesomeIcon icon={faNoteSticky} /> Uses TailwindCSS </p>
                        <p><FontAwesomeIcon icon={faNoteSticky} /> Fully Customizable </p>
                    </div>
                </div>

                <div className="headerButton">
                        <button className="primary"> Explore Demos </button>
                        <button className="default"> View Components </button>
                </div>
            </div>

            <div className="headerDesc">
                <img src="./image/p-3.jpg" alt="" className="headerImg"/>
            </div>
            
        </section>
    )
}

export default Header