import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type Props = {
    item: Item
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item,onChange }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}