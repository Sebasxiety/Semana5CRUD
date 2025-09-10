
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace backend.Modelos
{
    [Index(nameof(Cedula), IsUnique = true)]
    public class Cliente
    {
        [Key]
        public int Id { get; set; }
        public string? Cedula { get; set; }
        public string? Nombres { get; set; }
        public string? Apellidos { get; set; }
        public string? Direccion { get; set; }
        public string? Telefono { get; set; }
    }
}

