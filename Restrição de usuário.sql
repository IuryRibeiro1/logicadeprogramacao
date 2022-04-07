create role novoPerfil;

create user cliente@localhost identified by '12345';
grant select on produtos.* to cliente;