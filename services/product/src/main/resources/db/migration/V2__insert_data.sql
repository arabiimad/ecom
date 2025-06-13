INSERT INTO product (id, description, name, available_quantity, price, image, category_id)
VALUES
    -- Instruments
    (nextval('product_seq'), 'Dental explorer tip 0.5mm', 'Explorer Probe', 100, 9.99, 'C:\\JAVA_PROJECT\\images\\1.jpg', 1),
    (nextval('product_seq'), 'Front surface mirror', 'Dental Mirror', 80, 7.99, 'C:\\JAVA_PROJECT\\images\\2.jpg', 1),
    (nextval('product_seq'), 'Ultrasonic scaler tip', 'Scaler', 200, 29.99, 'C:\\JAVA_PROJECT\\images\\3.jpg', 1),
    (nextval('product_seq'), 'Tooth extraction forceps', 'Forceps', 50, 39.99, 'C:\\JAVA_PROJECT\\images\\4.jpg', 1),
    (nextval('product_seq'), 'Gracey curette #11/12', 'Curette', 150, 24.99, 'C:\\JAVA_PROJECT\\images\\5.jpg', 1),

    -- Consumables
    (nextval('product_seq'), 'Light-cure composite resin 4g', 'Composite Syringe', 100, 19.99, 'C:\\JAVA_PROJECT\\images\\6.jpg', 51),
    (nextval('product_seq'), '10x10cm sterile gauze pack', 'Sterile Gauze', 300, 9.99, 'C:\\JAVA_PROJECT\\images\\7.jpg', 51),
    (nextval('product_seq'), '37% phosphoric acid 5ml', 'Etching Gel', 120, 8.99, 'C:\\JAVA_PROJECT\\images\\8.jpg', 51),
    (nextval('product_seq'), 'Universal adhesive 5ml', 'Bonding Agent', 90, 12.99, 'C:\\JAVA_PROJECT\\images\\9.jpg', 51),
    (nextval('product_seq'), 'Mint flavor prophy paste 100g', 'Prophy Paste', 110, 6.99, 'C:\\JAVA_PROJECT\\images\\10.jpg', 51),

    -- Equipment
    (nextval('product_seq'), 'Ergonomic chair with LED light', 'Dental Chair', 10, 2999.99, 'C:\\JAVA_PROJECT\\images\\11.jpg', 101),
    (nextval('product_seq'), 'Class B 23L sterilizer', 'Autoclave', 5, 1899.99, 'C:\\JAVA_PROJECT\\images\\12.jpg', 101),
    (nextval('product_seq'), 'HD USB intraoral camera', 'Intraoral Camera', 20, 499.99, 'C:\\JAVA_PROJECT\\images\\13.jpg', 101),
    (nextval('product_seq'), '3L digital ultrasonic cleaner', 'Ultrasonic Cleaner', 15, 299.99, 'C:\\JAVA_PROJECT\\images\\14.jpg', 101),
    (nextval('product_seq'), 'Digital imaging sensor size #2', 'X-ray Sensor', 25, 999.99, 'C:\\JAVA_PROJECT\\images\\15.jpg', 101),

    -- Prosthetics
    (nextval('product_seq'), 'Perforated metal tray size S', 'Impression Tray', 70, 14.99, 'C:\\JAVA_PROJECT\\images\\16.jpg', 151),
    (nextval('product_seq'), 'Set of 28 teeth shade A2', 'Acrylic Teeth', 40, 29.99, 'C:\\JAVA_PROJECT\\images\\17.jpg', 151),
    (nextval('product_seq'), 'Prefabricated anterior crowns', 'Temporary Crown', 60, 34.99, 'C:\\JAVA_PROJECT\\images\\18.jpg', 151),
    (nextval('product_seq'), 'Modeling wax 500g', 'Wax Sheet', 50, 9.99, 'C:\\JAVA_PROJECT\\images\\19.jpg', 151),
    (nextval('product_seq'), 'Semi-adjustable articulator', 'Articulator', 30, 249.99, 'C:\\JAVA_PROJECT\\images\\20.jpg', 151);
