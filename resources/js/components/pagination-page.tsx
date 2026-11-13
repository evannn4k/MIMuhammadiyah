import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from '@/components/ui/pagination';
import { Field, FieldLabel } from './ui/field';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';
import { LinkPagination, MetaPagination } from '@/types/pagination';
import { Link } from '@inertiajs/react';
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { Item, ItemContent } from './ui/item';

export function PaginationPage({
    updateQuery,
    links,
    meta,
}: {
    updateQuery: (params: Record<string, any>) => void;
    links: LinkPagination;
    meta: MetaPagination;
}) {
    return (
        <Item className='w-full rounded-none p-2' variant="muted">
            <ItemContent className="flex flex-row items-center justify-between gap-6 p-0">
                <Field orientation="horizontal" className="w-fit">
                    <Select
                        defaultValue="10"
                        onValueChange={(value) =>
                            updateQuery({ per_page: value })
                        }
                    >
                        <SelectTrigger
                            className="w-20"
                            id="select-rows-per-page"
                        >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent align="start">
                            <SelectGroup>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="25">25</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <FieldLabel htmlFor="select-rows-per-page">
                        Baris per halaman
                    </FieldLabel>
                </Field>
                <div className="flex items-center gap-4 md:gap-6">
                    <FieldLabel>
                        Halaman {meta.current_page} dari {meta.last_page}
                    </FieldLabel>
                    <Pagination>
                        <PaginationContent className="gap-2">
                            <PaginationItem>
                                <Button
                                    asChild={meta.current_page != 1}
                                    size="icon"
                                    variant="outline"
                                    disabled={meta.current_page == 1}
                                >
                                    {meta.current_page == 1 ? (
                                        <span>
                                            <ChevronsLeft />
                                        </span>
                                    ) : (
                                        <Link href={links.first ?? '#'}>
                                            <ChevronsLeft />
                                        </Link>
                                    )}
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button
                                    asChild={meta.current_page != 1}
                                    size="icon"
                                    variant="outline"
                                    disabled={meta.current_page == 1}
                                >
                                    {meta.current_page == 1 ? (
                                        <span>
                                            <ChevronLeft />
                                        </span>
                                    ) : (
                                        <Link href={links.prev ?? '#'}>
                                            <ChevronLeft />
                                        </Link>
                                    )}
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button
                                    asChild={
                                        meta.current_page != meta.last_page
                                    }
                                    size="icon"
                                    variant="outline"
                                    disabled={
                                        meta.current_page == meta.last_page
                                    }
                                >
                                    {meta.current_page == meta.last_page ? (
                                        <span>
                                            <ChevronRight />
                                        </span>
                                    ) : (
                                        <Link href={links.next ?? '#'}>
                                            <ChevronRight />
                                        </Link>
                                    )}
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button
                                    asChild={
                                        meta.current_page != meta.last_page
                                    }
                                    size="icon"
                                    variant="outline"
                                    disabled={
                                        meta.current_page == meta.last_page
                                    }
                                >
                                    {meta.current_page == meta.last_page ? (
                                        <span>
                                            <ChevronsRight />
                                        </span>
                                    ) : (
                                        <Link href={links.last ?? '#'}>
                                            <ChevronsRight />
                                        </Link>
                                    )}
                                </Button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </ItemContent>
        </Item>
    );
}
