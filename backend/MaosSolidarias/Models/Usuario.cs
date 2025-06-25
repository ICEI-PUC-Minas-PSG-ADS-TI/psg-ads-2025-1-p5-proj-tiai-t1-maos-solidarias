using System;
using System.ComponentModel.DataAnnotations;

namespace MaosSolidarias.Backend
{
    public class Usuario
    {
        [Required(ErrorMessage = "O ID é obrigatório.")]
        public int Id { get; set; }

        [Required(ErrorMessage = "O CNPJ é obrigatório.")]
        public string CNPJ { get; set; }

        [Required(ErrorMessage = "O Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "O Email não é válido.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A Senha é obrigatória.")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "A Área de Atuação é obrigatória.")]
        public string AreaAtuacao { get; set; }

        [Required(ErrorMessage = "O Endereço Completo é obrigatório.")]
        public string EnderecoCompleto { get; set; }

        [Required(ErrorMessage = "O Responsável Legal é obrigatório.")]
        public string ResponsavelLegal { get; set; }

        [Required(ErrorMessage = "O Telefone de Contato é obrigatório.")]
        public string TelefoneContato { get; set; }

        // Construtor
        public Usuario(string CNPJ, string Email, string Senha, string AreaAtuacao, string EnderecoCompleto, string ResponsavelLegal, string TelefoneContato, int Id)
        {
            this.Email = Email;
            this.Senha = Senha;
            this.AreaAtuacao = AreaAtuacao;
            this.EnderecoCompleto = EnderecoCompleto;
            this.ResponsavelLegal = ResponsavelLegal;
            this.TelefoneContato = TelefoneContato;
            this.Id = Id;
            this.CNPJ = CNPJ;
        }
    }
}
