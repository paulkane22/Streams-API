using Microsoft.AspNetCore.Http;
using Streams.API.Helpers;
using System.Text.Json;

namespace Streams.API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage,
            int itemsPerPage, int totalIems, int totalPages)
        {
            var paginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalIems, totalPages);
            response.Headers.Add("Pagination", JsonSerializer.Serialize(paginationHeader));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}
