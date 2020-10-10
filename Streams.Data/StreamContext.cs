using Microsoft.EntityFrameworkCore;
using Streams.Common;
using Streams.Common.Model;

namespace Streams.Data
{
    public class StreamContext : DbContext
    {
        public StreamContext(DbContextOptions<StreamContext> options ) : base(options)
        {
            //ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        public DbSet<Organisation> Organisations { get; set; }
        public DbSet<Workstream> Workstreams { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<AppTask> AppTasks { get; set; }
        public DbSet<AppUser> AppUsers { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(
        //        "Data Source =.; Initial Catalog = Streams; Integrated Security = True"
        //        );
        //}
    }
}
