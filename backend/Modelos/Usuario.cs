using System.ComponentModel.DataAnnotations;

namespace backend.Modelos
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? PasswordHash { get; set; }
    }
}
