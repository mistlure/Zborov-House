using Microsoft.AspNetCore.Mvc;
using API.Filters;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UploadsController : ControllerBase
    {
        // Where is wwwroot folder located?
        private readonly IWebHostEnvironment _environment;

        // Limits
        private readonly string[] _allowedExtensions = { ".jpg", ".jpeg", ".png", ".webp" };
        private const long MaxFileSize = 10 * 1024 * 1024;

        public UploadsController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        private string GetUploadsFolderPath()
        {
            var webRoot = _environment.WebRootPath;

            if (string.IsNullOrEmpty(webRoot))
            {
                webRoot = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var folder = Path.Combine(webRoot, "uploads");

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            return folder;
        }

        [ApiKeyAuth]
        [HttpPost("image")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            // 1. VALIDATE
            if (file == null || file.Length == 0)
                return BadRequest("No file was uploaded.");

            if (file.Length > MaxFileSize)
                return BadRequest("File size exceeds the 10 MB limit.");

            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!_allowedExtensions.Contains(extension))
                return BadRequest("Unsupported file format.");



            // 2. RENAME
            var uploadsFolder = GetUploadsFolderPath();
            var uniqueFileName = $"{Guid.NewGuid()}{extension}";
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);



            // 3. SAVE
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }



            // 4. RETURN
            var fileUrl = $"{Request.Scheme}://{Request.Host}/uploads/{uniqueFileName}";

            return Ok(new { url = fileUrl });
        }

        [ApiKeyAuth]
        [HttpPost("images")]
        public async Task<IActionResult> UploadImages(List<IFormFile> files)
        {
            if (files == null || files.Count == 0)
                return BadRequest("No files were uploaded.");

            var uploadedUrls = new List<string>();
            var uploadsFolder = GetUploadsFolderPath();

            foreach (var file in files)
            {
                // 1. VALIDATE
                if (file.Length == 0 || file.Length > MaxFileSize) continue;

                var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
                if (!_allowedExtensions.Contains(extension)) continue;



                // 2. RENAME
                var uniqueFileName = $"{Guid.NewGuid()}{extension}";
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);



                // 3. SAVE
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }



                // 4. PREPARE RETURN
                var fileUrl = $"{Request.Scheme}://{Request.Host}/uploads/{uniqueFileName}";
                uploadedUrls.Add(fileUrl);
            }

            return Ok(new { urls = uploadedUrls });
        }
    }
}