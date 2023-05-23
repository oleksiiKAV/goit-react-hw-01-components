import PT from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ cardPays }) => {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Transaction History
      </h2>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {cardPays.map(({ type, amount, currency, id }) => (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  cardPays: PT.arrayOf(PT.objectOf(PT.string)),
};

export default TransactionHistory;
