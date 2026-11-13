import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import type { useModalType } from '@/types/modal';
import type { Role } from '@/types/role';

interface RoleDeleteModalProps {
    modal: useModalType;
}

export default function RoleDeleteModal({ modal }: RoleDeleteModalProps) {
    const { isOpen, closeModal } = modal;
    const data = (modal.data ?? null) as Role | null;

    const handleDelete = () => {
        // TODO(backend): handle delete
        closeModal();
    };

    return (
        <AlertDialog open={isOpen('delete')} onOpenChange={closeModal}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Hapus Peran?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Apakah Anda yakin ingin menghapus peran{' '}
                        <strong>{data?.name}</strong>? Tindakan ini tidak dapat
                        dibatalkan.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>
                        Batal
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Hapus
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
