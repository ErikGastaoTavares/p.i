import os
import logging
from connect import get_conn_pg, close_conn_pg
from sync_table_methods import update_local_table

# Definir o caminho do arquivo de log
log_file_path = os.path.join ('C:', os.sep, 'Users', 'erikg', 'Desktop', 'API', 'create-tables', 'app-sync', 'logs', 'sync.log')

# Certificar-se de que o diretório 'logs' existe
log_dir = os.path.dirname(log_file_path)
if not os.path.exists(log_dir):
    os.makedirs(log_dir)

# Configurar o logging
logging.basicConfig(
    filename=log_file_path,           # Nome do arquivo onde os logs serão armazenados
    filemode='a',                     # 'a' para anexar ao arquivo, 'w' para sobrescrever
    format='%(asctime)s - %(levelname)s - %(message)s',  # Formato da mensagem de log
    level=logging.INFO                # Nível de log (INFO para logs gerais)
)

def main():
    print("Iniciando o processo de sincronização...")

    # Tentar conectar ao host remoto primário
    try:
        print("Tentando conectar ao host remoto principal...")
        conn_pg_remoto = get_conn_pg('DB_HOST_rm_by_ext', 'DB_PORT_rm', 'DB_USER_rm', 'DB_PASSWORD_rm', 'DB_NAME_rm')
        print("Conexão com o host remoto principal bem-sucedida.")
    except Exception as e:
        print(f"Erro ao conectar ao host remoto principal: {e}")
        print("Tentando conectar ao host remoto alternativo...")
        try:
            conn_pg_remoto = get_conn_pg('DB_HOST_rm_by_uni', 'DB_PORT_rm', 'DB_USER_rm', 'DB_PASSWORD_rm', 'DB_NAME_rm')
            print("Conexão com o host remoto alternativo bem-sucedida.")
        except Exception as e_alt:
            print(f"Erro ao conectar ao host remoto alternativo: {e_alt}")
            print("Não foi possível conectar a nenhum dos hosts remotos.")
            return
        
    # Criar as conexões com os bancos de dados (local)
    conn_pg_local = get_conn_pg('DB_HOST_lc', 'DB_PORT_lc', 'DB_USER_lc', 'DB_PASSWORD_lc', 'DB_NAME_lc')

    # Verificar se as conexões foram estabelecidas
    if not conn_pg_remoto or not conn_pg_local:
        print("Erro: Não foi possível estabelecer conexão com os bancos de dados.")
        logging.error("Não foi possível estabelecer conexão com os bancos de dados.")
        return
    print("Conexões com bancos de dados estabelecidas com sucesso.")

    # Obter o cursor de cada conexão
    cursor_pg_rm = conn_pg_remoto.cursor()
    cursor_pg_lc = conn_pg_local.cursor()

    tables = [
        ["k72623_lo", ['"deviceName"', 'noise', 'temperature', 'humidity', 'pm2_5', 'time']],
        ["nit2xli", ['"deviceName"', 'emw_rain_lvl', 'emw_avg_wind_speed', 'emw_gust_wind_speed', 'emw_wind_direction', 'emw_temperature', 'emw_humidity', 'emw_luminosity', 'emw_uv', 'emw_solar_radiation', 'emw_atm_pres', 'time']]
    ]

    for table in tables:
        print(f"Atualizando tabela {table[0]}...")
        result = update_local_table(
            cursor_pg_local=cursor_pg_lc,
            cursor_pg_remoto=cursor_pg_rm,
            tableName=table[0],
            columns=table[1]
        )
        # Registrar logs
        if result.startswith("Error:"):
            print(f"Warning: {result}")
            logging.warning(f"{result}")
        else:
            print(f"Info: {result}")
            logging.info(f"{result}")

    # Commit das mudanças no banco de dados local
    conn_pg_local.commit()
    print("Alterações no banco de dados local foram confirmadas.")

    # Fechar conexões
    close_conn_pg(conn_pg_remoto)
    close_conn_pg(conn_pg_local)
    print("Conexões com bancos de dados fechadas com sucesso.")
    print("Processo de sincronização concluído.")

if __name__ == "__main__":
    main()