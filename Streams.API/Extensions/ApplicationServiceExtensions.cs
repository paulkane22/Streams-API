﻿using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Streams.API.Helpers;
using Streams.API.Interfaces;
using Streams.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streams.API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            //services.AddScoped<IProjectRepository, IProjectRepository>();
            services.AddDbContext<StreamContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("StreamsConnex"))
                .EnableSensitiveDataLogging();
            });

            return services;

        }
    }
}
