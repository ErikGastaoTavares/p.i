import psycopg2

try:
    conn = psycopg2.connect(
        host="200.17.86.20",
        port="55432",
        user="piinfra",
        password="FkBMK4787WsA",
        dbname="santa_rosa"
    )
    print("Conexão estabelecida com sucesso!")
    conn.close()
except Exception as e:
    print("Erro ao conectar ao banco de dados:", e)
