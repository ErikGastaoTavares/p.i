def selectLastRecord(cursor_pg_local, tableName):
    selectMostRecentRecord_local = f"""
        SELECT *
        FROM {tableName}
        ORDER BY time DESC LIMIT 1
    """
    cursor_pg_local.execute(selectMostRecentRecord_local)
    last_record = cursor_pg_local.fetchone()
    return last_record

def selectNewRecordsFromRemoteDatabase(cursor_pg_remoto, mostRecentTimestamp, tableName, columns):
    # Script SQL para selecionar os novos registros da tabela do PG remoto
    selectAllNewRecords_remoto = f"""
        SELECT {','.join(columns)}
        FROM {tableName}
        WHERE time > %s
        ORDER BY time ASC
    """
    cursor_pg_remoto.execute(selectAllNewRecords_remoto, (mostRecentTimestamp,))
    return cursor_pg_remoto.fetchall()

def insertIntoDatabaseLocal(cursor_pg_local, newRecords, tableName, columns):
    values_placeholders = ['%s'] * len(columns)
    insert_into_table_local = f"""
        INSERT INTO {tableName}
        ({','.join(columns)})
        VALUES ({','.join(values_placeholders)})
    """
    for record in newRecords:
        cursor_pg_local.execute(insert_into_table_local, record)

    return f"{tableName} atualizado: {len(newRecords)} registros adicionados."

def update_local_table(cursor_pg_local, cursor_pg_remoto, tableName, columns):
    lastRecord = selectLastRecord(cursor_pg_local, tableName)

    if lastRecord:
        time_id = len(lastRecord) - 1
        mostRecentTimestamp = lastRecord[time_id]
        newRecords = selectNewRecordsFromRemoteDatabase(
            cursor_pg_remoto,
            mostRecentTimestamp,
            tableName,
            columns
        )
        if len(newRecords) > 0:
            return insertIntoDatabaseLocal(cursor_pg_local, newRecords, tableName, columns)
        else:
            return f"{tableName} está atualizada."
    else:
        return f"Error: Não foi possível obter o último registro da tabela {tableName}."