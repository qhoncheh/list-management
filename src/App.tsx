import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // وارد کردن صحیح uuidv4
import ItemList from './components/ItemList';
import Modal from './components/Modal';

export interface ItemType {
  id: string;        // شناسه یکتا برای هر آیتم
  title: string;     // عنوان آیتم
  subtitle: string;  // زیرعنوان آیتم
  createdAt: string; // تاریخ و زمان ایجاد آیتم به فرمت ISO string
}

const App: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ItemType | null>(null);

  const handleAddItem = (title: string, subtitle: string) => {
    const newItem: ItemType = {
      id: uuidv4(),  // استفاده صحیح از uuidv4
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
    <div className="p-8">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded-md mb-4"
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
  );
};

export default App;
