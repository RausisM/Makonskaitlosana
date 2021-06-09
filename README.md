connect to postgre
tests:
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (3, 'Jelgava', ST_GeogFromText('POINT(23.71278 56.65)') );
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (4, 'Riga', ST_GeogFromText('POINT(23.71278 56.65)') );
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (5, 'Ventspils', ST_GeogFromText('POINT(23.71278 56.65)') );
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (6, 'Liepaja', ST_GeogFromText('POINT(23.71278 56.65)') );
