import Item from './Item';
import type { ItemListProps } from '../types/types';

const ItemList = ({ items, onEdit, onDelete }: ItemListProps) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ItemList;
