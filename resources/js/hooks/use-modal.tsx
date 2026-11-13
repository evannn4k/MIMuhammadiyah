import { useState } from 'react';
import { useModalType } from '@/types/modal';

export function useModal(): useModalType {
    const [modal, setModal] = useState<string | null>();
    const [data, setData] = useState<any | null>();

    const openModal = (type: string, value: any = null): void => {
        setModal(type);
        setData(value ?? null);
    };

    const closeModal = (): void => {
        setModal(null);
        setData(null);
    };

    return {
        isOpen: (type: string) => modal == type,
        data,
        openModal,
        closeModal,
        openCreate: () => {
            openModal('create');
        },
        openEdit: (value: any) => {
            openModal('edit', value);
        },
        openDelete: (value: any) => {
            openModal('delete', value);
        },
    };
}
