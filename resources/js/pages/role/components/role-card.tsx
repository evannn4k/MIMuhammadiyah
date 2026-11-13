import {
    Users,
    ShieldCheck,
    Key,
    MoreHorizontal,
    UsersRound,
    MoreVertical,
    SquarePen,
    Trash2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Role } from '@/types/role';
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
} from '@/components/ui/field';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { useModalType } from '@/types/modal';

const tierLabels: Record<string, string> = {
    root: 'Root',
    editorial: 'Editorial',
    education: 'Edukasi',
};

interface RoleCardProps {
    role: Role;
    onClick: () => void;
    modal: useModalType;
}

export default function RoleCard({ role, onClick, modal }: RoleCardProps) {
    return (
        <FieldLabel
            onClick={onClick}
            className="bg-background/50"
            htmlFor={role.name}
            key={role.id}
        >
            <Field className="relative" orientation="horizontal">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-0 right-0 m-2 size-8"
                        >
                            <MoreVertical className="size-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => modal.openEdit(role)}>
                            <SquarePen />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => modal.openDelete(role.id)}
                            variant="destructive"
                        >
                            <Trash2 />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <FieldContent>
                    <FieldTitle className="mb-2 capitalize">
                        {role.name}
                        {role.is_system && (
                            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                                Sistem
                            </Badge>
                        )}
                    </FieldTitle>
                    <FieldDescription className="mb-2 text-xs">
                        {role?.description ?? '-'}
                    </FieldDescription>
                    <div className="flex justify-between gap-4">
                        <FieldDescription className="flex items-center gap-2 text-xs">
                            <UsersRound className="size-4" /> {role.user_count}{' '}
                            Pengguna
                        </FieldDescription>
                        <FieldDescription className="text-xs">
                            {role.permission_count} Perizinan
                        </FieldDescription>
                    </div>
                </FieldContent>
                <RadioGroupItem
                    className="hidden"
                    value={String(role.id)}
                    id={role.name}
                />
            </Field>
        </FieldLabel>
    );
}
