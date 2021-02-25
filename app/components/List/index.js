

const React = require('react');
const PropTypes = require('prop-types');

const List = ({ itemList, openModal }) => (
  <table className="item-list">
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
      {itemList.map(item => (
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
);


/**
 * Prop Types
 */
List.propTypes = {
  itemList: PropTypes.shape(PropTypes.array),
  openModal: PropTypes.func,
};

/**
 * Default Props
 */

List.defaultProps = {
  itemList: [],
  openModal: () => {
    console.log('Opened Modal');
  },
};

module.exports = List;
