import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { deleteTask } from '../actions';
import { editTask } from '../actions';
import './TodoList.css';

class TodoList extends React.Component {
    state = { task: '', isEditing: false, key:'' }
  
  onChange = event => {
    this.setState({ task: event.target.value });
    // console.log(this.state.task,'throughState');
    //console.log(event.target.value,'direct') ;
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.task !== '') {
      this.props.addTask(this.state.task);
      this.setState({ task: '' })
    }
  }

  onUpdate = event => {
    event.preventDefault();
      this.props.editTask(this.state.key,this.state.task);
      this.setState({ task: '',isEditing:false })
  }


 /*  onEdit = id => {
    this.props.editTask(this.state.task);
      this.setState({ task: '' })
  } */

  renderList() {
    if(this.state.isEditing){
      return(
        <div className=" search-bar ui segment">
          <form onSubmit={this.onUpdate} className="ui form">
            <div className="field">
              <input
                id='id'
                value={this.state.task}
                placeholder='update Todo'
                onChange={this.onChange}
              />
            </div>
            <button
              className='submitButton'
              type='submit' > Update Todo
            </button>
          </form>
        </div>
      )
    }else{
      return (
        <div className=" search-bar ui segment">
          <form onSubmit={this.onSubmit} className="ui form">
            <div className="field">
              <input
                id='id'
                value={this.state.task}
                placeholder='Enter Todo'
                onChange={this.onChange}
              />
            </div>
            <button
              className='submitButton'
              type='submit' > Add Todo
            </button>
          </form>
        </div>
      )
    }
  }

  tasklist() {
    return this.props.task.map((task, id) => {
      return (
        <div key={id} >
          <li className='item'>
            {task}
            <button
              className='ui button negative'
              onClick={() => this.deleteItem(id)}
            > Delete Task
            </button>

            <button
              className='ui button primary'
              onClick={() => this.editItem(id,{task})}>Edit task
            </button>
          </li>
        </div>
      )
    })
  }

  deleteItem = (id) => {
    this.props.deleteTask(id);
  }

  editItem = (id, updatedList) => {
    
    this.setState ({ 
      isEditing: true,
      key:id,
      task:updatedList.task
    });
    //event.preventDefault();
    //console.log(updatedList);
    //this.props.editTask(id,updatedList);
  }

  render() {
    return (
      <div>
        <div className='ui relaxed divided list'>{this.renderList()}</div>
        <div>{this.tasklist()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return { task: state.task };
  //this.props === { task : state.task }
};

export default connect(mapStateToProps, { addTask, deleteTask,editTask   })(TodoList);
