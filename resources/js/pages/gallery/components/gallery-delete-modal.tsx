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

interface GalleryDeleteModalProps {
    modal: useModalType;
}

export default function GalleryDeleteModal({
    modal,
}: GalleryDeleteModalProps) {
    const item = modal.data as { id: number; title: string } | null;
    const isOpen = modal.isOpen('delete');

    const handleConfirm = () => {
        // TODO(backend): implement delete
        modal.closeModal();
    };

    if (!item) return null;

    return (
        <AlertDialog open={isOpen} onOpenChange={modal.closeModal}>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />
                    <AlertDialogTitle className="text-center">
                        Hapus Lampiran Foto?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        Anda akan menghapus <strong>"{item.title}"</strong>. Tindakan ini
                        tidak dapat dibatalkan dan data akan dihapus permanen
                        dari sistem.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col gap-3">
                    <AlertDialogCancel
                        onClick={modal.closeModal}
                        className="bg-muted hover:bg-muted/80 text-foreground h-10 w-full rounded-lg px-4 transition-colors"
                    >
                        Batal
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleConfirm}
                        className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-destructive px-4 font-semibold text-destructive-foreground transition-colors hover:bg-destructive/90"
                    >
                        <Trash2 className="h-4 w-4" />
                        Hapus Permanen
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}