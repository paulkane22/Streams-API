using Microsoft.EntityFrameworkCore.Migrations;

namespace Streams.Data.Migrations
{
    public partial class Improved_Project : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Owner",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Priority",
                table: "Projects",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Owner",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Priority",
                table: "Projects");
        }
    }
}
