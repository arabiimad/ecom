create table if not exists category
(
    id integer not null primary key ,
    description varchar(255),
    name varchar(255)
);
create table if not exists product
(
    id integer not null primary key ,
    description varchar(255),
    name varchar(255),
    available_quantity double precision not null,
    price numeric(38,2),
    image varchar(255),
    category_id integer
            constraint azertyuiopqsdfghjl references category
);

create sequence if not exists category_seq increment by 50;
create sequence if not exists product_seq increment by 50;



INSERT INTO category (id, description, name)
VALUES
    (nextval('category_seq'), 'Clothing items for men', 'Men Clothes'),
    (nextval('category_seq'), 'Clothing items for women', 'Women Clothes'),
    (nextval('category_seq'), 'Clothing items for babies', 'Baby Clothes'),
    (nextval('category_seq'), 'Other types of clothing', 'Other Clothes');





