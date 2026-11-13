export interface useModalType {
    isOpen: (type: string) => boolean;
    data: any | null;
    openModal: (type: string, value?: any | null) => void;
    closeModal: () => void;
    openCreate: () => void;
    openEdit: (value: any) => void;
    openDelete: (value: any) => void;
}
