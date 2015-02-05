using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;

namespace metaclicker
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseWelcomePage();
        }
    }
}
