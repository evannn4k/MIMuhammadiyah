'use client';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import type { useModalType } from '@/types/modal';
import type { Facility } from '@/types/facility';

interface FacilityDeleteModalProps {
    modal: useModalType;
}

export default function FacilityDeleteModal({ modal }: FacilityDeleteModalProps) {
    const data = modal.data as Facility | undefined;

    const handleConfirmDelete = () => {
        // TODO(backend): replace with Wayfinder action route
        modal.closeModal();
    };

    return (
        <AlertDialog open={modal.isOpen('delete')} onOpenChange={modal.closeModal}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Hapus Data Fasilitas</AlertDialogTitle>
                    <AlertDialogDescription>
                        Apakah Anda yakin ingin menghapus <strong>{data?.name ?? 'data ini'}</strong>?
                        Data fasilitas yang telah dihapus tidak dapat dipulihkan.
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