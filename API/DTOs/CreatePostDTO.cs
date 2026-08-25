using API.Models;

namespace API.DTOs
{
    public class CreatePostDTO
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? BannerImageUrl { get; set; }
        public List<string> GalleryImages { get; set; } = new List<string>();
        public DateTime? PublishDate { get; set; }

        public Post ToPost()
        {
            return new Post
            {
                Title = this.Title,
                Content = this.Content,
                BannerImageUrl = this.BannerImageUrl,
                GalleryImages = this.GalleryImages ?? new List<string>(),
                PublishDate = this.PublishDate ?? DateTime.UtcNow
            };
        }
    }
}