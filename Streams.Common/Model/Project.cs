using Streams.Common.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common
{
    public class Project
    {
        public Project()
        {
            AppTasks = new List<AppTask>();
        }

        public int Id { get; set; }

        public string Name { get; set; }
        public string ProjectKey { get; set; }
        public int ProjectTypeId { get; set; }
        public bool Active { get; set; }
        public string Description { get; set; }
        public string Owner { get; set; }
        public int Priority { get; set; }

        public DateTime Deadline { get; set; } = DateTime.Now.AddDays(10);
        public DateTime Started { get; set; } = DateTime.Now;
        public DateTime Completed { get; set; } 

        public Product Product { get; set; }
        public int ProductId { get; set; }

        public List<AppTask> AppTasks { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;
    }
}
