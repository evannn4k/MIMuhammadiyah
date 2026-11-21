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

interface SliderDeleteModalProps {
    modal: useModalType;
}

export default function SliderDeleteModal({ modal }: SliderDeleteModalProps) {
    const slider = modal.data as { id: number; title: string } | null;
    const isOpen = modal.isOpen('delete');

    const handleConfirm = () => {
        // TODO(backend): implement delete
        modal.closeModal();
    };

    if (!slider) return null;

    return (
        <AlertDialog open={isOpen} onOpenChange={modal.closeModal}>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertTriangle className="text-destructive mx-auto mb-4 h-12 w-12" />
                    <AlertDialogTitle className="text-center">
                        Hapus Banner Slider?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        Anda akan menghapus <strong>"{slider.title}"</strong>.
                        Tindakan ini tidak dapat dibatalkan dan data akan
                        dihapus permanen dari sistem.
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
                        className="bg-destructive hover:bg-destructive/90 text-destructive-foreground flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 font-semibold transition-colors"
                    >
                        <Trash2 className="h-4 w-4" />
                        Hapus Permanen
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}