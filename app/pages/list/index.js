const React = require('react');

// Data
const itemList = [
  {
    id: 1,
    name: 'Martian Firma',
    budget: 10000.0,
    budget_spent: 4500.0,
    date_of_first_purchase: '2119-07-07',
  },
  {
    id: 2,
    name: 'Solar Firma',
    budget: 1123.22,
    budget_spent: 451.3754,
    date_of_first_purchase: '2120-01-14',
  },
];

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <React.Fragment>
      <table className='item-list'>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Date of a first purchase</th>
            <th>Total budget</th>
            <th>Budget spent</th>
            <th>Budget left</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr id={item.id} onClick={openModal}>
              <td>{item.name}</td>
              <td>{item.date_of_first_purchase}</td>
              <td>{item.budget}</td>
              <td>{item.budget_spent}</td>
              <td>{item.budget - item.budget_spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

module.exports = App;
