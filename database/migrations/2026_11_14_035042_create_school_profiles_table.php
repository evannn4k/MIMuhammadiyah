<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('school_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('tagline', 200)->nullable();
            $table->string('npsn', 8)->nullable();
            $table->string('nsm', 20)->nullable();
            $table->string('accreditation', 5)->nullable();
            $table->year('accreditation_year')->nullable();
            $table->year('established_year')->nullable();
            $table->string('logo', 255)->nullable();
            $table->longText('history')->nullable();
            $table->text('vision')->nullable();
            $table->json('mission')->nullable();
            $table->string('headmaster_name', 100)->nullable();
            $table->string('headmaster_photo', 255)->nullable();
            $table->longText('headmaster_greeting')->nullable();
            $table->string('org_structure_image', 255)->nullable();
            $table->text('address')->nullable();
            $table->string('village', 100)->nullable();
            $table->string('district', 100)->nullable();
            $table->string('regency', 100)->nullable();
            $table->string('province', 100)->nullable();
            $table->string('postal_code', 10)->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('whatsapp', 20)->nullable();
            $table->string('email', 150)->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->text('maps_embed_url')->nullable();
            $table->json('social_links')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_profiles');
    }
};
