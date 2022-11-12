import { NavLink } from "react-router-dom";
// import ReactPlayer from 'react-player/youtube'
// import AudioPlayer from "./AudioPlayer";
// import tracks from "./tracks";

const Navbar = () => {
    let activeStyle = {
        color: "cyan"
    }
    // const vidstyle = {
    //     margin: '20px 10px 30px 40px'
    // };
    return (
        <header>
            <div className="container">
                {/* <div className="vid">
                    <ReactPlayer style={vidstyle} controls width='220px' height='130px' url='https://www.youtube.com/watch?v=2Vv-BfVoq4g' />

                </div> */}
                {/* <AudioPlayer tracks={tracks} /> */}
                <div className="wrapper">
                    <div className="neon-wrapper">
                        <span className="txt">Memories of us</span>
                        <span className="gradient"></span>
                        <span className="dodge"></span>
                    </div>
                </div>
                {/* <h1 className="title">Memories of us</h1> */}

                <div className="links">
                    <NavLink to='/us' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        <h4 className="linkss">us</h4>
                    </NavLink>
                    <NavLink to='/memories' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        <h4 className="linkss">memories</h4>
                    </NavLink>
                    <NavLink to='/special' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        <h4 className="linkss">special</h4>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Navbar;