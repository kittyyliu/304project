import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  font-weight: bold;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

const PlayerTable = ({ players }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Username</Th>
          <Th>Country</Th>
          <Th>Wins</Th>
          <Th>Losses</Th>
        </Tr>
      </thead>
      <tbody>
        {players.map(player => (
          <Tr key={player.username}>
            <Td>{player.username}</Td>
            <Td>{player.country}</Td>
            <Td>{player.wins}</Td>
            <Td>{player.losses}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayerTable;
