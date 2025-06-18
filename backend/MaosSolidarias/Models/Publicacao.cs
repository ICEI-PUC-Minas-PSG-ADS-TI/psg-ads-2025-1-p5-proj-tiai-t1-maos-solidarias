using System;

namespace MaosSolidarias.Backend
{
    public class Publicacao
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O Título é obrigatório.")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "A descrição é obrigatória.")]
        public string Descricao { get; set; }

        public DateTime DataPublicacao { get; set; }

        [Required(ErrorMessage = "O ID do Usuário é obrigatório.")]
        public int UsuarioId { get; set; } // Chave estrangeira
    }
}
