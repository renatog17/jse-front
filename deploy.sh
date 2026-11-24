#!/usr/bin/env bash

set -euo pipefail

# ==========================================
# JSE - Deploy de produção
# ==========================================

SERVER="renato@191.252.223.160"
REMOTE_DIR="jse"

IMAGE_NAME="jse-web"
VERSION="1.0.0"

COMPOSE_FILE="compose.prod.yaml"

echo "=========================================="
echo " Iniciando deploy do JSE"
echo " Servidor: $SERVER"
echo " Imagem: $IMAGE_NAME:$VERSION"
echo "=========================================="

# 1. Verificar infraestrutura na VPS

echo "[1/5] Verificando servidor..."

ssh "$SERVER" '
    mkdir -p "$HOME/jse"
    docker network inspect proxy-network >/dev/null
'

# 2. Compilar imagem localmente

echo "[2/5] Compilando imagem Docker localmente..."

docker build \
    -t "$IMAGE_NAME:$VERSION" \
    .

# 3. Transferir imagem para a VPS

echo "[3/5] Transferindo imagem para a VPS..."

docker save "$IMAGE_NAME:$VERSION" \
    | gzip \
    | ssh "$SERVER" 'gzip -dc | docker load'

# 4. Transferir Docker Compose

echo "[4/5] Enviando Docker Compose..."

scp "$COMPOSE_FILE" \
    "$SERVER:~/$REMOTE_DIR/$COMPOSE_FILE"

# 5. Executar container na VPS

echo "[5/5] Atualizando container..."

ssh "$SERVER" "
    cd \"\$HOME/$REMOTE_DIR\"

    docker compose -f $COMPOSE_FILE \
        up -d \
        --no-build \
        --pull never \
        --force-recreate

    docker compose -f $COMPOSE_FILE ps
"

echo ""
echo "=========================================="
echo " Deploy do JSE concluído!"
echo "=========================================="