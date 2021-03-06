import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  background-color: #2BB98C;
  padding: 1rem;
  width: 400px;
  text-align: left;
`;

export default class extends Component {
  render() {
    //const { title, content } = this.props;
    return (<Container>
      <h4>{this.props.title}</h4>
      <p>{this.props.content}</p>
      {this.props.footer}
      </Container>)
  }
}