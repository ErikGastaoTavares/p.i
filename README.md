# p.i
sera necessario mudar algumas configurações no arquivo: 
create-tables>app-sync>main.py
linha 7: log_file_path = os.path.join ('C:', os.sep, 'Users', 'erikg', 'Desktop', 'API', 'create-tables', 'app-sync', 'logs', 'sync.log')
essa é a localização onde será criado o arquivo de logs de suas execuções, atualizações, erros.