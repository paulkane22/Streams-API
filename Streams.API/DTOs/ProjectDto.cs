using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streams.API.DTOs
{
    public class ProjectDto
    {
        public int Id { get; set; }
        public string ProjectKey { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string Owner { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public int ProjectTypeId { get; set; }
        public DateTime Started { get; set; } = DateTime.Now;
        public DateTime Completed { get; set; }
        public DateTime Deadline { get; set; } 

    }
}
