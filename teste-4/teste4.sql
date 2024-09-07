SELECT 
    c.cliente_id AS codigo_cliente,
    c.razao_social,
    t.numero AS telefone
FROM Clientes c
JOIN Estados e ON c.estado_id = e.estado_id
JOIN Telefones t ON c.cliente_id = t.cliente_id
WHERE e.sigla = 'SP'
ORDER BY c.cliente_id
;