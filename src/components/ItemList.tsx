import React from 'react';
import Item from './Item';

export interface ItemType {
    id: string;        // شناسه یکتا برای هر آیتم
    title: string;     // عنوان آیتم
    subtitle: string;  // زیرعنوان آیتم
    createdAt: string; // تاریخ و زمان ایجاد آیتم به فرمت ISO string
}

interface ItemListProps {
    items: ItemType[];
    onEdit: (item: ItemType) => void;
    onDelete: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ItemList;
