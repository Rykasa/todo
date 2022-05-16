import { useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'

type ListItemProps = {
  item: Item
}

export const ListItem = ({ item }: ListItemProps) =>{
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox" 
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  )
}