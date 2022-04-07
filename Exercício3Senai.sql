select produtos.nome, produtos.preco, medidas.nome, produtos.empresa from produtos join medidas
on medidas.idmedidas = produtos.quantidade
order by produtos.empresa;


alter table produtos 
add column empresa varchar(30)not null;

update produtos
set empresa = 'CompanhiaDoAlface'
where idprodutos = '4';

alter table produtos drop column empresa