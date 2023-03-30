import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { BiPencil } from "react-icons/bi";
import { BiSave } from "react-icons/bi";

const User = () => {
    
    const [modifyFlag, setModifyFlag] = useState(false);
    const [introModifyFlag, setIntroModifyFlag] = useState(false);

    const [saveUser, setSaveUser] = useState(
        JSON.parse(localStorage.getItem('saveUser')) || {}
    );

    const [saveIntro, setSaveIntro] = useState(
        JSON.parse(localStorage.getItem('saveIntro')) || {}
    );

    useEffect(
        () => {
            localStorage.setItem("saveUser", JSON.stringify(saveUser));
        },[saveUser]
    );

    useEffect(
        () => {
            localStorage.setItem("saveIntro", JSON.stringify(saveIntro));
        },[saveIntro]
    );



    const Input = (e) => {
        const { name, value } = e.target;
        setSaveUser({...saveUser, [name]: value});
    };

    const ItroInput = (e) => {
        const { name, value } = e.target;
        setSaveIntro({...saveIntro, [name]: value});
    }

    const Modify = () => {
        setModifyFlag(true);
    };


    const Save = () => {
        setModifyFlag(false);
    };

    const IntroModify = () => {
        setIntroModifyFlag(true);
    };


    const IntroSave = () => {
        setIntroModifyFlag(false);
    };

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
                                    <input type="text" css={S.InfoInput} onChange={Input} name="name"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                        value={saveUser.name}
                                    />
                                )}
                            </div>
                            <div css={S.InfoContent}>
                                <label for="e-mail">e-Mail</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={Input} name="eMail"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                        value={saveUser.eMail}
                                    />
                                )}
                            </div>
                        </div>
                        <div css={S.InfoContentRight}>
                            <div css={S.InfoContent}>
                                <label for="phone">Phone</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={Input} name="phone"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                        value={saveUser.phone}
                                    />
                                )}
                            </div>
                            <div css={S.InfoContent}>
                                <label for="github">GitHub</label>
                                {modifyFlag ? (
                                    <input type="text" css={S.InfoInput} onChange={Input} name="github"/>
                                ) : (
                                    <input
                                        type="text"
                                        css={S.InfoInput}
                                        disabled
                                        value={saveUser.github}
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
                            <textarea css={S.ItroduceInput} onChange={ItroInput} name="intro"></textarea>
                        ) : (
                            <textarea css={S.ItroduceInput} disabled value={saveIntro.intro}></textarea>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
