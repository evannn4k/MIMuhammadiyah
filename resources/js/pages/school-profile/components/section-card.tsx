import {
    Building2,
    Target,
    Users,
    MapPin,
    Phone,
    Mail,
    Globe,
    Map,
    Image,
    BookOpen,
    History,
    Linkedin,
    Facebook,
    Instagram,
    Youtube,
    Award,
    Calendar,
    Shield,
    Edit,
    ExternalLink,
    Download,
    Camera,
    Upload,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form } from "@inertiajs/react";
import FormField from "@/components/form-field";
import FormFieldWrapper from "@/components/form-field-wrapper";
import type { ComponentProps } from "react";
import type {
    SchoolProfile,
    MissionItem,
    SocialLink,
} from "@/types/school-profile";

type FieldConfig = ComponentProps<typeof FormField>;

const basicInfoFields: FieldConfig[] = [
    {
        name: "name",
        label: "Nama Sekolah",
        className: "sm:col-span-2",
        placeholder: "Masukkan nama sekolah",
        required: true,
    },
    { name: "tagline", label: "Tagline", placeholder: "Tagline sekolah" },
    { name: "npsn", label: "NPSN", placeholder: "Masukkan NPSN" },
    { name: "nsm", label: "NSM", placeholder: "Masukkan NSM" },
    {
        name: "accreditation",
        label: "Akreditasi",
        placeholder: "Contoh: A",
        type: "select",
        options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "Tidak Terakreditasi", value: "" },
        ],
    },
    {
        name: "accreditation_year",
        label: "Tahun Akreditasi",
        type: "number",
        placeholder: "2024",
    },
    {
        name: "established_year",
        label: "Tahun Berdiri",
        type: "number",
        placeholder: "2010",
    },
];

const visionFields: FieldConfig[] = [
    {
        name: "vision",
        label: "Visi",
        type: "textarea",
        placeholder: "Visi sekolah",
        rows: 3,
        className: "sm:col-span-2",
    },
];

const missionFields: FieldConfig[] = [
    {
        name: "mission_0",
        label: "Misi 1",
        type: "textarea",
        placeholder: "Misi pertama",
        rows: 2,
    },
    {
        name: "mission_1",
        label: "Misi 2",
        type: "textarea",
        placeholder: "Misi kedua",
        rows: 2,
    },
    {
        name: "mission_2",
        label: "Misi 3",
        type: "textarea",
        placeholder: "Misi ketiga",
        rows: 2,
    },
    {
        name: "mission_3",
        label: "Misi 4",
        type: "textarea",
        placeholder: "Misi keempat",
        rows: 2,
    },
    {
        name: "mission_4",
        label: "Misi 5",
        type: "textarea",
        placeholder: "Misi kelima",
        rows: 2,
    },
];

const headmasterFields: FieldConfig[] = [
    {
        name: "headmaster_name",
        label: "Nama Kepala Sekolah",
        className: "sm:col-span-2",
        placeholder: "Nama lengkap",
        required: true,
    },
    {
        name: "headmaster_photo",
        label: "Foto Kepala Sekolah",
        type: "text",
        placeholder: "/images/headmaster.jpg",
    },
    {
        name: "headmaster_greeting",
        label: "Sambutan Kepala Sekolah",
        type: "textarea",
        placeholder: "Sambutan resmi kepala sekolah",
        rows: 4,
        className: "sm:col-span-2",
    },
];

const addressFields: FieldConfig[] = [
    {
        name: "address",
        label: "Alamat Lengkap",
        type: "textarea",
        placeholder: "Alamat lengkap sekolah",
        rows: 2,
        className: "sm:col-span-2",
    },
    { name: "village", label: "Kelurahan/Desa", placeholder: "Kelurahan/Desa" },
    { name: "district", label: "Kecamatan", placeholder: "Kecamatan" },
    { name: "regency", label: "Kabupaten/Kota", placeholder: "Kabupaten/Kota" },
    { name: "province", label: "Provinsi", placeholder: "Provinsi" },
    { name: "postal_code", label: "Kode Pos", placeholder: "Kode pos" },
];

const contactFields: FieldConfig[] = [
    { name: "phone", label: "Telepon", placeholder: "(0271) 7123456" },
    { name: "whatsapp", label: "WhatsApp", placeholder: "0812-3456-7890" },
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "email@sekolah.sch.id",
    },
];

const coordinateFields: FieldConfig[] = [
    { name: "latitude", label: "Latitude", placeholder: "-7.5668" },
    { name: "longitude", label: "Longitude", placeholder: "110.8218" },
    {
        name: "maps_embed_url",
        label: "Google Maps Embed URL",
        type: "text",
        placeholder: "https://www.google.com/maps/embed?...",
        className: "sm:col-span-2",
    },
];

const orgStructureFields: FieldConfig[] = [
    {
        name: "org_structure_image",
        label: "Gambar Struktur Organisasi",
        type: "text",
        placeholder: "/images/org-structure.png",
        className: "sm:col-span-2",
    },
];

const historyFields: FieldConfig[] = [
    {
        name: "history",
        label: "Sejarah Madrasah",
        type: "textarea",
        placeholder: "Riwayat pendirian dan perkembangan madrasah",
        rows: 4,
        className: "sm:col-span-2",
    },
];

const socialFields: FieldConfig[] = [
    {
        name: "social_facebook",
        label: "Facebook",
        type: "text",
        placeholder: "https://facebook.com/...",
    },
    {
        name: "social_instagram",
        label: "Instagram",
        type: "text",
        placeholder: "https://instagram.com/...",
    },
    {
        name: "social_youtube",
        label: "YouTube",
        type: "text",
        placeholder: "https://youtube.com/...",
    },
    {
        name: "social_website",
        label: "Website",
        type: "text",
        placeholder: "https://sekolah.sch.id",
    },
];

const logoFields: FieldConfig[] = [
    {
        name: "logo",
        label: "Logo Sekolah",
        type: "text",
        placeholder: "/images/logo-school.png",
        className: "sm:col-span-2",
    },
];

interface SectionCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
    className?: string;
}

export function SectionCard({
    title,
    description,
    icon: Icon,
    children,
    className,
}: SectionCardProps) {
    return (
        <Card className={`${className ?? ""} bg-muted/50`}>
            <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
                        <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                            {description}
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-2">{children}</CardContent>
        </Card>
    );
}

function renderMissionFields(
    data: SchoolProfile,
    errors: Record<string, string>,
) {
    return missionFields.map((field, index) => {
        const value = data.mission?.[index]?.content ?? "";
        return (
            <FormField
                key={field.name}
                {...field}
                defaultValue={value}
                error={errors[field.name]}
            />
        );
    });
}

function renderSocialFields(
    data: SchoolProfile,
    errors: Record<string, string>,
) {
    return socialFields.map((field) => {
        const platform = field.name.replace("social_", "");
        // const value =
        //     data.social_links?.find((s) => s.platform === platform)?.url ?? '';
        {
            /*<FormField
                key={field.name}
                {...field}
                defaultValue={value}
                error={errors[field.name]}
            />*/
        }
        return (
            <>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                dicta dolores amet aliquam quidem, illo aperiam itaque quaerat
                exercitationem sed esse eius quos sapiente labore veniam nihil
                error veritatis deserunt.
            </>
        );
    });
}

export function SchoolProfileMainForm({
    data,
    errors = {},
}: {
    data: SchoolProfile;
    errors?: Record<string, string>;
}) {
    return (
        <div className="flex flex-col gap-4">
            {/* Informasi Pokok Lembaga */}
            <SectionCard
                title="Informasi Pokok Lembaga"
                description="Data identitas resmi madrasah sesuai dokumen pendirian dan akreditasi"
                icon={Building2}
            >
                <FormFieldWrapper cols={2}>
                    {basicInfoFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
            </SectionCard>

            {/* Visi & Misi */}
            <SectionCard
                title="Visi & Misi"
                description="Arah strategis dan misi operasional madrasah dalam menjalankan tri dharma pendidikan"
                icon={Target}
            >
                <FormFieldWrapper cols={1}>
                    {visionFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
                <Separator className="my-4" />
                <label className="mb-2 block text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    Misi
                </label>
                <FormFieldWrapper cols={1}>
                    {renderMissionFields(data, errors)}
                </FormFieldWrapper>
            </SectionCard>

            {/* Kepala Sekolah */}
            <SectionCard
                title="Kepala Sekolah"
                description="Informasi kepemimpinan madrasah termasuk foto dan sambutan resmi"
                icon={Users}
            >
                <FormFieldWrapper cols={2}>
                    {headmasterFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                field.name.startsWith("headmaster_")
                                    ? (data.headmaster?.[
                                          field.name.replace(
                                              "headmaster_",
                                              "",
                                          ) as keyof typeof data.headmaster
                                      ] as
                                          | string
                                          | number
                                          | readonly string[]
                                          | boolean
                                          | undefined)
                                    : (data[
                                          field.name as keyof SchoolProfile
                                      ] as
                                          | string
                                          | number
                                          | readonly string[]
                                          | boolean
                                          | undefined)
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
            </SectionCard>

            {/* Kontak & Alamat */}
            <SectionCard
                title="Kontak & Alamat"
                description="Alamat lengkap dan informasi kontak yang dapat dihubungi publik"
                icon={MapPin}
            >
                <FormFieldWrapper cols={2}>
                    {addressFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
                <Separator className="my-4" />
                <FormFieldWrapper cols={3}>
                    {contactFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
            </SectionCard>

            {/* Titik Koordinat & Peta */}
            <SectionCard
                title="Titik Koordinat & Peta"
                description="Lokasi geografis madrasah untuk navigasi dan integrasi peta digital"
                icon={Map}
            >
                <FormFieldWrapper cols={2}>
                    {coordinateFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
                {data.maps_embed_url && (
                    <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                        <iframe
                            src={data.maps_embed_url}
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Sekolah"
                        />
                    </div>
                )}
            </SectionCard>

            {/* Struktur Organisasi */}
            <SectionCard
                title="Struktur Organisasi"
                description="Diagram struktur organisasi madrasah untuk tata kelola dan transparansi"
                icon={Users}
            >
                <FormFieldWrapper cols={1}>
                    {orgStructureFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
            </SectionCard>

            {/* Sejarah */}
            <SectionCard
                title="Sejarah Madrasah"
                description="Riwayat pendirian dan perkembangan madrasah dari masa ke masa"
                icon={History}
            >
                <FormFieldWrapper cols={1}>
                    {historyFields.map((field) => (
                        <FormField
                            key={field.name}
                            {...field}
                            defaultValue={
                                data[field.name as keyof SchoolProfile] as
                                    | string
                                    | number
                                    | readonly string[]
                                    | boolean
                                    | undefined
                            }
                            error={errors[field.name]}
                        />
                    ))}
                </FormFieldWrapper>
            </SectionCard>

            {/* Media Sosial */}
            <SectionCard
                title="Media Sosial & Website"
                description="Tautan resmi media sosial dan website madrasah untuk komunikasi publik"
                icon={Globe}
            >
                <FormFieldWrapper cols={2}>
                    {renderSocialFields(data, errors)}
                </FormFieldWrapper>
            </SectionCard>
        </div>
    );
}

export { logoFields };
