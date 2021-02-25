const React = require('react');
const List = require('../../components/List');

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
      <List itemList={itemList} openModal={openModal} />
    </React.Fragment>
  );
};

module.exports = App;
