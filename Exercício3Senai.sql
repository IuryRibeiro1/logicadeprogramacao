create table produtos(
idprodutos int not null auto_increment primary key,
nome varchar(30) not null,
preco tinyint,
quantidade varchar(30) not null
);

insert into produtos (nome, preco, quantidade)
values('Carne', 30 , '2Kg'),
	  ('Óleo' , 30 , '1 Unidade'),
      ('Leite' , 30 , '1,5 Litros'),
      ('Alface' , 30, '1 Unidade'),
      ('Açaí' , 15 , ' 1,5 Litros'),
      ('Cebola' , 4 , '1Kg'),
      ('Arroix' , 5 , '1Kg');

delete from produtos
where idprodutos = '6';

update produtos
set idprodutos = '6'
where idprodutos = '7';

update produtos
set nome = 'Arroz'
where idprodutos = '6';

select * from produtos;




	  
 


