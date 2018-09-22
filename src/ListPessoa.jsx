import React from "react";
import { Table } from "react-bootstrap";
import ListPessoaItem from "./ListPessoaItem";

const ListPessoa = ({ pessoas }) => (
  <Table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </thead>
    <tbody>
      {pessoas.map(pessoa => (
        <ListPessoaItem pessoa={pessoa} />
      ))}
    </tbody>
  </Table>
);

export default ListPessoa;
