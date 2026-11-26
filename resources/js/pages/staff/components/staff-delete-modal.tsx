'use client';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useModal } from '@/hooks/use-modal';
import type { Staff } from '@/types/staff';

interface StaffDeleteModalProps {
    modal: ReturnType<typeof useModal>;
}

export default function StaffDeleteModal({ modal }: StaffDeleteModalProps) {
    const data = modal.data as Staff | undefined;

    const handleConfirmDelete = () => {
        // TODO(backend): replace with Wayfinder action route
        // router.delete(route('dashboard.staff.delete', data?.id), { preserveScroll: true });
        modal.closeModal();
    };

    return (
        <AlertDialog open={modal.isOpen('delete')} onOpenChange={modal.closeModal}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Hapus Data Guru / Staf</AlertDialogTitle>
                    <AlertDialogDescription>
                        Apakah Anda yakin ingin menghapus <strong>{data?.name ?? 'data ini'}</strong>?
                        Tindakan ini tidak dapat dibatalkan. Data yang dihapus tidak dapat dipulihkan.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive hover:bg-destructive/90">
                        <Trash2 className="mr-2 size-4" />
                        Hapus Permanen
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}