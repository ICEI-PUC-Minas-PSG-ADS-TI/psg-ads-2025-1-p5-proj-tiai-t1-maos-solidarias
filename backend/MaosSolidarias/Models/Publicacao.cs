using System;
using System.ComponentModel.DataAnnotations;

namespace MaosSolidarias.Backend
{
    public class Publicacao
    {
        [Required(ErrorMessage = "O ID é obrigatório.")]
        public int Id { get; set; }

        [Required(ErrorMessage = "O Título é obrigatório.")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "O Subtítulo é obrigatório.")]
        public string Subtitulo { get; set; }

        [Required(ErrorMessage = "A descrição é obrigatória.")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "O ID do Usuário é obrigatório.")]
        public int UsuarioId { get; set; } // Chave estrangeira

        [Required(ErrorMessage = "A Imagem é obrigatória.")]
        public string Imagem { get; set; }

        // Construtor para inicializar as propriedades
        public Publicacao(string Titulo, string Subtitulo, string Descricao, int UsuarioId, string Imagem, int Id)
        {
            this.Id = Id;
            this.Titulo = Titulo ?? throw new ArgumentNullException(nameof(Titulo));
            this.Subtitulo = Subtitulo ?? throw new ArgumentNullException(nameof(Subtitulo));
            this.Descricao = Descricao ?? throw new ArgumentNullException(nameof(Descricao));
            this.UsuarioId = UsuarioId; 
            this.Imagem = Imagem ?? throw new ArgumentNullException(nameof(Imagem));
        }
    }
}
