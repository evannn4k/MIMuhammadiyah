import { useState } from 'react';
import { router } from '@inertiajs/react';

export function useQueryParams(
    url: string,
    initialQuery: Record<string, any> = {},
) {
    const [query, setQuery] = useState(initialQuery);

    const updateQuery = (params: Record<string, any>) => {
        const updated = { ...query, ...params };

        setQuery(updated as any);

        router.get(url, updated, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
    };

    return { query, updateQuery };
}
