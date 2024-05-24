using Dapper;
using Microsoft.Data.SqlClient;
using System.Reflection.Metadata;

namespace BlogsAPI.Data
{
    public class BlogRepository
    {
        private readonly string _connectionString;

        public BlogRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<Blog>> GetBlogsAsync()
        {
            using var connection = new SqlConnection(_connectionString);
            var blogs = await connection.QueryAsync<Blog>("SELECT * FROM Blogs");
            return blogs;
        }
    }
}
