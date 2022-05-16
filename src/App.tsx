import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

export const App = () =>{
  const [list, setLsit] = useState<Item[]>([
    {id: 1, name: 'Limpar a casa', done: false},
    {id: 2, name: 'Fazer compras', done: false}
  ]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setLsit(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) =>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}