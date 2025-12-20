#!/usr/bin/env python3
import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    print("Installazione di Pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "Pillow"])
    from PIL import Image

# Apri l'immagine PNG
img = Image.open("/Users/gdalmaso/projects/airisc/airisc-fe/public/uploads/small_logo_airisc_site_trasp_a9029032ba.png")

# Converti in RGBA se necessario
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Crea diverse dimensioni per il favicon (16x16, 32x32, 48x48)
sizes = [(16, 16), (32, 32), (48, 48)]
images = []
for size in sizes:
    resized = img.resize(size, Image.Resampling.LANCZOS)
    images.append(resized)

# Salva come ICO
images[0].save(
    "/Users/gdalmaso/projects/airisc/airisc-fe/public/favicon.ico",
    format='ICO',
    sizes=[(img.width, img.height) for img in images]
)

print("Favicon.ico creato con successo!")


