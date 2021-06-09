connect to postgre
tests:
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (3, 'Jelgava', ST_GeogFromText('POINT(23.71278 56.65)') );
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (4, 'RTU', ST_GeogFromText('POINT(24.079912304878235 56.9451585178194)') );
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (5, 'Ventspils', ST_GeogFromText('POINT(21.56056 57.38944)') );
INSERT INTO locationsworking (loc_id, loc_name, geog) VALUES (6, 'Liepaja', ST_GeogFromText('POINT(21.01667 56.51667)') );
