import { useState } from 'react';
import type { Message } from '@/types/contact-message';
import { Mail, Phone, Printer, Trash2, Check, RefreshCw, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ContactMessageDetailProps {
    message: Message;
    onBack: () => void;
    onMarkAsRead: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function ContactMessageDetail({
    message,
    onBack,
    onMarkAsRead,
    onDelete,
}: ContactMessageDetailProps) {
    const [replyMode, setReplyMode] = useState<'email' | 'wa'>('email');
    const [replyText, setReplyText] = useState('');
    const [sending, setSending] = useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);

    const handleSend = () => {
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSentSuccess(true);
            setTimeout(() => setSentSuccess(false), 2000);
        }, 900);
    };

    const handleCanned = (type: string) => {
        if (type === 'mutasi') {
            setReplyText(
                'Yth. Bpk/Ibu,\n\nUntuk mutasi masuk semester genap:\n1. Membawa Surat Rekomendasi Sekolah Asal.\n2. Rapor legalisir semester 1-3.\n3. Mengikuti asesmen penempatan.',
            );
        } else if (type === 'ppdb') {
            setReplyText(
                'Halo,\n\nPendaftaran PPDB Tahun Ajaran baru dibuka resmi mulai Mei mendatang secara serentak.',
            );
        } else {
            setReplyText(
                'Terima kasih telah menghubungi kami. Pertanyaan Anda telah diteruskan ke Bagian Terkait.',
            );
        }
    };

    return (
        <Card className="bg-muted/50 h-full flex flex-col space-y-4 p-4">
            <CardContent className="p-0 space-y-4 flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b gap-3">
                    <div className="flex items-center gap-3">
                        <Mail className="text-primary size-6" />
                        <div>
                            <h2 className="font-semibold text-base text-foreground">Detail Pesan Masuk</h2>
                            <p className="text-xs text-muted-foreground">Diterima langsung dari formulir kontak web</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-1.5">
                            <Printer className="size-3.5 text-muted-foreground" />
                            <span>Cetak</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive border-destructive/30 hover:bg-destructive/10 gap-1.5"
                            onClick={() => onDelete(message.id)}
                        >
                            <Trash2 className="size-3.5" />
                            <span>Hapus</span>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background p-4 rounded-xl border">
                    <div className="space-y-2">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-muted-foreground block font-semibold">Nama Pengirim</span>
                            <span className="font-semibold text-foreground text-base">{message.sender_name}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-xs uppercase tracking-wider text-muted-foreground block font-semibold">Kontak Pengirim</span>
                            <div className="flex items-center gap-2 text-foreground text-sm">
                                <Mail className="text-muted-foreground size-4" />
                                <a href={`mailto:${message.sender_email}`} className="text-primary hover:underline">
                                    {message.sender_email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-foreground text-sm">
                                <Phone className="text-muted-foreground size-4" />
                                <span>+62 812-3456-7890</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-muted-foreground block font-semibold">Waktu Diterima</span>
                            <span className="text-sm text-foreground">{message.created_at} (Hari ini, 08:30 WIB)</span>
                        </div>
                        <div>
                            <span className="text-xs uppercase tracking-wider text-muted-foreground block font-semibold">Subjek Pesan</span>
                            <span className="text-sm font-medium text-foreground">{message.subject}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-background p-4 rounded-xl border space-y-2 flex-1">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block font-semibold">Isi Pesan / Pertanyaan</span>
                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                        {message.message_body}
                    </p>
                </div>

                {/* Reply section */}
                <div className="bg-background p-4 rounded-xl border space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Balas Pesan</span>
                        <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
                            <button
                                type="button"
                                className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                                    replyMode === 'email' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                                }`}
                                onClick={() => setReplyMode('email')}
                            >
                                Email
                            </button>
                            <button
                                type="button"
                                className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                                    replyMode === 'wa' ? 'bg-emerald-600 text-white' : 'text-muted-foreground hover:text-foreground'
                                }`}
                                onClick={() => setReplyMode('wa')}
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-xs text-muted-foreground self-center mr-1">Canned:</span>
                        <Button variant="outline" size="sm" onClick={() => handleCanned('mutasi')} className="text-xs h-7">
                            Mutasi Siswa
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleCanned('ppdb')} className="text-xs h-7">
                            Info PPDB
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleCanned('tu')} className="text-xs h-7">
                            Jam Operasional TU
                        </Button>
                    </div>

                    <Textarea
                        placeholder={replyMode === 'email' ? 'Tuliskan respon resmi via Email...' : 'Tuliskan pesan singkat WhatsApp...'}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        rows={4}
                    />

                    <div className="flex justify-end gap-2">
                        <Button
                            onClick={handleSend}
                            disabled={sending}
                            className={`gap-1.5 ${sentSuccess ? 'bg-emerald-600' : ''}`}
                        >
                            {sending ? (
                                <>
                                    <RefreshCw className="size-4 animate-spin" />
                                    <span>Mengirim...</span>
                                </>
                            ) : sentSuccess ? (
                                <>
                                    <Check className="size-4" />
                                    <span>Terkirim!</span>
                                </>
                            ) : (
                                <>
                                    <Send className="size-4" />
                                    <span>Kirim Respon</span>
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}