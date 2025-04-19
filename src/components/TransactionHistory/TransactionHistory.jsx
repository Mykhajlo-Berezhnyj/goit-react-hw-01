import TransactionElement from '../TransactionElement/TransactionElement';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (<table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((transaction) => (
                <TransactionElement
                    key = {transaction.id}
                    type={transaction.type}
                    amount = {transaction.amount}
                    currency = {transaction.currency}
                />
            ))}
        </tbody>
    </table>

    );
};

export default TransactionHistory;