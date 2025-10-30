import React, { useState, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, subtitle: string) => void;
    existingItem?: { title: string; subtitle: string };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, existingItem }) => {
    const [title, setTitle] = useState<string>(existingItem?.title || '');
    const [subtitle, setSubtitle] = useState<string>(existingItem?.subtitle || '');

    useEffect(() => {
        if (existingItem) {
            setTitle(existingItem.title);
            setSubtitle(existingItem.subtitle);
        }
    }, [existingItem]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Add/Edit Item</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Subtitle"
                    className="w-full p-2 mb-4 border rounded-md"
                />
                <div className="flex justify-between">
                    <button
                        onClick={() => {
                            onSubmit(title, subtitle);
                            onClose();
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                    <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded-md">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
