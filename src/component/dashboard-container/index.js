import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categryUpdate,
  categoryDelete
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  render() {
    return(
      <main className='dashboard-container'>
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate} />

        {this.props.categories.map(item =>
          <CategoryItem
            key={item.id}
            categoryUpdate={this.props.categoryUpdate}
            categoryDelete={this.props.categoryDelete}
            category={item}
          /> )
        }
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryUpdate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
