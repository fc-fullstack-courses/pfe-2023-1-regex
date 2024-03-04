SELECT * FROM users
WHERE regexp_like(first_name, '^j.*o$', 'i');