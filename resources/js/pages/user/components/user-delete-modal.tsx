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
import type { User } from '@/types/user';

interface UserDeleteModalProps {
    modal: useModalType;
}

export default function UserDeleteModal({ modal }: UserDeleteModalProps) {
    const { isOpen, closeModal } = modal;
    const data = (modal.data ?? null) as User | null;

    const handleDelete = () => {
        // TODO(backend): handle delete
        closeModal();
    };

    return (
        <AlertDialog open={isOpen('delete')} onOpenChange={closeModal}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Hapus Pengguna?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Apakah Anda yakin ingin menghapus pengguna{' '}
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
