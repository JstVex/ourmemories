import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player/youtube'
// import AudioPlayer from "./AudioPlayer";
// import tracks from "./tracks";

const Navbar = () => {
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
                    <Link to='/'>
                        <h4 className="linkss">us</h4>
                    </Link>
                    <Link to='/memories'>
                        <h4 className="linkss">memories</h4>
                    </Link>
                    <Link to='/special'>
                        <h4 className="linkss">special</h4>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;