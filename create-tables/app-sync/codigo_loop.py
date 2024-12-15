import time
import threading
import subprocess
# Flag para controlar a execução do loop
executando = True

def main():
  # Executa o arquivo main.py
    print("Executando o script main.py...")
    try:
        subprocess.run(['python', r'C:/Users/erikg/Desktop/API/create-tables/app-sync/main.py'], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Erro ao executar o script main.py: {e}")

# Função para monitorar o comando de parada do usuário
def monitorar_entrada():
    global executando
    while True:
        comando = input("Digite 'sair' para interromper o script: ").strip().lower()
        if comando == 'sair':
            executando = False
            print("Interrompendo o script...")
            break

# Iniciar a thread que monitora a entrada do usuário
thread_monitor = threading.Thread(target=monitorar_entrada)
thread_monitor.start()

# Loop principal do script
try:
    print("Iniciando o processo de sincronização a cada 5 minutos.")
    while executando:
        main()  # Chama a função principal do script
        if not executando:
            break
        print("Aguardando 5 minutos para a próxima execução...")
        time.sleep(300)  # Aguarda 5 minutos (300 segundos)
except Exception as e:
    print("Ocorreu um erro:", e)

print("Script finalizado.")
