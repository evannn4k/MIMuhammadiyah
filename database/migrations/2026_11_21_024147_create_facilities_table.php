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
        Schema::create("facilities", function (Blueprint $table) {
            $table->id();
            $table->string("name", 255);
            $table->string("slug", 255)->unique();
            $table->text("description")->nullable();
            $table->string("iamge_path", 255)->nullable();
            $table->string("capacity", 50)->nullable();
            $table
                ->enum("condition", ["baik", "cukup", "perlu_perbaikan"])
                ->nullable();
            $table->boolean("is_active")->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("facilities");
    }
};
