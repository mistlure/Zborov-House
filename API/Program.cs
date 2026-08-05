using Microsoft.EntityFrameworkCore;
using API.Data;
using Microsoft.OpenApi.Models;
namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlite("Data Source=zborov.db"));

            builder.Services.AddControllers();



            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });



            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("ApiKey", new OpenApiSecurityScheme
                {
                    Name = "X-Api-Key",

                    In = ParameterLocation.Header,

                    Type = SecuritySchemeType.ApiKey,

                    Description = "API key?",

                    Scheme = "ApiKeyScheme"
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "ApiKey"
                            },
                            Scheme = "oauth2",
                            Name = "ApiKey",
                            In = ParameterLocation.Header
                        },
                    new List<string>()
                    }
                });
             });



            var app = builder.Build();



            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("AllowAll");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
