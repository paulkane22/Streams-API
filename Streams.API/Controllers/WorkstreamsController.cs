using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Streams.Common;
using Streams.Data;

namespace Streams.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkstreamsController : ControllerBase
    {
        private readonly StreamContext _context;

        public WorkstreamsController(StreamContext context)
        {
            _context = context;
        }

        // GET: api/Workstreams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workstream>>> GetWorkstreams()
        {
            return await _context.Workstreams.ToListAsync();
        }

        // GET: api/Workstreams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Workstream>> GetWorkstream(int id)
        {
            var workstream = await _context.Workstreams.FindAsync(id);

            if (workstream == null)
            {
                return NotFound();
            }

            return workstream;
        }

        // PUT: api/Workstreams/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkstream(int id, Workstream workstream)
        {
            if (id != workstream.Id)
            {
                return BadRequest();
            }

            _context.Entry(workstream).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkstreamExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Workstreams
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Workstream>> PostWorkstream(Workstream workstream)
        {
            _context.Workstreams.Add(workstream);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkstream", new { id = workstream.Id }, workstream);
        }

        // DELETE: api/Workstreams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Workstream>> DeleteWorkstream(int id)
        {
            var workstream = await _context.Workstreams.FindAsync(id);
            if (workstream == null)
            {
                return NotFound();
            }

            _context.Workstreams.Remove(workstream);
            await _context.SaveChangesAsync();

            return workstream;
        }

        private bool WorkstreamExists(int id)
        {
            return _context.Workstreams.Any(e => e.Id == id);
        }
    }
}
