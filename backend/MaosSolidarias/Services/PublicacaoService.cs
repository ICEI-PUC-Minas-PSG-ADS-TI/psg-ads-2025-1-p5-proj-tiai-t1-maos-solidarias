using System.Collections.Generic;
using MaosSolidarias.Backend;
using MaosSolidarias.Repositories;

namespace MaosSolidarias.Services
{
    public class PublicacaoService
    {
        private readonly PublicacaoRepository _publicacaoRepository;

        public PublicacaoService()
        {
            _publicacaoRepository = new PublicacaoRepository();
        }

        public void AdicionarPublicacao(Publicacao publicacao)
        {
            _publicacaoRepository.Criar(publicacao);
        }

        public List<Publicacao> ObterPublicacoes()
        {
            return _publicacaoRepository.ListarTodos();
        }

        public void AtualizarPublicacao(Publicacao publicacao)
        {
            _publicacaoRepository.Atualizar(publicacao);
        }

        public void RemoverPublicacao(int id)
        {
            _publicacaoRepository.Deletar(id);
        }
    }
}
