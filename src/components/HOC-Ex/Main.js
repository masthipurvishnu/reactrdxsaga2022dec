import React from "react";
import HookTodoList from "./HookTodoList";
import TodoList from "./TodoList";
import TodoListClass from "./TodoListClass";
import UsersList from "./UsersList";
import UsersListClassComponent from "./UsersListClassComponent";

const Main = () => {

    return (
        <>
            <h3>{'HOC Examples'}</h3>
            <div style={{
                float: 'left',
                border: '2px solid green'
            }} >
                <UsersList />
            </div>
            <div style={{
                display: 'block',
                float: 'left',
                border: '2px solid blue'
            }} >
                <TodoList />
            </div>
            <div style={{
                display: 'block',
                float: 'left',
                border: '2px solid blue'
            }} >
                <UsersListClassComponent />
            </div>
            <div style={{
                display: 'block',
                float: 'left',
                border: '2px solid red'
            }}>
                <HookTodoList />
            </div>
            <div style={{
                display: 'block',
                float: 'left',
                border: '2px solid red'
            }}>
                <TodoListClass />
            </div>
        </>
    )
}
export default Main