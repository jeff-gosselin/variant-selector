import React, { Component } from 'react';

class ItemDesc extends Component {
  state = {
    hidden: true
  }

  displayToggle = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return (
    <div className="item-desc">
      <p className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id fringilla quam. Mauris tincidunt laoreet est facilisis interdum. Sed egestas scelerisque mi, eu aliquam libero mollis in. Aliquam erat volutpat. Integer bibendum gravida tellus a facilisis.</p>

      <p className={this.state.hidden ? 'hide' : 'label'}>Quisque facilisis elit eget justo luctus pellentesque. Cras ornare ante et maximus aliquam. Cras rhoncus metus aliquet nibh lacinia, ac lobortis est condimentum. Curabitur eu vehicula sem, ac consequat risus. Curabitur odio sem, venenatis vulputate molestie nec, pulvinar ut mi.</p>

      <p className="label uline" onClick={this.displayToggle}>{this.state.hidden ? 'Read More' : 'Read Less'}</p>
    </div>
    );
  }
}

export default ItemDesc;