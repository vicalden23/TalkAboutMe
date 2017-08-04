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

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeQuote = this.handleChangeQuote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  handleChangeUrl(event) {
    this.setState({
      url: event.target.value
    });
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleChangeQuote(event) {
    this.setState({
      quote: event.target.value
    });
  }

  handleSubmit() {
    console.log(this.state.name);
    console.log(this.state.url);

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' type="text" value={this.state.name} onChange={this.handleChangeName}/>
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder='www.image.com' type="text" value={this.state.url} onChange={this.handleChangeUrl}/>
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