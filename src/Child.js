import React, {useContext} from 'react';
import { TransactionContext } from './transContext';

export default function Child() {
let transactions = useContext(TransactionContext)

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <h3>Your Balance <br/> $ 260</h3>

            <div className= "expense-container">

                <h3>
                INCOME <br/> 240
                </h3>
                <h3>
                EXPENSE <br/> $ 500
                </h3>
            </div>
            <h3>History</h3>
            <ul className="transaction-list">
                {transactions.map((transObj, ind)=>{
                    return(
<li>
                    <span>{transObj.desc}</span>
                    <span>{transObj.amount}</span>
                </li>
                    )
                })}
                
                
            </ul>

            <hr/>
            <h3>Add new Transaction</h3>
            <hr/>

            <form className= 'transaction-form'>
                <label>Enter Description<br/>
                <input type= "text" required / >
                </label>
                <br/>
                <label>Enter amount<br/>
                <input type= "number" required />
                </label>
                <br/>
                <input type= "submit" value= "Add Transaction" />
            </form>
        </div>
    )
}
