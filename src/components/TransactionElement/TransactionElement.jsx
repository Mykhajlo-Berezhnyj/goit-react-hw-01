import css from './TransactionElement.module.css'

const TransactionElement = ({type, amount, currency}) => {
    return (
        <tr>
            {[type, amount, currency].map((value, index) => (
              <td key={index} className={css['td-transactionElement']}>{value}</td>
            ))}
        </tr>
    );
};

export default TransactionElement;