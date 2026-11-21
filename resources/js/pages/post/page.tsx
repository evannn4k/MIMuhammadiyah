import { Head, router } from '@inertiajs/react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { useModal } from '@/hooks/use-modal';
import { useQueryParams } from '@/hooks/use-query-params';
import { queryMock, mockSummary } from './mock';
import type { Post, PostFilters, PostSummary } from '@/types/post';
import PostHeaderSection from './components/post-header-section';
import PostCardSummary from './components/post-card-summary';
import PostToolbar from './components/post-toolbar';
import PostTable from './components/post-table';
import PostFormModal from './components/post-form-modal';
import PostDeleteModal from './components/post-delete-modal';
import { index as postIndex, show as postShow } from '@/routes/dashboard/post';

interface PostPageProps {
    filters: PostFilters;
    posts: Post[];
    summary: PostSummary;
}

export default function PostPage({ filters, posts, summary }: PostPageProps) {
    const modal = useModal();
    const indexUrl = postIndex.url({});
    const { query, updateQuery } = useQueryParams(indexUrl, filters);

    const LaravelPaginationData = queryMock(query);

    const handleEdit = (post: Post) => {
        modal.openEdit(post);
    };

    const handleDelete = (post: Post) => {
        modal.openDelete(post);
    };

    const handleView = (post: Post) => {
        router.visit(postShow({ post: post.id }).url);
    };

    return (
        <>
            <Head title="Manajemen Berita & Informasi" />
            <PostFormModal modal={modal} />
            <PostDeleteModal modal={modal} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <PostHeaderSection
                    onCreatePost={modal.openCreate}
                    onOpenCategoryManager={() =>
                        console.log('Category manager')
                    }
                />

                <PostCardSummary summary={mockSummary()} />

                <PostToolbar
                    query={query}
                    updateQuery={updateQuery}
                    onCreate={modal.openCreate}
                />

                <PostTable
                    data={LaravelPaginationData}
                    query={query}
                    updateQuery={updateQuery}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onView={handleView}
                />
            </div>
        </>
    );
}

PostPage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Manajemen Berita & Informasi',
            href: dashboardRoutes.post.index(),
        },
    ],
};
