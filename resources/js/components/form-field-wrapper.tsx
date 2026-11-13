import * as React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldWrapperProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4;
    className?: string;
}

export default function FormFieldWrapper({
    children,
    cols = 1,
    className,
}: FormFieldWrapperProps) {
    return (
        <div
            className={cn(
                'grid gap-4 pb-4',
                {
                    'grid-cols-1': cols === 1,
                    'sm:grid-cols-2': cols === 2,
                    'sm:grid-cols-3': cols === 3,
                    'sm:grid-cols-4': cols === 4,
                },
                className,
            )}
        >
            {children}
        </div>
    );
}
