using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common
{ 
    public class Organisation
    {
        public Organisation()
        {
            Workstreams = new List<Workstream>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = "Organisation";
        public List<Workstream> Workstreams { get; set; }

    }
}
