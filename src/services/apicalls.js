import axios from "axios";
import {appData, tableData} from "../middleware/api.js"

export const fetchAppData = () => {
    return new Promise((resolve, reject) => {
        axios.get(appData).then((response) => {
            console.log("Api1::::::", response);
            resolve(response.data);
        }).catch((err) => reject(err))
    })
}

export const fetchTableData = (fromDate, toDate) => {
    return new Promise((resolve, reject) => {
        axios.get(tableData, {
            params: {
                fromdate: fromDate,
                toDate: toDate
            }
        }).then((response) => {
            console.log("TableData1::::::", response);
            resolve(response.data);
        }).catch((err) => reject(err))
    })
}

