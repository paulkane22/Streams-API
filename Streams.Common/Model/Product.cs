using System;
using System.Collections.Generic;
using System.Text;

namespace Streams.Common
{
    public class Product
    {
        public Product()
        {
            Projects = new List<Project>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public ProductType productType { get; set; }
        public Workstream Workstream { get; set; }
        public int WorkstreamId { get; set; }
        public List<Project> Projects { get; set; }
    }
}
