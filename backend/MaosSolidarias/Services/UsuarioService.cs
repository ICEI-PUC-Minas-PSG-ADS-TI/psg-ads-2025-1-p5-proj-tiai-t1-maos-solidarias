using System.Collections.Generic;
using MaosSolidarias.Backend;
using MaosSolidarias.Repositories;

namespace MaosSolidarias.Services
{
    public class UsuarioService
    {
        private readonly UsuarioRepository _usuarioRepository;

        public UsuarioService()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        public void AdicionarUsuario(Usuario usuario)
        {
            _usuarioRepository.Criar(usuario);
        }

        public List<Usuario> ObterUsuario()
        {
            return _usuarioRepository.ListarTodos();
        }

        public void AtualizarUsuario(Usuario usuario)
        {
            _usuarioRepository.Atualizar(usuario);
        }

        public void RemoverOng(int id)
        {
            _usuarioRepository.Deletar(id);
        }
    }
}
