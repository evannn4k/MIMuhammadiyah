import { useState } from 'react';
import { useModalType, ModalType } from '@/types/modal';

interface UserFormState {
    actionType: ModalType | 'error' | '';
}

export function useFormModal(modal: useModalType): UserFormState {
    const [actionType, setActionType] =
        useState<UserFormState['actionType']>('');

    const data = modal.data || null;

    const isCreating = modal.isOpen('create');
    const isEditing = modal.isOpen('edit');
    const isDeleting = modal.isOpen('delete');

    const openCreate = () => {
        modal.openCreate();
        setActionType('create');
    };

    const openEdit = (value: any) => {
        modal.openEdit(value);
        setActionType('edit');
    };

    const openDelete = (value: any) => {
        modal.openDelete(value);
        setActionType('delete');
    };

    const resetActionType = (timer) => {
        const delay = 200; // 200ms delay
        const newTimer = setTimeout(() => setActionType(''), delay);
        return () => clearTimeout(newTimer);
    };

    // Reset actionType when modal closes
    React.useEffect(() => {
        if (!isCreating && !isEditing && !isDeleting) {
            resetActionType();
        }
    }, [isCreating, isEditing, isDeleting]);

    const getCurrentData = () => {
        return CurrentData(modal, actionType);
    };

    return {
        actionType,
        openCreate,
        openEdit,
        openDelete,
        getCurrentData,
    };
}

// Helper to get current data based on action type and modal force
function CurrentData(
    modal: useModalType,
    actionType: UserFormState['actionType'],
) {
    if (actionType === 'create') {
        return null;
    }
    return modal.data || null;
}

// Export a simple state hook for direct use
export function useFormState() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<useModalType['data']>(null);

    return {
        isOpen,
        data,
        openCreate: () => {
            setIsOpen(true);
            setData(null);
        },
        openEdit: (value) => {
            setIsOpen(true);
            setData(value);
        },
        openDelete: (value) => {
            setIsOpen(true);
            setData(value);
        },
        closeModal: () => {
            setIsOpen(false);
            setData(null);
        },
    };
}
