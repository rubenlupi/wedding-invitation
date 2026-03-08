# Instrucciones para agregar el sonido de apertura

Para que el sonido funcione, necesitas descargar el audio del video de YouTube y guardarlo aquí.

## Pasos:

1. **Descarga el audio del video:**
   - Ve a: https://www.youtube.com/watch?v=6djQUF7aPFk
   - Usa una herramienta como:
     - [yt-dlp](https://github.com/yt-dlp/yt-dlp) (recomendado)
     - Sitios web como y2mate.com o cualquier descargador de YouTube
2. **Si usas yt-dlp (desde la terminal):**

   ```bash
   # Instalar yt-dlp si no lo tienes
   brew install yt-dlp

   # Descargar solo el audio en MP3, empezando desde el segundo 12
   cd sounds
   yt-dlp -x --audio-format mp3 --external-downloader ffmpeg --external-downloader-args "ffmpeg_i:-ss 12" -o "envelope-open.%(ext)s" "https://www.youtube.com/watch?v=6djQUF7aPFk"
   ```

3. **Renombrar el archivo:**
   - Asegúrate de que el archivo se llame exactamente: `envelope-open.mp3`
   - Debe estar en la carpeta `sounds/`

4. **Recarga la página** y el sonido debería funcionar al abrir el sobre.

---

**Nota:** Si prefieres un sonido más corto, puedes editar el archivo MP3 con cualquier editor de audio (como Audacity) y recortar solo los primeros 2-3 segundos.
