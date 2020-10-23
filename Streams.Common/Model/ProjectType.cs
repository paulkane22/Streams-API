using Streams.Common.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common.Model
{
    public class ProjectType
    {
        public int Id { get; set; }
        public string ProjectTypeItem { get; set; }
        public bool Active { get; set; } = true;
    }
}
