using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Streams.Data.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppUsers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    DateOfBirth = table.Column<DateTime>(nullable: false),
                    KnownAs = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastActive = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Organisations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organisations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Workstreams",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Owner = table.Column<string>(nullable: true),
                    OrganisationId = table.Column<int>(nullable: false),
                    Active = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workstreams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Workstreams_Organisations_OrganisationId",
                        column: x => x.OrganisationId,
                        principalTable: "Organisations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    productType = table.Column<int>(nullable: false),
                    WorkstreamId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Workstreams_WorkstreamId",
                        column: x => x.WorkstreamId,
                        principalTable: "Workstreams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false),
                    ProjectKey = table.Column<string>(maxLength: 6, nullable: true),
                    ProjectTypeId = table.Column<int>(nullable: true),
                    ProductId = table.Column<int>(nullable: true),
                    WorkstreamId = table.Column<int>(nullable: true),
                    OrganisationId = table.Column<int>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    Completed = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Owner = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    DeadlineDate = table.Column<DateTime>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: true),
                    CompletedDate = table.Column<DateTime>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    TimeStamp = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Projects_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AppTasks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    ProjectId = table.Column<int>(nullable: false),
                    LastUpdated = table.Column<DateTime>(nullable: false),
                    Deadline = table.Column<DateTime>(nullable: false),
                    Started = table.Column<DateTime>(nullable: false),
                    Completed = table.Column<DateTime>(nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    Complete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppTasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppTasks_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Organisations",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "PJK" });

            migrationBuilder.InsertData(
                table: "Organisations",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "MDSAS" });

            migrationBuilder.InsertData(
                table: "Workstreams",
                columns: new[] { "Id", "Active", "Name", "OrganisationId", "Owner" },
                values: new object[] { 1, false, "Streams", 1, null });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Active", "Name", "WorkstreamId", "productType" },
                values: new object[] { 1, true, "Streams", 1, 0 });

            migrationBuilder.CreateIndex(
                name: "IX_AppTasks_ProjectId",
                table: "AppTasks",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_WorkstreamId",
                table: "Products",
                column: "WorkstreamId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ProductId",
                table: "Projects",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Workstreams_OrganisationId",
                table: "Workstreams",
                column: "OrganisationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppTasks");

            migrationBuilder.DropTable(
                name: "AppUsers");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Workstreams");

            migrationBuilder.DropTable(
                name: "Organisations");
        }
    }
}
