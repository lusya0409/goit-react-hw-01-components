import {
  TableBody,
  TableHead,
  TableTransactionHistory,
  TableRow,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransactionHistory>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        ))}
      </TableBody>
    </TableTransactionHistory>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
