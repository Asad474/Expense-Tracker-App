import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const formHandler = event => {
        event.preventDefault();
        addTransaction({ 
            id: uuid(),
            text, 
            amount: parseInt(amount),
        });
    };

    return (
        <>
            <h3>Add new transaction</h3>

            <form id="form" onSubmit={formHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        name={text} 
                        onChange={event => setText(event.target.value)} 
                        placeholder="Enter text..." 
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>

                    <input 
                        type="number" 
                        name={amount} 
                        onChange={event => setAmount(event.target.value)}
                        placeholder="Enter amount..." 
                    />  
                </div>

                <button className="btn">Add transaction</button>
            </form>      
        </>
    );
};

export default AddTransaction;