create table escola(
idescola int not null auto_increment primary key,
nome varchar(30) not null,
notas decimal(3,1),
turno varchar(30)
);

insert into escola(nome, notas, turno)
values('Nicole' , '7.0' , 'Manhã');


create table cursos(
idcursos int not null auto_increment primary key,
nome varchar(30) not null,
nota_mínima tinyint
);

insert into cursos(nome, nota_mínima)
value('Medicina' , '9.5');

alter table escola add column curso int;

alter table escola add foreign key(curso)
references cursos (idcursos);

select escola.nome, escola.notas, cursos.nome, cursos.nota_mínima, escola.turno, escola.Situação from escola join cursos
on cursos.idcursos = escola.curso;

alter table escola add column Situação varchar(30);

update escola set Situação = 'Aprovado' 
where idescola = '5'
