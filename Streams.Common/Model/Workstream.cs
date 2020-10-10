using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common
{
    public class Workstream
    {
        public Workstream()
        {
            Products = new List<Product>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Owner { get; set; }
        public List<Product> Products { get; set; }
        public Organisation Organisation { get; set; }
        public int OrganisationId { get; set; }
        public bool Active { get; set; }
    }
}
