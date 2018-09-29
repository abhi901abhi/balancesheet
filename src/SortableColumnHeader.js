import React from 'react';
import './SortableColumnHeader.css';

class SortableColumnHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.onSort(e.target.name, this.props.colName);
  }
  render() {
    return (
      <td>
        <label>{this.props.colName}</label>
        <button onClick={this.handleClick} name="asc">ASC</button>
        <button onClick={this.handleClick} name="desc"> DESC</button >
      </td >
    );
  }
}

export default SortableColumnHeader;