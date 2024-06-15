import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
   
    return (
        <table className={css.table}>
  <thead>
    
      <th className={css.style}>Type</th>
      <th className={css.style}>Amount</th>
      <th className={css.style}>Currency</th>
    
  </thead>

  <tbody>
    {items.map((item)=> {
        return (
            <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        )
    })}
   
   
  </tbody>
</table>

    );

};


export default TransactionHistory;

