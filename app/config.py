import os

class Config:
    PHOTON_URL = os.getenv(
        "PHOTON_URL",
        "http://172.16.3.253:2322"
    )

    DAWARICH_URL = os.getenv(
        "DAWARICH_URL",
        "http://172.16.3.254:3000"
    )
