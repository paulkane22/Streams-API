using Streams.Common;
using Streams.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streams.API 
{

    public class Seed
    {
        private readonly StreamContext _context;
        public Seed(StreamContext context)
        {
            _context = context;
        }



    private bool CreateFakeData()
    {
        var myOrganisation = new Organisation() { Name = "MDSAS" };
        _context.Organisations.Add(myOrganisation);

        var myWorkStream = new Workstream()
        {
            Name = "Test",
            Organisation = myOrganisation,
            Active = true,
            Owner = "Paul"
        };
        _context.Workstreams.Add(myWorkStream);

        var myProduct = new Product()
        {
            Active = true,
            Name = "Test Product",
            Workstream = myWorkStream,
            productType = ProductType.Website
        };
        _context.Products.Add(myProduct);

        var myProject = new Project()
        {
            Active = true,
            Name = "Test Project",
            Product = myProduct,
        };
        _context.Projects.Add(myProject);

        _context.SaveChanges();
        return true;
    }
    }
}
