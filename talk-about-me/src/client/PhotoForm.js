import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class PhotoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder='www.image.com' />
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