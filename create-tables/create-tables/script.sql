DROP TABLE IF EXISTS k72623_lo;
CREATE TABLE k72623_lo (
  id int4 GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "deviceName" varchar(100),
  noise float4 NULL,
  temperature float4 NULL,
  humidity float4 NULL,
  pm2_5 float4 NULL,
  pm10 float4 NULL,
  "time" timestamptz NOT NULL
);

INSERT INTO public.k72623_lo ("deviceName", "time")
VALUES ('dv-temp-excluir', '2000-01-01 00:00:01');

DROP TABLE IF EXISTS nit2xli;
CREATE TABLE nit2xli (
  id int4 GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "deviceName" varchar(100) NOT NULL,
  emw_rain_lvl float4 NULL,
  emw_avg_wind_speed int4 NULL,
  emw_gust_wind_speed int4 NULL,
  emw_wind_direction int4 NULL,
  emw_temperature float4 NULL,
  emw_humidity float4 NULL,
  emw_luminosity int8 NULL,
  emw_uv float4 NULL,
  emw_solar_radiation float4 NULL,
  emw_atm_pres float4 NULL,
  "time" timestamptz NULL
);
INSERT INTO public.nit2xli ("deviceName", "time")
VALUES ('dv-temp-excluir', '2000-01-01 00:00:01');