using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUDCore.Migrations
{
    public partial class Addnewtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Description",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    genre = table.Column<string>(maxLength: 40, nullable: false),
                    release_date = table.Column<string>(maxLength: 50, nullable: false),
                    director = table.Column<string>(maxLength: 20, nullable: false),
                    cast = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Description", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    link = table.Column<string>(maxLength: 500, nullable: false),
                    link_to_treiler = table.Column<string>(maxLength: 500, nullable: false),
                    photo = table.Column<string>(maxLength: 500, nullable: false),
                    the_name = table.Column<string>(maxLength: 50, nullable: false),
                    counter = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Description");

            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
