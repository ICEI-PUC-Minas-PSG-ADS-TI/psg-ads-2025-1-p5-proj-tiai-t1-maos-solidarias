var builder = WebApplication.CreateBuilder(args);

// Adiciona suporte a controllers
builder.Services.AddControllers(); 


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Mapeia os controllers
app.MapControllers(); 

app.Run();
