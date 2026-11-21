import { Head, router } from '@inertiajs/react';
import { dashboard } from '@/routes';
import dashboardRoutes from '@/routes/dashboard';
import { useModal } from '@/hooks/use-modal';
import { useQueryParams } from '@/hooks/use-query-params';
import { queryMock, mockSummary } from './mock';
import type { Slider, SliderFilters, SliderSummary } from '@/types/slider';
import SliderHeaderSection from './components/slider-header-section';
import SliderCardSummary from './components/slider-card-summary';
import SliderToolbar from './components/slider-toolbar';
import SliderList from './components/slider-list';
import SliderFormModal from './components/slider-form-modal';
import SliderDeleteModal from './components/slider-delete-modal';
import { index as sliderIndex, show as sliderShow } from '@/routes/dashboard/slider';

interface SliderPageProps {
    filters: SliderFilters;
}

export default function SliderPage({ filters }: SliderPageProps) {
    const modal = useModal();
    const indexUrl = sliderIndex.url({});
    const { query, updateQuery } = useQueryParams(indexUrl, filters);

    const LaravelPaginationData = queryMock(query);

    const handleEdit = (slider: Slider) => {
        modal.openEdit(slider);
    };

    const handleDelete = (slider: Slider) => {
        modal.openDelete(slider);
    };

    const handleView = (slider: Slider) => {
        router.visit(sliderShow({ slider: slider.id }).url);
    };

    return (
        <>
            <Head title="Manajemen Slider & Banner Beranda" />
            <SliderFormModal modal={modal} />
            <SliderDeleteModal modal={modal} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <SliderHeaderSection onCreateSlider={modal.openCreate} />

                <SliderCardSummary summary={mockSummary()} />

                <SliderToolbar
                    query={query}
                    updateQuery={updateQuery}
                    onCreate={modal.openCreate}
                />

                <SliderList
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

SliderPage.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Manajemen Slider & Banner Beranda',
            href: dashboardRoutes.slider.index(),
        },
    ],
};