using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using MaosSolidarias.Backend;

namespace MaosSolidarias.Repositories
{
    public class UsuarioRepository
    {
        private BancoDeDados _db = new BancoDeDados();

        public void Criar(Usuario usuario)
        {
            string query = "INSERT INTO Usuarios (CNPJ, Email, Senha, AreaAtuacao, EnderecoCompleto, ResponsavelLegal, TelefoneContato, Id) VALUES (@CNPJ, @Email, @Senha, @AreaAtuacao, @EnderecoCompleto, @ResponsavelLegal, @TelefoneContato)";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@CNPJ", usuario.CNPJ);
                    cmd.Parameters.AddWithValue("@Email", usuario.Email);
                    cmd.Parameters.AddWithValue("@Senha", usuario.Senha);
                    cmd.Parameters.AddWithValue("@AreaAtuacao", usuario.AreaAtuacao);
                    cmd.Parameters.AddWithValue("@EnderecoCompleto", usuario.EnderecoCompleto);
                    cmd.Parameters.AddWithValue("@ResponsavelLegal", usuario.ResponsavelLegal);
                    cmd.Parameters.AddWithValue("@TelefoneContato", usuario.TelefoneContato);
                    cmd.ExecuteNonQuery();
                }
            }
        }

       public List<Usuario> ListarTodos()
{
    var lista = new List<Usuario>();
    string query = "SELECT * FROM Usuarios";
    
    using (SqlConnection conn = _db.abrirConexao())
    {
        using (SqlCommand cmd = new SqlCommand(query, conn))
        {
            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    lista.Add(new Usuario(
                        Id: Convert.ToInt32(reader["Id"]),
                        CNPJ: reader["CNPJ"].ToString(),
                        Email: reader["Email"].ToString(),
                        Senha: reader["Senha"].ToString(),
                        AreaAtuacao: reader["AreaAtuacao"].ToString(),
                        EnderecoCompleto: reader["EnderecoCompleto"].ToString(),
                        ResponsavelLegal: reader["ResponsavelLegal"].ToString(),
                        TelefoneContato: reader["TelefoneContato"].ToString()
                    ));
                }
            }
        }
    }
    return lista;
}


        public void Atualizar(Usuario usuario)
        {
            string query = "UPDATE Usuarios SET CNPJ = @CNPJ, Email = @Email, Senha = @Senha, AreaAtuacao = @AreaAtuacao, EnderecoCompleto = @EnderecoCompleto, ResponsavelLegal = @ResponsavelLegal, TelefoneContato = @TelefoneContato WHERE Id = @Id";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@CNPJ", usuario.CNPJ);
                    cmd.Parameters.AddWithValue("@Email", usuario.Email);
                    cmd.Parameters.AddWithValue("@Senha", usuario.Senha);
                    cmd.Parameters.AddWithValue("@AreaAtuacao", usuario.AreaAtuacao);
                    cmd.Parameters.AddWithValue("@EnderecoCompleto", usuario.EnderecoCompleto);
                    cmd.Parameters.AddWithValue("@ResponsavelLegal", usuario.ResponsavelLegal);
                    cmd.Parameters.AddWithValue("@TelefoneContato", usuario.TelefoneContato);
                    cmd.Parameters.AddWithValue("@Id", usuario.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Deletar(int id)
        {
            string query = "DELETE FROM Usuarios WHERE Id = @Id";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
