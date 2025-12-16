# server.py
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
import re

app = FastAPI(title="IP Detector")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # aceita todas as origens
    allow_credentials=False,    # NÃO use True com allow_origins=["*"] (navegador bloqueará)
    allow_methods=["*"],        # GET, POST, PUT, DELETE...
    allow_headers=["*"],        # todos os headers
)

def extract_ip_from_forwarded(forwarded: str) -> str | None:
    # Forwarded: for=1.2.3.4;proto=http;by=...
    m = re.search(r'for=([^;,\s]+)', forwarded)
    if m:
        return m.group(1).strip('"')
    return None


def get_client_ip(request: Request) -> str:
    headers = request.headers

    # 1) X-Forwarded-For (padrão: client, proxy1, proxy2)
    xff = headers.get("x-forwarded-for")
    if xff:
        return xff.split(",")[0].strip()

    # 2) Outras headers comuns
    for h in ("x-real-ip", "cf-connecting-ip", "true-client-ip"):
        val = headers.get(h)
        if val:
            return val.split(",")[0].strip()

    # 3) Forwarded (RFC 7239)
    forwarded = headers.get("forwarded")
    if forwarded:
        ip = extract_ip_from_forwarded(forwarded)
        if ip:
            return ip

    # 4) Fallback para host informado pelo framework (endereço remoto da conexão)
    client = request.client
    if client:
        return client.host

    return "unknown"


@app.get("/ip")
async def ip(request: Request):
    client_ip = get_client_ip(request)
    return JSONResponse({"ip": client_ip})
    

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
