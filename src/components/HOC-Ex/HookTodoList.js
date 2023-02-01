import { SettingsRemote } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import useFilterHook from "./useFilterHook";

const HookTodoList = () => {
    const [term, items, filteredItems, handleChange] = useFilterHook('Todo')
    return (
        <>
            <h3>HOC with hooks - Todo List</h3>
            <div>{'Todos count: '} {filteredItems?.length}</div>
            <input value={term} onChange={handleChange} />
            {filteredItems?.length > 0 ?
                filteredItems.map((item, i) => {
                    return (
                        <div key={i}>{item?.title}</div>
                    )
                })
                :
                <>'Todo list not avaialable'</>}
        </>
    )
}
export default HookTodoList