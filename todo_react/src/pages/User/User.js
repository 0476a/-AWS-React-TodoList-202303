import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { BiPencil } from "react-icons/bi";
import { BiSave } from "react-icons/bi";

const User = () => {
    
    const [modifyFlag, setModifyFlag] = useState(false);
    const [introModifyFlag, setIntroModifyFlag] = useState(false);

    const storedSaveUser = JSON.parse(localStorage.getItem('userInfo'));
    
    useEffect(() => {
        if(storedSaveUser){
            setSaveUser(storedSaveUser)
        }
    }, []);
    
    const user = {
        name: '',
        eMail: '',
        phone: '',
        github: '',
    }

    const [inputs, setInputs] = useState(user);
    const [saveUser, setSaveUser] = useState(null);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    } 

    const Modify = () => {
        setModifyFlag(true);
    };

    const Save = () => {
        const user = {
            ...inputs
        };
        setSaveUser(user);
        setModifyFlag(false);
    };

    const IntroModify = () => {
        setIntroModifyFlag(true);
    };

    const IntroSave = () => {
        setIntroModifyFlag(false);
    };

    useEffect(
        () => {
            localStorage.setItem("userInfo", JSON.stringify(saveUser));
        }, [saveUser]
    );

    return (
        <>
            <div css={S.MainContainer}>
                <header css={S.MainHeader}>
                    <h1 css={S.MainTitle}>User Information</h1>
                </header>
                <div css={S.InfoPhoto}>
                    <img src="img/user.png" />
                </div>
                <div css={S.InfoMain}>
                    <h1 css={S.InfoTitle}>
                        About Me
                        {modifyFlag ? (
                            <button css={S.Button} onClick={Save}>
                                <BiSave />
                            </button>
                        ) : (
                            <button css={S.Button} onClick={Modify}>
                                <BiPencil />
                            </button>
                        )}
                    </h1>
                    <div css={S.InfoContentContainer}>
                        <div css={S.InfoContentLeft}>
                            <div css={S.InfoContent}>
                                <label for="name">Name</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={inputHandler} name="name"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                    />
                                )}
                            </div>
                            <div css={S.InfoContent}>
                                <label for="e-mail">e-Mail</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={inputHandler} name="eMail"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                    />
                                )}
                            </div>
                        </div>
                        <div css={S.InfoContentRight}>
                            <div css={S.InfoContent}>
                                <label for="phone">Phone</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={inputHandler} name="phone"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                    />
                                )}
                            </div>
                            <div css={S.InfoContent}>
                                <label for="github">GitHub</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={inputHandler} name="github"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 css={S.InfoTitle}>
                            Self Introdution
                            {introModifyFlag ? (
                                <button css={S.Button} onClick={IntroSave}>
                                    <BiSave />
                                </button>
                            ) : (
                                <button css={S.Button} onClick={IntroModify}>
                                    <BiPencil />
                                </button>
                            )}
                        </h1>
                        {introModifyFlag ? (
                            <textarea css={S.ItroduceInput}></textarea>
                        ) : (
                            <textarea css={S.ItroduceInput} disabled></textarea>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
