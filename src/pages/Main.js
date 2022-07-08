import {useNavigate} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import MyHeader from "../components/MyHeader";

const Main = () => {
    const navigate = useNavigate();
    return (
        <div className="Main">
            <MyHeader />
            <div className="main1">
                <div>
                    <h2>Create your own Caricature</h2>
                    <div>
                        Upload your picture, and make your own caricature.
                        <br />
                        Try out this function by clicking the button below!
                    </div>
                    <CommonButton
                        text={"create"}
                        onClick={() => {
                            navigate("/upload?case=1");
                        }}
                    />
                </div>
                <div>
                    <img alt="func1_img" src={require("../assets/img1.png")} style={{width: "256px"}}></img>
                </div>
            </div>
            <div className="main2">
                <div>
                    <img alt="func2_img" src={require("../assets/img2.png")} style={{width: "256px"}}></img>
                </div>
                <div>
                    <h2>Create your own Caricature</h2>
                    <div>
                        Upload your picture, and make your own caricature.
                        <br />
                        Try out this function by clicking the button below!
                    </div>
                    <CommonButton
                        text={"create"}
                        onClick={() => {
                            navigate("/upload?case=2");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
