// تایپ برای یک آیتم در لیست
export interface Item {
  id: string; // شناسه یکتا برای هر آیتم
  title: string; // عنوان آیتم
  subtitle: string; // زیرعنوان آیتم
  createdAt: string; // زمان ایجاد آیتم (به فرمت ISO string)
}

// تایپ برای اطلاعات مودال (برای ویرایش یا اضافه کردن آیتم)
export interface ModalItem {
  title: string; // عنوان آیتم
  subtitle: string; // زیرعنوان آیتم
}

// تایپ برای عملکردهای مختلف (پروپس‌های کامپوننت‌ها)
export interface ItemListProps {
  items: Item[]; // لیست آیتم‌ها
  onEdit: (item: Item) => void; // تابعی برای ویرایش آیتم
  onDelete: (id: string) => void; // تابعی برای حذف آیتم
}

export interface ModalProps {
  isOpen: boolean; // وضعیت باز بودن مودال
  onClose: () => void; // تابعی برای بستن مودال
  onSubmit: (title: string, subtitle: string) => void; // تابعی برای ارسال اطلاعات
  existingItem?: ModalItem; // اطلاعات آیتم برای ویرایش (در صورت وجود)
}

export interface ItemProps {
  item: Item; // اطلاعات یک آیتم
  onEdit: (item: Item) => void; // تابعی برای ویرایش آیتم
  onDelete: (id: string) => void; // تابعی برای حذف آیتم
}
