import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { BiPlus } from 'react-icons/bi';
import { RiFileLine } from 'react-icons/ri';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { motion } from "framer-motion"


const Todo = () => {
    const [modifyIsOpen, setModifyIsOpen] = useState(false);
    const [removeIsOpen, setRemoveIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    const todoId = useRef(1);
    
    useEffect(() => {
        if (storedTodoList && storedTodoList.length > 0) {
            setTodoList(storedTodoList);
            const lastItem = storedTodoList[storedTodoList.length - 1]
            todoId.current = lastItem.id + 1;
        } 
    }, []);
    

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: '',
        date: '',
        time: ''
        
    });
    
    const [removeTodo, setRemoveTodo] = useState({
        id: 0,
        content: '',
        date: '',
        time: ''
    });
    
    const [input, setInput] = useState({
        id: 0,
        content: '',
        date: '',
        time: ''
    });
    
    const [todoList, setTodoList] = useState([]);
    
    

    useEffect(
        () => {
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }, [todoList]
    );

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value
        })
    }
    
    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }
    
    const onAdd = () => {
        const now = new Date();
        const convertDay = (day) => {
            return day === 0 ? "일" 
            : day === 1 ? "월"
            : day === 2 ? "화"
            : day === 3 ? "수"
            : day === 4 ? "목"
            : day === 5 ? "금" : "토";
        }
        const todo = {
            ...input,
            id: todoId.current++,
            date: `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}(${convertDay(now.getDay())})`,
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        }
        setTodoList([...todoList, todo]);
        setInput({...input, content: ''});

    }

    const onRemove = (id) => {
        setTodoList(todoList.filter(
            todo => {
                return todo.id !== id;
            }
        ))
        setRemoveIsOpen(false);
    }

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo => {
                    if(todo.id === modifyTodo.id) {
                        todo.content = modifyTodo.content;
                    }
                    return todo;
                }
            )
        )
    }

    const modifyOpenModal = (id) => {
        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0])
        setModifyIsOpen(true);
    }
    
    const modifyCloseModal = () => {
        setModifyIsOpen(false);
    }

    const contentChange = (e) => {
        setModalContent(e.target.value)
    }

    const onSubmitKeyup = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        updateTodo({
            id: modifyTodo.id,
            content: modalContent
        });
        modifyCloseModal();
    }

    const removeOpenModal = (id) => {
        setRemoveTodo(todoList.filter(
            todo => todo.id === id
        )[0])
        setRemoveIsOpen(true);
    }

    const removeCloseModal = () => {
        setRemoveIsOpen(false);
    }

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <div css={S.MainContainer}>
                    <header css={S.MainHeader}>
                        <h1 css={S.MainTitle}>ToDo</h1>
                        <div css={S.TodoInputContainer}>
                            <div css={S.InputIcon}><RiFileLine /></div>
                            <input type="text" css={S.TodoInput} placeholder="Please enter todo..." onChange={onChange} onKeyUp={onKeyUp} value={input.content}/>
                            <button css={S.AddButton} onClick={onAdd}><BiPlus /></button>
                        </div>
                    </header>
                    <ul css={S.TodoListContainer}>
                        {todoList.map(
                            todo => {
                                return(
                                    <li css={S.TodoContents}>
                                        <div css={S.ContentHeader}>
                                            <div css={S.TodoDate}>{todo.date}</div>
                                            <div css={S.TodoTime}>{todo.time}</div>
                                        </div>
                                        <div css={S.ContentMain}>
                                            <div>{todo.content}</div>
                                        </div>
                                        <div css={S.ContentFooter}>
                                            <button css={S.ActiveButton} onClick = {() => {modifyOpenModal(todo.id)}}><BiPen /></button>
                                            <button css={S.ActiveButton} onClick = {() => {removeOpenModal(todo.id)}}><TiTrash/></button>
                                        </div>   
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
                {modifyIsOpen ? 
                    <div css={S.modalContainer}>
                        <div css={S.modelBox}>
                            <header css={S.modalHeader}>
                                <h1 css={S.modalTitle}>'Todo 수정'</h1>
                            </header>
                            <main css={S.modalMain}>
                                <input css={S.modifyModalInput} type="text" onChange={contentChange} onKeyUp={onSubmitKeyup} defaultValue={modifyTodo.content}/>
                            </main>
                            <footer css={S.modalFooter}>
                                <button css={S.modalButton} onClick={onSubmit}>확인</button>
                                <button css={S.modalButton} onClick={modifyCloseModal}>취소</button>
                            </footer>
                        </div>
                    </div> : ''
                }
                {removeIsOpen ? 
                    <div css={S.modalContainer}>
                        <div css={S.modelBox}>
                            <header css={S.modalHeader}>
                                <h1 css={S.modalTitle}>'Todo 삭제'</h1>
                            </header>
                            <main css={S.modalMain}>
                                <p css={S.removeMessage}>Todo를 삭제하시겠습니까?</p>
                            </main>
                            <footer css={S.modalFooter}>
                                <button css={S.modalButton} onClick ={() => {onRemove(removeTodo.id)}}>확인</button>
                                <button css={S.modalButton} onClick={removeCloseModal}>취소</button>
                            </footer>
                        </div>
                    </div> : ''
                } 
            </motion.div>  
        </>
    );
};

export default Todo;