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
        Schema::create("posts", function (Blueprint $table) {
            $table->id();
            $table
                ->foreignId("author_id")
                ->constrained("users")
                ->cascadeOnDelete();
            $table->enum("category", [
                "akademik",
                "kesiswaan",
                "kegiatan",
                "pengumuman",
                "prestasi",
                "keagamaan",
                "umum",
            ]);
            $table->string("title", 200);
            $table->string("slug", 220)->unique();
            $table->longText("content");
            $table->string("image_path", 255)->nullable();
            $table
                ->enum("status", ["draft", "published", "archived"])
                ->default("draft");
            $table->timestamp("published_at")->nullable();
            $table->boolean("is_pinned")->default(false);
            $table->unsignedInteger("views_count")->default(0);
            $table->timestamps();

            $table->index(["status", "published_at"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("posts");
    }
};
