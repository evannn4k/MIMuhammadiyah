<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("achievements", function (Blueprint $table) {
            $table->id();
            $table->string("title", 255);
            $table->string("slug", 255)->unique();
            $table->enum("category", [
                "akademik",
                "non_akademik",
                "olahraga",
                "seni",
                "keagamaan",
            ]);
            $table->enum("level", [
                "sekolah",
                "kecamatan",
                "kabupaten",
                "provinsi",
                "nasional",
                "internasional",
            ]);
            $table->string("rank", 50)->nullable();
            $table->enum("recipient_type", ["student", "teacher", "school"]);
            $table->string("recipient_name", 150);
            $table->string("organizer", 150)->nullable();
            $table->year("year")->index();
            $table->date("event_date")->nullable();
            $table->text("description")->nullable();
            $table->string("iamge_path", 255)->nullable();
            $table->boolean("is_published")->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("achievements");
    }
};
