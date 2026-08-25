using API.Models;

namespace API.DTOs
{
    public class PostDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? BannerImageUrl { get; set; }
        public List<string> GalleryImages { get; set; } = new List<string>();
        public DateTime PublishDate { get; set; }

        public PostDTO() { }

        public PostDTO(Post post)
        {
            Id = post.Id;
            Title = post.Title;
            Content = post.Content;
            BannerImageUrl = post.BannerImageUrl;
            GalleryImages = post.GalleryImages;
            PublishDate = post.PublishDate;
        }
    }
}