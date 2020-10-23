using Streams.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streams.API.Interfaces
{
    public interface IProjectRepository
    {
        void Update(Project project);

        Task<bool> SaveAllAsync();
        Task<IEnumerable<Project>> GetProjectsAsync();
        Task<Project> GetProjectByIdAsync(int id);
        Task<Project> GetProjectByNameAsync(string name);
       

    }
}
