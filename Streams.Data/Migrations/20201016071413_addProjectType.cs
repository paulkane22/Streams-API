using Microsoft.EntityFrameworkCore.Migrations;

namespace Streams.Data.Migrations
{
    public partial class addProjectType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProjectKey",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProjectTypeId",
                table: "Projects",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProjectKey",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "ProjectTypeId",
                table: "Projects");
        }
    }
}
