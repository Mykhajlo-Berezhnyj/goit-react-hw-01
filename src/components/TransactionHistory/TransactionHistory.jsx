import TransactionElement from '../TransactionElement/TransactionElement';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (<table className={css.table}>
        <thead className={css.thead}>
            <tr className={css.tr}>
                <th className={css.th}>Type</th>
                <th className={css.th}>Amount</th>
                <th className={css.th}>Currency</th>
            </tr>
        </thead>

        <tbody className={css.tbody}>
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