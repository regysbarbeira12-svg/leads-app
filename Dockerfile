# Usa uma imagem leve do Nginx para servir arquivos estáticos
FROM nginx:alpine
# Copia o seu arquivo html para a pasta que o Nginx usa
COPY MindCap_prototipo.html /usr/share/nginx/html/index.html
# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80
