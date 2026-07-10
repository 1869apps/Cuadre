# Cuadre - Versión Estática

**Cierra tu caja en 5 minutos.**

Esta es la versión 100% estática de Cuadre. No necesita Node.js ni servidor.
Son archivos HTML/CSS/JS que se sirven desde cualquier hosting estático o
se pueden envolver en una APK con Capacitor.

## Cómo usarla

### Opción 1: Probar localmente (más rápido)

1. Descargá y descomprimí este ZIP
2. Abrí la carpeta `cuadre-estatica` en una terminal
3. Si tenés Python instalado:
   ```
   python -m http.server 3000
   ```
   Después abrí http://localhost:3000 en el navegador
4. Si tenés Node.js:
   ```
   npx serve
   ```
   Te da una URL para abrir en el navegador

### Opción 2: Subir a un hosting estático

Podés subir el contenido de `cuadre-estatica/` a cualquiera de estos
hostings gratis:

- **Vercel** (https://vercel.com) - el más simple, conectá con GitHub
- **Cloudflare Pages** (https://pages.cloudflare.com) - el más generoso
- **Netlify** (https://netlify.com) - similar a Vercel
- **GitHub Pages** - gratis si tenés repo público

Subí los archivos tal cual están en esta carpeta. No necesita build,
no necesita configuración. Ya está todo compilado.

### Opción 3: Abrir directamente en el navegador

Podés hacer doble clic en `index.html` y se abre en tu navegador.
PERO: algunas funciones (como la navegación interna) pueden no funcionar
bien por restricciones de seguridad de los navegadores con el protocolo
`file://`. Recomendamos usar un server (Opción 1) o un hosting (Opción 2).

### Opción 4: Envolver en APK con Capacitor

Esta es la carpeta que usás como `webDir` en Capacitor:

```ts
// capacitor.config.ts
export default {
  webDir: 'cuadre-estatica',  // o la ruta donde pusiste esta carpeta
  appId: 'com.tuempresa.cuadre',
  appName: 'Cuadre',
}
```

Después:
```
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
npx cap add android
npx cap sync
npx cap open android
```

Desde Android Studio: Build → Generate Signed Bundle / APK.

## Usuarios precargados

| Usuario | Rol           | PIN  |
|---------|---------------|------|
| María   | Administrador | 1234 |
| Ana     | Cajera        | 0000 |
| Carlos  | Cajera        | 1111 |

## Datos

Todos los datos se guardan en el `localStorage` del navegador. Cada
navegador/dispositivo tiene su propio almacenamiento. No se envía nada
a ningún servidor.

## Notas técnicas

- Build generado con Next.js 16.1.3 en modo `output: "export"`
- 100% client-side (no requiere backend)
- Compatible con cualquier hosting estático
- Lista para envolver con Capacitor en APK
- Tamaño: ~2.5 MB

## Versión

Cuadre v1.0 · Hecho para los emprendedores de Cuba.
Tus datos viven en tu dispositivo.
