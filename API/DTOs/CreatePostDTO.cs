namespace API.DTOs
{
    public class CreatePostDTO
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? PictureUrl { get; set; }
        public DateTime? PublishDate { get; set; }
    }
}
