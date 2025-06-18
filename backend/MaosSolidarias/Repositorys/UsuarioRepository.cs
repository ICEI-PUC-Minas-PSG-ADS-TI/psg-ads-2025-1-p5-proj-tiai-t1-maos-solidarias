using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using MaosSolidarias.Backend;

namespace MaosSolidarias.Repositories
{
    public class UsuarioRepository
    {
        private BancoDeDados _db = new BancoDeDados();

        public void Criar(Usuario usuario)
        {
            string query = "INSERT INTO Usuarios (Nome, Descricao, Endereco) VALUES (@Nome, @Descricao, @Endereco)";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Nome", usuario.Nome);
                    cmd.Parameters.AddWithValue("@Descricao", usuario.Descricao);
                    cmd.Parameters.AddWithValue("@Endereco", usuario.Endereco);
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
                            lista.Add(new Usuario
                            {
                                Id = Convert.ToInt32(reader["Id"]),
                                Nome = reader["Nome"].ToString(),
                                Descricao = reader["Descricao"].ToString(),
                                Endereco = reader["Endereco"].ToString()
                            });
                        }
                    }
                }
            }
            return lista;
        }

        public void Atualizar(Usuario usuario)
        {
            string query = "UPDATE Usuarios SET Nome = @Nome, Descricao = @Descricao, Endereco = @Endereco WHERE Id = @Id";
            using (SqlConnection conn = _db.abrirConexao())
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@Nome", usuario.Nome);
                    cmd.Parameters.AddWithValue("@Descricao", usuario.Descricao);
                    cmd.Parameters.AddWithValue("@Endereco", usuario.Endereco);
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
