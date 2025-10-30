export interface Item {
  id: string; 
  title: string; 
  subtitle: string; 
  createdAt: string; 
}

export interface ModalItem {
  title: string; 
  subtitle: string;                      
}

export interface ItemListProps {
  items: Item[]; 
  onEdit: (item: Item) => void;     
  onDelete: (id: string) => void;   
}

export interface ModalProps {
  isOpen: boolean; 
  onClose: () => void; 
  onSubmit: (title: string, subtitle: string) => void;   
  existingItem?: ModalItem; 
}

export interface ItemProps {
  item: Item; 
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void; 
}

export interface ItemType {
  id: string;        
  subtitle: string;  
  createdAt: string; 
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, subtitle: string) => void;
    existingItem?: { title: string; subtitle: string };
}


export interface ItemType {
  id: string; // شناسه یکتا برای هر آیتم
  title: string; // عنوان آیتم
  subtitle: string; // زیرعنوان آیتم
  createdAt: string; // تاریخ و زمان ایجاد آیتم به فرمت ISO string
}


export interface ItemListProps {
    items: ItemType[];
    onEdit: (item: ItemType) => void;
    onDelete: (id: string) => void;
}


export interface ItemProps {
    item: ItemType;
    onEdit: (item: ItemType) => void;
    onDelete: (id: string) => void;
}
