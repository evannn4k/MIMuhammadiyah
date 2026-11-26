import type { Message } from '@/types/contact-message';
import { Star } from 'lucide-react';

interface ContactMessageListProps {
    messages: Message[];
    selectedId: number | null;
    onSelect: (id: number) => void;
}

export default function ContactMessageList({
    messages,
    selectedId,
    onSelect,
}: ContactMessageListProps) {
    // Dummy messages if none provided
    const displayMessages = messages && messages.length > 0 ? messages : [
        {
            id: 1,
            sender_name: 'Bpk. Hendra Gunawan',
            sender_email: 'hendra.g@gmail.com',
            subject: 'Informasi Mutasi Siswa Masuk Semester Genap',
            message_body: 'Selamat pagi admin TU SMA 1 Prestasi, mohon panduan dan prosedur resmi terkait kepindahan putra kami...',
            created_at: '10 mnt lalu',
            is_read: false,
            is_new: true,
        },
        {
            id: 2,
            sender_name: 'Nabila Az-Zahra',
            sender_email: 'nabila.zz@gmail.com',
            subject: 'Klarifikasi Sertifikat Juara Olimpiade',
            message_body: 'Halo panitia, mohon maaf untuk data nama di sertifikat lomba sains kemarin terdapat kesalahan penulisan...',
            created_at: '45 mnt lalu',
            is_read: false,
            is_new: false,
        },
        {
            id: 3,
            sender_name: 'Ibu Siti Aminah',
            sender_email: 'siti.aminah@yahoo.co.id',
            subject: 'Jadwal Pengambilan Ijazah Alumni 2024',
            message_body: 'Assalamu’alaikum, ingin menanyakan apakah ijazah kelulusan tahun ajaran 2023/2024 sudah dapat diambil di ruang tata usaha?',
            created_at: '2 jam lalu',
            is_read: true,
            is_new: false,
        },
    ];

    return (
        <div className="space-y-2">
            {displayMessages.map((msg) => {
                const isSelected = selectedId === msg.id;
                return (
                    <div
                        key={msg.id}
                        onClick={() => onSelect(msg.id)}
                        className={`p-3 rounded-lg cursor-pointer transition-all border ${
                            isSelected
                                ? 'bg-muted border-primary shadow-sm'
                                : 'bg-card hover:bg-muted/50 border-border'
                        }`}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                                {!msg.is_read && (
                                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                                )}
                                <span className="font-semibold text-sm truncate text-foreground">
                                    {msg.sender_name}
                                </span>
                            </div>
                            <span className="text-xs text-muted-foreground flex-shrink-0">
                                {msg.created_at}
                            </span>
                        </div>
                        <p className="text-xs font-semibold text-foreground mt-1 truncate">
                            {msg.subject}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                            {msg.message_body}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}