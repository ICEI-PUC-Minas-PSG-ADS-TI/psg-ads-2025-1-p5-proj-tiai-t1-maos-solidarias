using System;
using System.ComponentModel.DataAnnotations; 


namespace MaosSolidarias.Backend
{
    public class Publicacao
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O T�tulo � obrigat�rio.")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "A descri��o � obrigat�ria.")]
        public string Descricao { get; set; }

        public DateTime DataPublicacao { get; set; }

        [Required(ErrorMessage = "O ID do Usu�rio � obrigat�rio.")]
        public int UsuarioId { get; set; } // Chave estrangeira
    }
}
