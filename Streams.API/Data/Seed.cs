using Microsoft.EntityFrameworkCore;
using Streams.API.Controllers;
using Streams.Common;
using Streams.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Streams.API.Data
{
    public class Seed
    {
        public static async Task SeedProjects(StreamContext context)
        {
            if (await context.Projects.AnyAsync()) return;

            var projectData = await System.IO.File.ReadAllTextAsync("Data/UserSeedJson.json");
            var projects = JsonSerializer.Deserialize<List<Project>>(projectData);

            foreach (var project in projects)
            {
                var k = new Project();
                k.Name = project.Name;
                k.Active = project.Active;
               // k.Created = System.DateTime.Now;

                await context.Projects.AddAsync(k);
            }
            await context.SaveChangesAsync();
        }
    }
}
