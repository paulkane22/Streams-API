using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Streams.API.DTOs;
using Streams.Common;
using Streams.Data;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Streams.API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly StreamContext _context;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;

        public AccountController(StreamContext context, ITokenService tokenService, IMapper mapper)
        {
            this._context = context;
            this._tokenService = tokenService;
            this._mapper = mapper;
        }


        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.UserName))
            {
                return BadRequest("username is taken");
            }


            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                UserName = registerDto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key,
                KnownAs = registerDto.KnownAs                
            };

            _context.AppUsers.Add(user);

            await _context.SaveChangesAsync();

            return new UserDto
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
                KnownAs = user.KnownAs
            };

        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.AppUsers
                .SingleOrDefaultAsync(x => x.UserName == loginDto.UserName);

            if (user == null) return Unauthorized("Invalid Username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for(int i = 0; i<computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Password");
            }

            return new UserDto
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
                KnownAs = user.KnownAs
            };

        }

 


        private async Task<bool> UserExists(string username)
        {
            return await _context.AppUsers.AnyAsync(x => x.UserName == username.ToLower());
        }


        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This is an example bad request");
        }
    }
}
