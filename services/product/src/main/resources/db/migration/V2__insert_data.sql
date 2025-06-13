INSERT INTO product (id, description, name, available_quantity, price, image, category_id)
VALUES
    -- Men Clothes
    (nextval('product_seq'), 'Long-sleeve cotton shirt', 'Blue Shirt', 100, 29.99, 'C:\\JAVA_PROJECT\\images\\1.jpg', 1),
    (nextval('product_seq'), 'Denim jeans', 'Levis Jeans', 150, 49.99, 'C:\\JAVA_PROJECT\\images\\2.jpg', 1),
    (nextval('product_seq'), 'Leather jacket', 'Black Jacket', 50, 199.99, 'C:\\JAVA_PROJECT\\images\\3.jpg', 1),
    (nextval('product_seq'), 'Cotton T-shirt', 'White T-shirt', 200, 19.99, 'C:\\JAVA_PROJECT\\images\\4.jpg', 1),
    (nextval('product_seq'), 'Hoodie', 'Grey Hoodie', 80, 39.99, 'C:\\JAVA_PROJECT\\images\\5.jpg', 1),

    -- Women Clothes
    (nextval('product_seq'), 'Cotton summer dress', 'Floral Dress', 60, 49.99, 'C:\\JAVA_PROJECT\\images\\6.jpg', 51),
    (nextval('product_seq'), 'Linen trousers', 'Beige Trousers', 90, 39.99, 'C:\\JAVA_PROJECT\\images\\7.jpg', 51),
    (nextval('product_seq'), 'Silk blouse', 'Pink Blouse', 70, 59.99, 'C:\\JAVA_PROJECT\\images\\8.jpg', 51),
    (nextval('product_seq'), 'Pencil skirt', 'Black Skirt', 85, 34.99, 'C:\\JAVA_PROJECT\\images\\9.jpg', 51),
    (nextval('product_seq'), 'Winter coat', 'Beige Coat', 40, 149.99, 'C:\\JAVA_PROJECT\\images\\10.jpg', 51),

    -- Baby Clothes
    (nextval('product_seq'), 'Baby bodysuit', 'White Bodysuit', 120, 9.99, 'C:\\JAVA_PROJECT\\images\\11.jpg', 101),
    (nextval('product_seq'), 'Cotton pyjamas', 'Blue Pyjamas', 100, 19.99, 'C:\\JAVA_PROJECT\\images\\12.jpg', 101),
    (nextval('product_seq'), 'Baby slippers', 'Pink Slippers', 200, 14.99, 'C:\\JAVA_PROJECT\\images\\13.jpg', 101),
    (nextval('product_seq'), 'Wool beanie', 'Grey Beanie', 150, 12.99, 'C:\\JAVA_PROJECT\\images\\14.jpg', 101),
    (nextval('product_seq'), 'Denim overalls', 'Blue Overalls', 90, 24.99, 'C:\\JAVA_PROJECT\\images\\15.jpg', 101),

    -- Other Clothes
    (nextval('product_seq'), 'Cashmere scarf', 'Beige Scarf', 70, 49.99, 'C:\\JAVA_PROJECT\\images\\16.jpg', 151),
    (nextval('product_seq'), 'Straw hat', 'Brown Hat', 50, 29.99, 'C:\\JAVA_PROJECT\\images\\17.jpg', 151),
    (nextval('product_seq'), 'Leather belt', 'Black Belt', 120, 19.99, 'C:\\JAVA_PROJECT\\images\\18.jpg', 151),
    (nextval('product_seq'), 'Wool gloves', 'Grey Gloves', 80, 14.99, 'C:\\JAVA_PROJECT\\images\\19.jpg', 151),
    (nextval('product_seq'), 'Cotton socks', 'White Socks', 200, 9.99, 'C:\\JAVA_PROJECT\\images\\20.jpg', 151);