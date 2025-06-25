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
            string query = "INSERT INTO Publicacoes (Titulo, Imagem, Subtitulo, Descricao, DataPublicacao, UsuarioId, Id) VALUES (@Titulo, @Imagem, @Subtitulo, @Descricao, @UsuarioId, @Id)";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Titulo", publicacao.Titulo);
                    cmd.Parameters.AddWithValue("@Imagem", publicacao.Imagem);
                    cmd.Parameters.AddWithValue("@Subtitulo", publicacao.Subtitulo);
                    cmd.Parameters.AddWithValue("@Descricao", publicacao.Descricao);
                    cmd.Parameters.AddWithValue("@UsuarioId", publicacao.UsuarioId);
                    cmd.Parameters.AddWithValue("@Id", publicacao.Id);
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
                            lista.Add(new Publicacao(
                                Titulo: reader["Titulo"].ToString(),
                                Imagem: reader["Imagem"].ToString(),
                                Subtitulo: reader["Subtitulo"].ToString(),
                                Descricao: reader["Descricao"].ToString(),
                                UsuarioId: Convert.ToInt32(reader["UsuarioId"]),
                                Id: Convert.ToInt32(reader["Id"]) // Passar o Id aqui
                            ));

                        }
                    }
                }
            }
            return lista;
        }

        public void Atualizar(Publicacao publicacao)
        {
            string query = "UPDATE Publicacoes SET Titulo = @Titulo, Imagem = @Imagem, Subtitulo = @Subtitulo, Descricao = @Descricao WHERE Id = @Id";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Titulo", publicacao.Titulo);
                    cmd.Parameters.AddWithValue("@Imagem", publicacao.Imagem);
                    cmd.Parameters.AddWithValue("@Subtitulo", publicacao.Subtitulo);
                    cmd.Parameters.AddWithValue("@Descricao", publicacao.Descricao);
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
