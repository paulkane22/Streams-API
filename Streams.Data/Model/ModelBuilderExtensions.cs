using Microsoft.EntityFrameworkCore;
using Streams.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Data 
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Organisation>().HasData(
                new Organisation { Id = 1, Name = "PJK" },
                new Organisation { Id = 2, Name = "MDSAS"}
                );

            modelBuilder.Entity<Workstream>().HasData(
                new Workstream { Id = 1, Name = "Streams", OrganisationId = 1 }
                );

            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Streams", Active = true, WorkstreamId = 1}
                );
        }
    }
}
