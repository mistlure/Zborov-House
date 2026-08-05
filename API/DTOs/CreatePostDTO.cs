using API.Models;

namespace API.DTOs
{
    public class CreatePostDTO
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? PictureUrl { get; set; }
        public DateTime? PublishDate { get; set; }

        public Post ToPost()
        {
            return new Post
            {
                Title = this.Title,
                Content = this.Content,
                PictureUrl = this.PictureUrl,
                PublishDate = this.PublishDate ?? DateTime.UtcNow
            };
        }


    }
}
