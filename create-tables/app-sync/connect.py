import psycopg2 as pg
from psycopg2 import Error
from dotenv import load_dotenv
import os

#Carregar as variáveis de ambiente do arquivo .env
load_dotenv()

def close_conn_pg(conn):
    if conn:
        conn.close()

def get_conn_pg(host_env_var, port_env_var, user_env_var, password_env_var, database_env_var):
    try:
        conn = pg.connect(
            host=os.getenv(host_env_var),
            port=os.getenv(port_env_var),
            user=os.getenv(user_env_var),
            password=os.getenv(password_env_var),
            database=os.getenv(database_env_var)
        )
        return conn
    except Error as e:
        print(f"Error connecting to the database: {e}")
        return None





