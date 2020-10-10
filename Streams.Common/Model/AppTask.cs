using Streams.Common.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common.Model
{
    public class AppTask
    {
            //    id: number;
            //title: string;
            //description: string;
            //priority: number;
            //last_updated: string;
            //active: boolean;
            //status: string;
            //complete: boolean;


        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public PriorityType Priority { get; set; }

        public int ProjectId { get; set; }

        public DateTime LastUpdated { get; set; }
        public DateTime Deadline { get; set; }
        public DateTime Started { get; set; }
        public DateTime Completed { get; set; }
        public bool Active { get; set; }
        public StatusOption Status { get; set; }

        public bool Complete { get; set; }


    }
}
