using AutoMapper;
using Streams.API.DTOs;
using Streams.Common;

namespace Streams.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Project, ProjectDto>();

        }
    }
}
