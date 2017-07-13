import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class PhotoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      age: 0,
      quote: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name,
      url: event.target.url});
  }

  handleSubmit() {
    console.log(this.state.url);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' type="text" name={this.state.name} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder='www.image.com' type="text" url={this.state.url} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Quote</label>
          <input />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
};

export default PhotoForm;