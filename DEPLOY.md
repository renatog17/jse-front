# Deploy em VPS

A imagem é compilada localmente. Na VPS, basta carregar a imagem transferida e iniciar o Compose. Os exemplos usam `usuario@vps` como destino SSH; substitua pelo acesso real.

## Compilar localmente

Na raiz do projeto:

```sh
docker build -t jse-web:1.0.0 .
```

## Transferir a imagem e o Compose

Envie a imagem compactada via SSH:

```sh
docker save jse-web:1.0.0 | gzip | ssh usuario@vps 'docker load'
```

Envie o Compose via SCP:

```sh
scp compose.prod.yaml usuario@vps:~/jse/compose.prod.yaml
```

O Docker Engine da VPS deve ter a rede externa `proxy-network` já criada e compartilhada com o Caddy.

## Caddy

No Caddyfile, encaminhe o domínio para o nome do container na rede compartilhada:

```caddyfile
seu-dominio.com {
    reverse_proxy jse-web:80
}
```

Recarregue o Caddy conforme o método usado na VPS. Não é necessário publicar a porta do site no host.

## Iniciar na VPS

Depois de transferir os arquivos e carregar a imagem, execute na VPS:

```sh
cd ~/jse && docker compose -f compose.prod.yaml up -d
```

Esse comando usa a imagem local já carregada; não há etapa de build ou instalação de dependências na VPS.

## Atualizar a aplicação

Use uma nova tag para cada versão. No computador local, atualize a tag nos comandos de build e no `compose.prod.yaml`, compile a nova imagem e transfira-a:

```sh
docker build -t jse-web:1.0.1 .
docker save jse-web:1.0.1 | gzip | ssh usuario@vps 'docker load'
scp compose.prod.yaml usuario@vps:~/jse/compose.prod.yaml
```

Confirme que o `image:` do Compose enviado está como `jse-web:1.0.1`. Na VPS, aplique:

```sh
cd ~/jse && docker compose -f compose.prod.yaml up -d
```

## Logs e estado

```sh
docker logs -f jse-web
docker inspect --format '{{.State.Status}} / {{if .State.Health}}{{.State.Health.Status}}{{else}}sem healthcheck{{end}}' jse-web
```
