import type { ItemProps } from '../types/types';

export interface ItemType {
    id: string;    
    title: string;     
    subtitle: string; 
    createdAt: string;
}

const Item  = ({ item, onEdit, onDelete }: ItemProps) => {
    return (
        <div className="flex justify-between items-center p-4 border-b">
            <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
                <p className="text-xs text-gray-400">{item.createdAt}</p>
            </div>
            <div className="space-x-2">
                <button
                    onClick={() => onEdit(item)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Item;
