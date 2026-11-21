<?php

namespace App\Http\Requests\Dashboard\SchoolProfileRequest;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSchoolProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:150',
            'tagline' => 'nullable|string|max:200',
            'npsn' => 'nullable|string|max:8',
            'nsm' => 'nullable|string|max:20',
            'accreditation' => 'nullable|string|max:5',
            'accreditation_year' => 'nullable|digits:4|integer',
            'established_year' => 'nullable|digits:4|integer',
            'logo' => 'nullable|string|max:255',
            'history' => 'nullable|string',
            'vision' => 'nullable|string',
            'mission' => 'nullable|array',
            'headmaster_name' => 'nullable|string|max:100',
            'headmaster_photo' => 'nullable|string|max:255',
            'headmaster_greeting' => 'nullable|string',
            'org_structure_image' => 'nullable|string|max:255',
            'address' => 'nullable|string',
            'village' => 'nullable|string|max:100',
            'district' => 'nullable|string|max:100',
            'regency' => 'nullable|string|max:100',
            'province' => 'nullable|string|max:100',
            'postal_code' => 'nullable|string|max:10',
            'phone' => 'nullable|string|max:20',
            'whatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:150',
            'latitude' => 'nullable|numeric|between:-90,90',
            'longitude' => 'nullable|numeric|between:-180,180',
            'maps_embed_url' => 'nullable|string',
            'social_links' => 'nullable|array',
        ];
    }

    /**
     * Pesan error kustom dalam Bahasa Indonesia.
     */
    public function messages(): array
    {
        return [
            'required' => 'Kolom :attribute wajib diisi.',
            'string' => 'Kolom :attribute harus berupa teks.',
            'max' => 'Kolom :attribute tidak boleh lebih dari :max karakter.',
            'integer' => 'Kolom :attribute harus berupa angka.',
            'digits' => 'Kolom :attribute harus terdiri dari :digits digit angka.',
            'email' => 'Format alamat email pada :attribute tidak valid.',
            'array' => 'Kolom :attribute harus berupa format array.',
            'numeric' => 'Kolom :attribute harus berupa angka.',
            'between' => 'Kolom :attribute harus bernilai antara :min sampai :max.',
        ];
    }

    /**
     * Nama atribut kustom agar lebih ramah dibaca (Bahasa Indonesia).
     */
    public function attributes(): array
    {
        return [
            'name' => 'Nama Sekolah',
            'tagline' => 'Tagline',
            'npsn' => 'NPSN',
            'nsm' => 'NSM',
            'accreditation' => 'Akreditasi',
            'accreditation_year' => 'Tahun Akreditasi',
            'established_year' => 'Tahun Berdiri',
            'logo' => 'Logo',
            'history' => 'Sejarah Sekolah',
            'vision' => 'Visi',
            'mission' => 'Misi',
            'headmaster_name' => 'Nama Kepala Sekolah',
            'headmaster_photo' => 'Foto Kepala Sekolah',
            'headmaster_greeting' => 'Sambutan Kepala Sekolah',
            'org_structure_image' => 'Gambar Bagan Organisasi',
            'address' => 'Alamat Lengkap',
            'village' => 'Desa/Kelurahan',
            'district' => 'Kecamatan',
            'regency' => 'Kabupaten/Kota',
            'province' => 'Provinsi',
            'postal_code' => 'Kode Pos',
            'phone' => 'Nomor Telepon',
            'whatsapp' => 'Nomor WhatsApp',
            'email' => 'Email Sekolah',
            'latitude' => 'Latitude',
            'longitude' => 'Longitude',
            'maps_embed_url' => 'URL Embed Google Maps',
            'social_links' => 'Social Links',
        ];
    }
}
