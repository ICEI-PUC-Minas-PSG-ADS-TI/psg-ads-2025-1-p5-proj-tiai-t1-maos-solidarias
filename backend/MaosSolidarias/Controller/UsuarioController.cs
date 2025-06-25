using Microsoft.AspNetCore.Mvc;
using MaosSolidarias.Backend;
using MaosSolidarias.Services;
using System.Collections.Generic;

namespace MaosSolidarias.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

    

        // Injeção de dependência do serviço via construtor
        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        // POST api/usuario
        [HttpPost]
        public IActionResult CriarUsuario([FromBody] Usuario usuario)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var usuariosExistentes = _usuarioService.ObterUsuario();
            if (usuariosExistentes.Exists(u => u.Email == usuario.Email))
            {
                return Conflict(new { message = "Usuário com este email já existe." });
            }

            _usuarioService.AdicionarUsuario(usuario);

            return CreatedAtAction(nameof(ObterUsuarioPorId), new { id = usuario.Id }, usuario);
        }

        // GET api/usuario
        [HttpGet]
        public ActionResult<List<Usuario>> ObterUsuarios()
        {
            var usuarios = _usuarioService.ObterUsuario();
            return Ok(usuarios);
        }

        // GET api/usuario/{id}
        [HttpGet("{id}")]
        public ActionResult<Usuario> ObterUsuarioPorId(int id)
        {
            var usuario = _usuarioService.ObterUsuario().Find(u => u.Id == id);
            if (usuario == null)
                return NotFound(new { message = "Usuário não encontrado." });

            return Ok(usuario);
        }

        // PUT api/usuario/{id}
        [HttpPut("{id}")]
        public IActionResult AtualizarUsuario(int id, [FromBody] Usuario usuario)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var usuarioExistente = _usuarioService.ObterUsuario().Find(u => u.Id == id);
            if (usuarioExistente == null)
                return NotFound(new { message = "Usuário não encontrado." });

            usuario.Id = id;
            _usuarioService.AtualizarUsuario(usuario);
            return NoContent();
        }

        // DELETE api/usuario/{id}
        [HttpDelete("{id}")]
        public IActionResult DeletarUsuario(int id)
        {
            var usuarioExistente = _usuarioService.ObterUsuario().Find(u => u.Id == id);
            if (usuarioExistente == null)
                return NotFound(new { message = "Usuário não encontrado." });

            _usuarioService.RemoverUsuario(id);
            return NoContent();
        }
    }
}

