using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using MaosSolidarias.Backend;

namespace MaosSolidarias.Repositories
{
    public class PublicacaoRepository
    {
        private BancoDeDados _db = new BancoDeDados();

        public void Criar(Publicacao publicacao)
        {
            string query = "INSERT INTO Publicacoes (Titulo, Conteudo, DataPublicacao, UsuarioId) VALUES (@Titulo, @Conteudo, GETDATE(), @UsuarioId)";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Titulo", publicacao.Titulo);
                    cmd.Parameters.AddWithValue("@Conteudo", publicacao.Conteudo);
                    cmd.Parameters.AddWithValue("@UsuarioId", publicacao.UsuarioId);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Publicacao> ListarTodos()
        {
            var lista = new List<Publicacao>();
            string query = "SELECT * FROM Publicacoes";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            lista.Add(new Publicacao
                            {
                                Id = Convert.ToInt32(reader["Id"]),
                                Titulo = reader["Titulo"].ToString(),
                                Conteudo = reader["Conteudo"].ToString(),
                                DataPublicacao = Convert.ToDateTime(reader["DataPublicacao"]),
                                UsuarioId = Convert.ToInt32(reader["UsuarioId"])
                            });
                        }
                    }
                }
            }
            return lista;
        }

        public void Atualizar(Publicacao publicacao)
        {
            string query = "UPDATE Publicacoes SET Titulo = @Titulo, Conteudo = @Conteudo WHERE Id = @Id";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Titulo", publicacao.Titulo);
                    cmd.Parameters.AddWithValue("@Conteudo", publicacao.Conteudo);
                    cmd.Parameters.AddWithValue("@Id", publicacao.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Deletar(int id)
        {
            string query = "DELETE FROM Publicacoes WHERE Id = @Id";
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
