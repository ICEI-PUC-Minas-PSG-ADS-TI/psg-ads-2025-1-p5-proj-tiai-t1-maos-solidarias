using Microsoft.AspNetCore.Mvc;
using MaosSolidarias.Backend;
using MaosSolidarias.Services;

namespace MaosSolidarias.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController()
        {
            _usuarioService = new UsuarioService();
        }

        [HttpPost]
        public IActionResult CriarUsuario([FromBody] Usuario usuario)
        {
            _usuarioService.AdicionarUsuario(usuario);
            return CreatedAtAction(nameof(ObterUsuario), new { id = usuario.Id }, usuario);
        }

        [HttpGet]
        public IActionResult ObterUsuario()
        {
            var usuario = _usuarioService.ObterUsuario();
            return Ok(usuario);
        }

        [HttpGet("{id}")]
        public IActionResult ObterUsuario(int id)
        {
            var usuario = _usuarioService.ObterUsuario().Find(o => o.Id == id);
            if (usuario == null)
                return NotFound();
            return Ok(usuario);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarUsuario(int id, [FromBody] Usuario usuario)
        {
            usuario.Id = id;
            _usuarioService.AtualizarUsuario(usuario);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarUsuario(int id)
        {
            _usuarioService.RemoverUsuario(id);
            return NoContent();
        }
    }
}
