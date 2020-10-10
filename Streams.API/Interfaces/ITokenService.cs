using Streams.Common;

namespace Streams.API
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
