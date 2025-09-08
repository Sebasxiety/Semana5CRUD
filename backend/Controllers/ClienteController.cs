using Microsoft.AspNetCore.Mvc;
using backend.Modelos;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {
        private static readonly List<Cliente> Clientes = new List<Cliente>
        {
            new Cliente { Cedula = "1234567890", Nombres = "Juan", Apellidos = "Perez", Direccion = "Calle 1", Telefono = "555-1234" },
            new Cliente { Cedula = "0987654321", Nombres = "Maria", Apellidos = "Gomez", Direccion = "Carrera 2", Telefono = "555-5678" }
        };

        private readonly ILogger<ClienteController> _logger;

        public ClienteController(ILogger<ClienteController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Cliente> Get()
        {
            return Clientes;
        }
    }
}
