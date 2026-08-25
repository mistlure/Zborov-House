namespace API.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? BannerImageUrl { get; set; }
        public List<string> GalleryImages { get; set; } = new List<string>();
        public DateTime PublishDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
