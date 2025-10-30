import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import ItemList from './components/ItemList';
import Modal from './components/Modal';
import type { ItemType } from './components/Item';

const App: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ItemType | null>(null);

  const handleAddItem = (title: string, subtitle: string) => {
    const newItem: ItemType = {
      id: uuidv4(),  
      title,
      subtitle,
      createdAt: new Date().toISOString(),
    };
    setItems([...items, newItem]);
  };

  const handleEditItem = (item: ItemType) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleUpdateItem = (title: string, subtitle: string) => {
    if (editingItem) {
      const updatedItems = items.map((item) =>
        item.id === editingItem.id ? { ...item, title, subtitle } : item
      );
      setItems(updatedItems);
      setEditingItem(null);
      setIsModalOpen(false);
    }
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 flex flex-col items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md mb-4 cursor-pointer"
        >
          Create Item
        </button>
        <ItemList items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={editingItem ? handleUpdateItem : handleAddItem}
          existingItem={editingItem ? { title: editingItem.title, subtitle: editingItem.subtitle } : undefined}
        />
      </div>
    </div>
  );

};

export default App;
