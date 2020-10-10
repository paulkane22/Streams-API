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
        public bool Active { get; set; }
        public DateTime Deadline { get; set; }
        public DateTime Started { get; set; }
        public DateTime Completed { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }

        public List<AppTask> AppTasks { get; set; }
    }
}
