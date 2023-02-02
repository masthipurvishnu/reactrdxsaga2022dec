import React, { Component } from "react";
import { getDatabase } from "firebase/database";
import { ref, onValue } from 'firebase/database'
import { Table } from 'react-bootstrap'
import { InsertEmoticon } from "@mui/icons-material";
import StartFirebase from "./StartFirebase";
import SocketIOClient from "./SocketIOClient";
const db = StartFirebase()
class RealTimeData extends Component {
    constructor() {
        super()
        this.state = {
            tableData: []
        }
    }
    componentDidMount() {
        const dbRef = ref(db, 'users');
        onValue(dbRef, (snapshot) => {
            let records = []
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key
                let data = childSnapshot.val()
                records.push({ 'key': keyName, 'data': data })
            })
            this.setState({ tableData: records })
        })
    }
    // this updates real time data from firebase db
    // https://console.firebase.google.com/u/0/project/stream-1a578/database/stream-1a578-default-rtdb/data
    render() {
        const data = this.state?.tableData
        return (
            <>
                <h3>{'Real Time Data'}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>fullName</th>
                            {/* <th>Phone#</th>
                            <th>DOB</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 && data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.key}</td>
                                    <td>{item.data.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <SocketIOClient />
            </>
        )
    }

}
export default RealTimeData