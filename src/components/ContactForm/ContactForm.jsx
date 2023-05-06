import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) {
      return alert('Form is not valid');
    }

    onAdd({ id: nanoid(), name, phone });
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handleChangeForm}
        />

        <input
          type="tel"
          name="number"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
