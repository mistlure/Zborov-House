using API.Data;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PostsController(AppDbContext context)
        {
            _context = context;
        }

        //--------------------------------------------------

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostDTO>>> GetAllPosts()
        {
            var posts = await _context.Posts.ToListAsync();

            var postsDTO = posts.Select(post => new PostDTO(post));

            return Ok(postsDTO);
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<PostDTO>> GetPostById(Guid id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            var postDto = new PostDTO(post);

            return Ok(postDto);
        }



        [HttpPost]
        public async Task<ActionResult<PostDTO>> CreatePost(CreatePostDTO dto)
        {
            var post = dto.ToPost();

            _context.Posts.Add(post);

            await _context.SaveChangesAsync();

            var postDto = new PostDTO(post);

            return Ok(postDto);
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(Guid id, CreatePostDTO dto)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            post.Title = dto.Title;
            post.Content = dto.Content;
            post.PictureUrl = dto.PictureUrl;
            post.PublishDate = dto.PublishDate ?? post.PublishDate;

            await _context.SaveChangesAsync();

            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
