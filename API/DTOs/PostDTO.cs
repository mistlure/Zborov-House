using API.Models;

namespace API.DTOs
{
    public class PostDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? PictureUrl { get; set; }
        public DateTime PublishDate { get; set; }

        public PostDTO() { }

        public PostDTO(Post post)
        {
            Id = post.Id;
            Title = post.Title;
            Content = post.Content;
            PictureUrl = post.PictureUrl;
            PublishDate = post.PublishDate;
        }
    }
}
