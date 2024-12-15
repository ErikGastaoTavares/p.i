#!/bin/bash
export PGPASSWORD="admin"
psql -h localhost -p 5432 -U postgres -d postgres -f script.sql
