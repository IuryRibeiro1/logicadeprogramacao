create user 'gerente'@'localhost' identified by '12345';
grant insert, delete, update, select on cadastro.* to 'gerente'@'localhost';

create user 'funcionario'@'localhost' identified by '123456789';
grant select on cadastro.* to 'funcionario'@'localhost';

flush privileges;

