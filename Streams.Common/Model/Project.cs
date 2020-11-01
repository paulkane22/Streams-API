using Streams.Common.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        [Required]
        public string Name { get; set; }
        [MaxLength(6), MinLength(3)]
        public string ProjectKey { get; set; }
        public int? ProjectTypeId { get; set; }
        public int? ProductId { get; set; }
        public int? WorkstreamId { get; set; }
        public int? OrganisationId { get; set; }

        public bool Active { get; set; }
        public bool Completed { get; set; }
        public string Description { get; set; }
        public string Owner { get; set; }
        [Required]
        [Range(1,4)]
        public int Priority { get; set; }

        public DateTime? DeadlineDate { get; set; } = DateTime.Now.AddDays(10);
        public DateTime? StartDate { get; set; } = DateTime.Now;
        public DateTime? CompletedDate { get; set; } 

        public List<AppTask> AppTasks { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public Byte[] TimeStamp { get; set; }

    }
}
