import React from "react";

const ListPessoaItem = ({ pessoa }) => (
  <tr key={pessoa.nome}>
    <td>{pessoa.nome}</td>
    <td>{pessoa.idade}</td>
  </tr>
);

export default ListPessoaItem;
