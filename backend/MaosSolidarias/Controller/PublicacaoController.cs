using Microsoft.AspNetCore.Mvc;
using MaosSolidarias.Backend;
using MaosSolidarias.Services;

namespace MaosSolidarias.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class PublicacaoController : ControllerBase
    {
        private readonly PublicacaoService _publicacaoService;

        public PublicacaoController()
        {
            _publicacaoService = new PublicacaoService();
        }

        [HttpPost]
        public IActionResult CriarPublicacao([FromBody] Publicacao publicacao)
        {
            _publicacaoService.AdicionarPublicacao(publicacao);
            return CreatedAtAction(nameof(ObterPublicacao), new { id = publicacao.Id }, publicacao);
        }

        [HttpGet]
        public IActionResult ObterPublicacoes()
        {
            var publicacoes = _publicacaoService.ObterPublicacoes();
            return Ok(publicacoes);
        }

        [HttpGet("{id}")]
        public IActionResult ObterPublicacao(int id)
        {
            var publicacao = _publicacaoService.ObterPublicacoes().Find(p => p.Id == id);
            if (publicacao == null)
                return NotFound();
            return Ok(publicacao);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarPublicacao(int id, [FromBody] Publicacao publicacao)
        {
            publicacao.Id = id;
            _publicacaoService.AtualizarPublicacao(publicacao);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarPublicacao(int id)
        {
            _publicacaoService.RemoverPublicacao(id);
            return NoContent();
        }
    }
}
