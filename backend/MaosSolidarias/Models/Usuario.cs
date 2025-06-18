using System.ComponentModel.DataAnnotations;

namespace MaosSolidarias.Backend
{
    public class Usuario
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "O Email não é válido.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A Senha é obrigatória.")]
        public string Senha { get; set; }

        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Descricao { get; set; }
    }
}
