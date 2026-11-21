import { useModal } from '@/hooks/use-modal';
import type { useModalType } from '@/types/modal';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash2, AlertTriangle } from 'lucide-react';

interface PostDeleteModalProps {
    modal: useModalType;
}

export default function PostDeleteModal({ modal }: PostDeleteModalProps) {
    const post = modal.data as { id: number; title: string } | null;
    const isOpen = modal.isOpen('delete');

    const handleConfirm = () => {
        // TODO(backend): implement delete
        modal.closeModal();
    };

    if (!post) return null;

    return (
        <AlertDialog open={isOpen} onOpenChange={modal.closeModal}>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertTriangle className="text-error mx-auto mb-4 h-12 w-12" />
                    <AlertDialogTitle className="text-center">
                        Hapus Berita?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        Anda akan menghapus <strong>"{post.title}"</strong>.
                        Tindakan ini tidak dapat dibatalkan dan data akan
                        dihapus permanen dari sistem.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col gap-3">
                    <AlertDialogCancel
                        onClick={modal.closeModal}
                        className="bg-surface-container hover:bg-surface-container-high text-on-surface h-10 w-full rounded-lg px-4 transition-colors"
                    >
                        Batal
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleConfirm}
                        className="bg-error hover:bg-error/90 text-on-error flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 font-semibold transition-colors"
                    >
                        <Trash2 className="h-4 w-4" />
                        Hapus Permanen
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
