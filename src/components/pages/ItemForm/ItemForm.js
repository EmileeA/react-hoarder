import React from 'react';

import './ItemForm.scss';
import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

class ItemForm extends React.Component {
  state = {
    itemName: '',
    itemDescription: '',
    itemUrl: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  urlChange = (e) => {
    e.preventDefault();
    this.setState({ itemUrl: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveItemEvent = (e) => {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemUrl,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    itemsData.saveItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((error) => console.error('err from save item event', error));
  }

  render() {
    const { itemName, itemDescription, itemUrl } = this.state;

    return (
      <div className="ItemForm">
        <form className="ItemForm">
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input
            type="text"
            className="form-control col-4 m-auto"
            id="item-name"
            placeholder="Enter item name"
            value={itemName}
            onChange={this.nameChange}
            >
            </input>
            <label htmlFor="item-name">Item Image url</label>
            <input
            type="text"
            className="form-control col-4 m-auto"
            id="item-url"
            placeholder="Enter item image url"
            value={itemUrl}
            onChange={this.urlChange}
            >
            </input>
            <label htmlFor="item-description">Item Description</label>
            <input
            type="text"
            className="form-control col-4 m-auto"
            id="item-description"
            placeholder="Enter item description"
            value={itemDescription}
            onChange={this.descriptionChange}
            >
            </input>
          </div>
          <button className="btn btn-dark" onClick={this.saveItemEvent}>Save Item</button>
        </form>
       </div>
    );
  }
}

export default ItemForm;
