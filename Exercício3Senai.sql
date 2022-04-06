create table produtos (
idprodutos int not null auto_increment primary key,
nome varchar(30) not null,
preco tinyint not null
);
insert into produtos (nome, preco)
values ('Alface' , 30.0);

select * from produtos;



create table medidas(
idmedidas int not null auto_increment primary key,
nome varchar(30) not null
);

insert into medidas(nome)
values ('1,5 litros');

alter table produtos add column quantidade int;

alter table produtos add foreign key (quantidade)
references medidas (idmedidas);

update produtos set quantidade = '2' where idprodutos = '2';

create table produtos (
idprodutos int not null auto_increment primary key,
nome varchar(30) not null,
preco tinyint not null
);
insert into produtos (nome, preco)
values ('Alface' , 30.0);


create table medidas(
idmedidas int not null auto_increment primary key,
nome varchar(30) not null
);

insert into medidas(nome)
values ('1,5 litros');

alter table produtos add column quantidade int;

alter table produtos add foreign key (quantidade)
references medidas (idmedidas);

update produtos set quantidade = '2' where idprodutos = '2';

select produtos.nome, produtos.preco, medidas.nome, produtos.empresa from produtos join medidas
on medidas.idmedidas = produtos.quantidade
order by produtos.nome;


alter table produtos 
add column empresa varchar(30)not null;

update produtos
set empresa = 'CompanhiaDoAlface'
where idprodutos = '4';

alter table produtos drop column empresa