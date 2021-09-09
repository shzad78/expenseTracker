import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTransactions = [
    {amount: 100, desc: 'Cash'},
    {amount: -40, desc: 'book'},
    { amount: -200, desc: 'Camera'}
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)
    function addTransaction(transObj){
            dispatch({
                type: "ADD_TRANSACTION",
                payload: {
                    amount: transOnj.amount,
                    desc: transObj.desc

                }
            })
    }
}

