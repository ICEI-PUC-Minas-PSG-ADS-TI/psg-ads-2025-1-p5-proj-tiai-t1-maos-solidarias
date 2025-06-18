using System.ComponentModel.DataAnnotations;

namespace MaosSolidarias.Backend
{
    public class Usuario
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O Nome � obrigat�rio.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O Email � obrigat�rio.")]
        [EmailAddress(ErrorMessage = "O Email n�o � v�lido.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A Senha � obrigat�ria.")]
        public string Senha { get; set; }

        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Descricao { get; set; }
    }
}
