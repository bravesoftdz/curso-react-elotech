import React from "react";
import { Form, Button } from "react-bootstrap";

const FormPessoa = ({ nome, idade, onChange, adicionar }) => (
  <Form>
    <Form.Group controlId="nome">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" name="nome" value={nome} onChange={onChange} />
    </Form.Group>
    <Form.Group controlId="nome">
      <Form.Label>Idade</Form.Label>
      <Form.Control
        type="number"
        name="idade"
        value={idade}
        onChange={onChange}
      />
    </Form.Group>
    <Button variant="primary" type="button" onClick={adicionar}>
      Adicionar
    </Button>
  </Form>
);

export default FormPessoa;
