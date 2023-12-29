// import { useEffect, useState } from "react";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import NewSection from "../NewSection/NewSection";
import Slider from "../SliderSection/Slider";
import './Home.css';
import Parallax from "./Parallax/Parallax";


const Home = () => {
    // const [theme, setTheme] = useState(false);

    // const handleMood = () => {
    //     setTheme(!theme)
    // }
    // useEffect(() => {
    //     if (theme == true) {
    //         document.body.classList.add("dark");
    //     }
    //     else {
    //         document.body.classList.remove("dark");
    //     }
    // })

    return (
        <>
            {/* <div className="form-control pt-20">
                <button onClick={handleMood}>
                    <label className="label justify-end cursor-pointer px-10">
                        {theme ? "light" : "dark"}<input type="checkbox" className="toggle ms-2" checked />
                    </label>
                </button>
            </div> */}
            <div>
                <Slider />
            </div>
            <div>
                <Classes />
            </div>
            <div>
                <Instructors />
            </div>
            <div>
                <NewSection />
            </div>
            <div>
                <Parallax/>
                {/* <Count/> */}
            </div>
        </>
    );
};

export default Home;