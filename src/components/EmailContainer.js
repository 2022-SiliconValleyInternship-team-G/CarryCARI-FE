import {useNavigate} from "react-router-dom";
import CommonButton from "../components/CommonButton";
import styled from "styled-components";
import SmallButton from "../components/SmallButton";
import React, {useState, useRef} from "react";
import axios from "axios";
import {AddressLink} from "../utils/addressLink";

const EmailContainer1 = styled.div`
    @media all and (max-width: 600px) and (orientation: portrait) {
        display: grid;
        grid-template-rows: 1fr 2fr;
        place-items: start center;
    }
`;
const EmailSubContainer1 = styled.div`
    @media all and (max-width: 600px) and (orientation: portrait) {
        display: grid;
        grid-template-rows: 1fr 1fr;
        place-items: start center;
    }
`;
const EmailContainer2 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center center;
`;
const Title = styled.div`
    font-size: 4vmin;
    font-weight: bold;

    @media all and (max-width: 600px) and (orientation: portrait) {
        font-size: 7vmin;
        text-align: center;
        margin-bottom: 20px;
    }
`;
const InputLine = styled.input`
    font-family: "Roboto";
    border-radius: 5px;
    border: none;

    font-size: 2.5vmin;
    width: 40vw;
    margin-right: 10px;

    @media all and (max-width: 600px) and (orientation: portrait) {
        width: 90vw;
        font-size: 4vmin;
        margin: 10px;
    }
`;

const EmailContainer = (userFeature) => {
    const navigate = useNavigate();

    const emailPart = useRef();
    const [emailInput, setEmailInput] = useState("");
    const [emailSubmit, setEmailSubmit] = useState(false);

    const submitEmail = () => {
        if (emailInput.indexOf("@") === -1) {
            alert("please check your email");
            emailPart.current.focus();
        } else {
            axios
                .post(AddressLink + "/cari/email", {
                    user_id: userFeature.id,
                    user_email: emailInput,
                })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        setEmailSubmit(true);
                        setEmailInput("");
                    } else {
                        alert("Fail to submit Email");
                        setEmailInput("");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert("Fail to submit Email");
                    setEmailInput("");
                });
        }
    };

    const handleEmail = (e) => {
        setEmailInput(e.target.value);
    };

    return (
        <>
            {emailSubmit ? (
                <EmailContainer2>
                    <Title>Your email has been submitted successfully.</Title>
                    <CommonButton
                        text={"go to the main"}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </EmailContainer2>
            ) : (
                <EmailContainer1>
                    <Title>
                        If you enter your Email,
                        <br />
                        we will send the result later
                    </Title>
                    <EmailSubContainer1>
                        <InputLine
                            placeholder="Enter your Email"
                            onChange={handleEmail}
                            type="email"
                            value={emailInput}
                            ref={emailPart}
                        />
                        <SmallButton text="submit" onClick={submitEmail} />
                    </EmailSubContainer1>
                </EmailContainer1>
            )}
        </>
    );
};

export default React.memo(EmailContainer);
