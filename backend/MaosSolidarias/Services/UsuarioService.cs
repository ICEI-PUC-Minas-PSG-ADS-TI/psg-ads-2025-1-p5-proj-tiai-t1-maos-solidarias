using System.Collections.Generic;
using MaosSolidarias.Backend;
using MaosSolidarias.Repositories;
using System.ComponentModel.DataAnnotations; 


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

        public void RemoverUsuario(int id)
        {
            _usuarioRepository.Deletar(id);
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
