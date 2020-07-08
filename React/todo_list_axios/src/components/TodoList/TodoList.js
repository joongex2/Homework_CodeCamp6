import React, { useState, useEffect } from 'react'
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd'
import _ from 'lodash'
import axios from '../../config/axios'
import Todo from './Todo';

const { Text } = Typography;

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState("");

    const fetchTodoList = async () => {
        const httpResponse = await axios.get("/todo-list");
        setTodoList(httpResponse.data);
    }

    useEffect(() => {
        fetchTodoList();
    }, [])

    const addTodoItem = async () => {
        await axios.post("/todo-list", {task: inputField});
        fetchTodoList();
    }

    const deleteTodoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`);
        fetchTodoList();
    }

    // useEffect(() => {
    //     setTodoList([
    //         {
    //             id: 1,
    //             task: "Do Homework"
    //         },
    //         {
    //             id: 2,
    //             task: "Play Football"
    //         },
    //         {
    //             id: 3,
    //             task: "Play Game"
    //         },
    //         {
    //             id: 4,
    //             task: "Read Book"
    //         }
    //     ]);
    // }, []);

    // const addTodoItem = () => {
    //     const newTodoList = [...todoList];
    //     newTodoList.push({
    //         id: _.uniqueId(),
    //         task: inputField,
    //     });
    //     setTodoList(newTodoList);
    //     setInputField("");
    // }

    // const deleteTodoItem = (id) => {
    //     // 1. filter
    //     // const newTodoList = todoList.filter(todo => todo.id !== id);
    //     // setTodoList(newTodoList);

    //     // 2. find + splice
    //     const newTodoList = [...todoList];
    //     const targetIndex = newTodoList.find(todo => todo.id === id);
    //     newTodoList.splice(targetIndex, 1);
    //     setTodoList(newTodoList);
    // }

    return (
        <Row justify="center">
            <Col>
                <Row>
                    <Text type="warning">กรุณาใส่ item ที่ต้องการลงใน list</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}><Input value={inputField} onChange={(e) => setInputField(e.target.value)} /></Col>
                    <Col span={4}>
                        <Button style={{ width: "100%" }} onClick={addTodoItem}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <List
                        style={{ width: '450px' }}
                        header={<div>Todo List Page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo delete={deleteTodoItem} todo={todo} fetchData={fetchTodoList}/>
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    )
}
