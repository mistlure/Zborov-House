using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AddBannerAndGallery : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PictureUrl",
                table: "Posts",
                newName: "BannerImageUrl");

            migrationBuilder.AddColumn<string>(
                name: "GalleryImages",
                table: "Posts",
                type: "TEXT",
                nullable: false,
                defaultValue: "[]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GalleryImages",
                table: "Posts");

            migrationBuilder.RenameColumn(
                name: "BannerImageUrl",
                table: "Posts",
                newName: "PictureUrl");
        }
    }
}
