import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }
  onValueChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form className='add-form d-flex'>
          <input
            type='text'
            name='name'
            value={name}
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            onChange={this.onValueChanges}
          />
          <input
            type='number'
            name='salary'
            value={salary}
            className='form-control new-post-label'
            placeholder='З/П в $?'
            onChange={this.onValueChanges}
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
