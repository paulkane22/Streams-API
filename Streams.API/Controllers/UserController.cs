using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Streams.API.DTOs;
using Streams.Common;
using Streams.Data;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Streams.API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly StreamContext _context;
        private readonly IMapper _mapper;

        public UserController(StreamContext context, IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _context.AppUsers.ToListAsync();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.AppUsers.FindAsync(id);
        }

        [Authorize]
        [HttpGet("username/{username}")]
        public async Task<ActionResult<AppUser>> GetUserByUsername(string username)
        {
            return await _context.AppUsers.SingleOrDefaultAsync(x => x.UserName == username);
        }


        // PUT: api/Projects/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("update/{username}")]
        public async Task<ActionResult<UserDto>> Update(string username, UserDto myUserDto)
        {
            if (username != myUserDto.UserName)
            {
                return BadRequest();
            }
            //Get full user object.
            var appUser = await _context.AppUsers.SingleOrDefaultAsync(x => x.UserName == username);
            appUser.KnownAs = myUserDto.KnownAs;

            _context.Entry(appUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                //if (await UserExists(username))
                //{
                //    return NotFound();
                //}

            }

            myUserDto = _mapper.Map<UserDto>(appUser);
            return myUserDto;
        }




    }
}
