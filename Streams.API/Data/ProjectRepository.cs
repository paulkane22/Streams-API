using Microsoft.EntityFrameworkCore;
using Streams.API.Interfaces;
using Streams.Common;
using Streams.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streams.API.Data
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly StreamContext _context;

        public ProjectRepository(StreamContext context)
        {
            _context = context;
        }

        public async Task<Project> GetProjectByIdAsync(int id)
        {
            return await _context.Projects.FindAsync(id);
        }

        public async Task<Project> GetProjectByNameAsync(string name)
        {
            return await _context.Projects.SingleOrDefaultAsync(x => x.Name == name);
        }

        public async Task<IEnumerable<Project>> GetProjectsAsync()
        {
            return await _context.Projects.ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(Project project)
        {
            _context.Entry(project).State = EntityState.Modified;
        }
    }
}
