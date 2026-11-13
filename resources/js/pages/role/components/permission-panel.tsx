'use client';

import { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
} from '@/components/ui/field';
import { RoleSummary } from '@/types/role';

interface GroupedPermission {
    name: string;
    description: string;
}

interface PermissionPanelProps {
    summary: RoleSummary;
    selectedPermissions: string[];
    togglePermission: (permName: string) => void;
    permissions: Record<string, GroupedPermission[]>;
}

export default function PermissionPanel({
    summary,
    selectedPermissions,
    togglePermission,
    permissions,
}: PermissionPanelProps) {
    const [openCategories, setOpenCategories] = useState<string[]>([]);

    const categories = Object.keys(permissions);

    const toggleCategory = (category: string) => {
        setOpenCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category],
        );
    };

    const formatCategoryLabel = (category: string) => {
        return category
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const formatPermissionName = (name: string): string => {
        return name
            .split('.')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Card className="bg-muted/50 p-4">
            <CardHeader className="p-0">
                <CardTitle className="text-lg">Daftar Perizinan</CardTitle>
                <CardAction>
                    <CardDescription>
                        {selectedPermissions.length} dari{' '}
                        {summary.active_permissions} perizinan
                    </CardDescription>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 overflow-y-auto p-0">
                {categories.map((category) => {
                    const isOpen = openCategories.includes(category);
                    const perms = permissions[category];

                    return (
                        <Card key={category} className="bg-muted/50 !p-0">
                            <CardHeader className="!p-0">
                                <Collapsible
                                    open={isOpen}
                                    onOpenChange={() =>
                                        toggleCategory(category)
                                    }
                                >
                                    <CollapsibleTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-between p-4 text-left hover:bg-transparent"
                                        >
                                            <span className="font-medium capitalize">
                                                {formatCategoryLabel(category)}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">
                                                    {perms.length} izin
                                                </Badge>
                                                <ChevronDown
                                                    className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                            </div>
                                        </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <CardContent className="flex flex-col gap-2 p-4 pt-4">
                                            {perms.map((perm) => (
                                                <FieldLabel
                                                    key={perm.name}
                                                    htmlFor={perm.name}
                                                    className="m-0 p-0"
                                                >
                                                    <Field orientation="horizontal">
                                                        <FieldContent className="flex flex-col gap-1">
                                                            <FieldTitle className="text-xs capitalize">
                                                                {formatPermissionName(
                                                                    perm.name,
                                                                )}
                                                            </FieldTitle>
                                                            <FieldDescription className="text-sm">
                                                                {perm?.description ??
                                                                    '-'}
                                                            </FieldDescription>
                                                        </FieldContent>
                                                        <Switch
                                                            checked={selectedPermissions.includes(
                                                                perm.name,
                                                            )}
                                                            onCheckedChange={() =>
                                                                togglePermission(
                                                                    perm.name,
                                                                )
                                                            }
                                                            id={perm.name}
                                                        />
                                                    </Field>
                                                </FieldLabel>
                                            ))}
                                        </CardContent>
                                    </CollapsibleContent>
                                </Collapsible>
                            </CardHeader>
                        </Card>
                    );
                })}

                {categories.length === 0 && (
                    <div className="bg-muted/50 py-8 text-center">
                        Tidak ada izin tersedia.
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
