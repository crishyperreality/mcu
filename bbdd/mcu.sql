USE mcu;

CREATE TABLE movie (
	movie_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    director VARCHAR(50) NOT NULL,
    release_year SMALLINT NOT NULL,
    release_date DATE,
    chronology_year SMALLINT NOT NULL,
    description TEXT,
    image VARCHAR(45),
    released BOOLEAN DEFAULT TRUE
);

SELECT * FROM movie;

INSERT INTO movie (title, director, release_year, chronology_year, image, description) VALUES 
('Iron Man', 'Jon Favreau', 2008, 2010, 'ironman',
'Cuando el magnate multimillonario Tony Stark es secuestrado, deberá recurrir a sus conocimientos de ingeniería 
para construirse un exoesqueleto mecánico que le permitirá escapar. Este evento cambiará su vida para siempre,
pues dará pie a la creación de su identidad como superhéroe, Iron Man.'),
('El increíble Hulk', 'Louis Leterrier', 2008, 2010, 'hulk',
'El científico Bruce Banner busca por todo el mundo un antídoto que impida que su cuerpo se transforme en una bestia
verde: su alterego llamado Hulk. Cuando el gobierno de Estados Unidos le localiza y le obliga a regresar, deberá 
decidir si insistir en renunciar a los poderes de Hulk o proteger al país de un enemigo monstruoso.'),
('Iron Man 2', 'Jon Favreau', 2010, 2011, 'ironman2',
'Con la revelación pública de quién se esconde bajo la armadura de Iron Man, Tony deberá decidir quién debería estar
a cargo de tal poderosa arma. A su vez, tendrá que lidiar con un fantasma del pasado de su familia que pretende usar
las propias tecnologías Stark en su contra.'),
('Thor', 'Kenneth Branagh', 2011, 2011, 'thor',
'Thor, el príncipe heredero al trono de Asgard, desencadena una antigua guerra en el reino por culpa de sus actos imprudentes.
Como castigo, su padre Odín le exilia a la Tierra. Mientras aprende más sobre la humanidad y sobre el héroe que está destinado
a ser, se enfrentará a unas fuerzas oscuras que amenazan con invadir el planeta que está empezando a amar.'),
('Capitán América: El primer vengador', 'Joe Johnston', 2011, 1945, 'capitanamerica',
'En tiempos de la Segunda Guerra Mundial, Steve Rogers decide luchar por su visión idealista y enrolarse en el ejército
para luchar contra los nazis. Ninguneado por sus bajas capacidades físicas, se someterá a un experimento para convertirse
en el supersoldado que la nación necesita: el Capitán América.'),
('Los Vengadores', 'Joss Whedon', 2012, 2012, 'vengadores',
'Ante la inminente amenaza de la invasión de Loki, Nick Furia pone en marcha su plan: reunir a un grupo de superhéroes
que velen por la paz del planeta. Así, Iron Man, Capitán América, Hulk, Viuda Negra, Ojo de Halcón y Thor formarán los
Vengadores, los únicos capaces de pararle los pies a Loki.');

INSERT INTO movie (title, director, release_year, chronology_year, image, description) VALUES 
('Iron Man 3', 'Shane Black', 2013, 2012, 'ironman3',
'Tony ha salvado el planeta en numerosas ocasiones; sin embargo, sobrellevar las consecuencias psicológicas de esto 
no es fácil. Con una nueva amenaza cirniéndose sobre su mundo, deberá confiar en su ingenio y redescubrirse a sí mismo 
si quiere proteger a sus seres queridos.'),
('Thor: el mundo oscuro', 'Alan Taylor', 2013, 2013, 'thor2',
'Cuando una antigua raza liderada por un enemigo al que ni siquiera Odín pudo derrotar amenaza la paz en la Tierra, 
Thor se embarcará en un viaje peligroso. Determinado a proteger el planeta, decidirá buscar ayuda en un inesperado 
aliado: su hermano Loki.'),
('Capitán América: El soldado de invierno', 'Anthony Russo, Joe Russo', 2014, 2014, 'wintersoldier',
'Mientras Steve intenta adaptarse al siglo XXI, se verá envuelto en una conspiración emergente en S.H.I.E.L.D que 
parece querer acabar con la organización desde dentro. Durante la investigación, en la que le ayudarán Viuda Negra
y Halcón, también deberá hacer frente a un nuevo enemigo letal: el Soldado de Invierno.'),
('Guardianes de la Galaxia', 'James Gunn', 2014, 2014, 'guardianesgalaxia',
'El aventurero Peter Quill es capturado por un cazarrecompensas tras hacerse con una misteriosa y codiciada esfera.
Al descubrir el auténtico valor del objeto, aunará fuerzas con otros forajidos intergalácticos para asegurarse de que
no caiga en las manos equivocadas.'),
('Vengadores: La era de Ultrón', 'Joss Whedon', 2015, 2015, 'ultron',
'En un intento fallido de Tony por desarrollar un programa de protección emerge Ultrón, una inteligencia artificial
que pretende exterminar a la humanidad. Con la aparición de nuevos superhéroes, los Vengadores deberán enfrentarse
a Ultrón antes de que el mundo entero sufra unas terribles consecuencias.'),
('Ant-Man', 'Peyton Reed', 2015, 2015, 'antman',
'Recién salido de la cárcel, Scott Lang recibe un encargo especial del doctor Hank Pym. Cuando el científico le ofrece
un traje que le permite empequeñecer a voluntad y un plan de atraco que puede salvar el mundo, Scott reflexionará sobre
el camino con el que obtendrá la redención de sus delitos pasados.');

INSERT INTO movie (title, director, release_year, chronology_year, image, description) VALUES 
('Capitán América: Civil War', 'Anthony Russo, Joe Russo', 2016, 2016, 'civilwar',
'Tras lo acontecido en Sokovia, la presión política obliga a los Vengadores a firmar unos acuerdos que restrinjan sus 
movimientos a la supervisión gubernamental. Una escisión dentro del equipo define los líderes de dos bandos: 
Tony, que intenta responsabilizarse de sus actos, y el de Steve, que defiende mantener la libertad de actuación.'),
('Doctor Strange', 'Scott Derrickson', 2016, 2017, 'doctorstrange',
'Stephen Strange es un brillante cirujano con un futuro prometedor por delante. Cuando sus manos se ven 
severamente afectadas por culpa de un accidente de coche y sus planes de futuro se ven truncados, recurrirá 
desesperado a las artes místicas para recuperar su carrera profesional.'),
('Guardianes de la Galaxia vol. 2', 'James Gunn', 2017, 2014, 'guardianesgalaxia2',
'Peter Quill, Gamora, Rocket, Groot y Drax continúan sus aventuras viajando por el espacio. Cuando Peter conoce
a su padre, Ego, descubrirá más sobre sus orígenes y su propia identidad, mientras intenta mantener a su nueva
familia unida.'),
('Spider-Man: Homecoming', 'Jon Watts', 2017, 2016, 'spiderman',
'Después de su experiencia de primera mano con los Vengadores, el joven Peter Parker regresa a casa más dispuesto que nunca
a probarse a sí mismo y a salvar al mundo. Bajo la atenta mirada de Tony Stark, Peter intentará manejar su doble identidad: 
un típico adolescente de Brooklyn y el superhéroe Spider-Man.'),
('Thor: Ragnarok', 'Taika Waititi', 2017, 2017, 'ragnarok',
'Apresado y desprovisto de su martillo, Thor deberá ganar una batalla contrarreloj para impedir el Ragnarok, que supondría
el fin para su civilización. Para liberar a Asgard de la tiranía de su tía Hela tendrá que ingeniárselas para escapar,
intentando obtener la ayuda de un desorientado Hulk.'),
('Black Panther', 'Ryan Coogler', 2018, 2016, 'blackpanther',
"Tras la muerte de su padre, T'Challa regresa como rey a Wakanda, una nación aislada y tecnológicamente muy avanzada.
Ante la aparición de un viejo enemigo, T'Challa no sólo deberá probar sus dotes de gobierno, sino también su valía
como Black Panther, el guerrero protector de Wakanda."),
('Vengadores: Infinity War', 'Anthony Russo, Joe Russo', 2018, 2018, 'infinitywar',
'El colosal Thanos progresa en su búsqueda de las gemas del Infinito, que le conferirían el poder de destruir el
universo. Junto con sus nuevos aliados, los Vengadores deberán enfrentarse a su mayor amenaza hasta la fecha y 
proteger las gemas antes de que sea demasiado tarde.'),
('Ant-Man y la Avispa', 'Peyton Reed', 2018, 2018, 'antmanwasp',
'Mientras intenta lidiar con su vida como padre, Scott vuelve a ponerse el traje de Ant-Man. Sin embargo esta vez no
lo hará solo, pues contará con la ayuda de su aliada, la Avispa. Aprendiendo a luchar codo con codo, juntos
se embarcarán en una misión para desentrañar algunos secretos del pasado.'),
('Capitana Marvel', 'Anna Boden, Ryan Fleck', 2019, 1995, 'capitanamarvel',
'Una soldado de la civilización Kree se ve envuelta en una guerra entre dos razas intergalácticas, lo que provoca que
termine en un aterrizaje forzoso en la Tierra. Descubriendo el planeta y acompañada de un joven Nick Furia, 
Carol Danvers conocerá sus verdaderos orígenes y quién es en realidad.'),
('Vengadores: Endgame', 'Anthony Russo, Joe Russo', 2019, 2023, 'endgame',
'Tras la aniquilación de la mitad de la población universal a causa de las acciones de Thanos, los Vengadores intentan
seguir adelante mientras buscan la forma de restaurar el orden y traer de vuelta a sus seres queridos.'),
('Spider-Man: Lejos de casa', 'Jon Watts', 2019, 2023, 'spiderman2',
'Peter decide desconectar yéndose de vacaciones con sus amigos a un tour por toda Europa. Sin embargo, cuando Nick Furia 
le encomienda la misión de frenar el ataque de unas criaturas colosales, se da cuenta de que no le será tan sencillo
dejar a un lado el traje de Spiderman.');

INSERT INTO movie (title, director, release_year, chronology_year, release_date, released) VALUES 
('Viuda Negra', 'Cate Shortland', 2021, 2016, '2021-07-09', false),
('Shang Chi y la Leyenda de los Diez Anillos', 'Destin Daniel Cretton', 2021, 2021, '2021-09-03', false),
('Los Eternos', 'Chloé Zhao', 2021, 2021, '2021-11-05', false);

SELECT * FROM movie;

SELECT * FROM movie WHERE released ORDER BY chronology_year;

SELECT * FROM movie WHERE released ORDER BY release_year;

SELECT title, release_date FROM movie WHERE movie_id =
(SELECT MIN(movie_id) FROM movie WHERE released = false);

