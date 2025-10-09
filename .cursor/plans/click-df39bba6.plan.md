<!-- df39bba6-66df-4052-b116-02a88c90a9e5 3b5ccb71-fc9d-4ebe-b3b6-3019e8710942 -->
# Habilitar click-to-WhatsApp en Contacto

## Alcance

- Archivo: `src/components/Contact.tsx`
- Objetivo: Al hacer click en el número de teléfono y en el texto "WhatsApp disponible", abrir WhatsApp con mensaje predefinido.

## Detalles

- Usar el mismo número `56984413846` y mensaje predefinido que en `RequestForm.tsx`.
- Implementar función local `openWhatsApp()` que construye la URL `https://wa.me/56984413846?text=<mensaje>` y `window.open(..., '_blank')`.
- Cambiar:
  - El `<p>` del número `+56 9 8441 3846` por un elemento clickeable (`<button>` o `<a role="button">`) con `onClick={openWhatsApp}` y estilos de enlace.
  - En la línea de "WhatsApp disponible", envolver solo el texto "WhatsApp disponible" con un elemento clickeable que dispare `openWhatsApp`, conservando el punto verde animado.
- Accesibilidad: `aria-label="Abrir WhatsApp"`, `title="Escribir por WhatsApp"`, `className` con `cursor-pointer underline` en hover.

## Snippets esenciales

- Helper dentro del componente:
```tsx
const phoneNumber = '56984413846';
const message = encodeURIComponent('¡Hola! Vi esta pagina sobre los libros y me interesa recibir uno. ¿Podrías enviármelo por favor? 📖');
const openWhatsApp = () => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
};
```

- Reemplazo del número:
```tsx
<button onClick={openWhatsApp} aria-label="Abrir WhatsApp" title="Escribir por WhatsApp" className="font-source text-esperanza-600 underline hover:text-esperanza-800 cursor-pointer">
  +56 9 8441 3846
</button>
```

- Envolver "WhatsApp disponible":
```tsx
<p className="text-sm font-source text-esperanza-500 mt-1">
  <span className="inline-block w-2 h-2 bg-whatsapp-500 rounded-full animate-pulse"></span>
  &nbsp;&nbsp;
  <button onClick={openWhatsApp} aria-label="Abrir WhatsApp" title="Escribir por WhatsApp" className="underline hover:text-esperanza-800 cursor-pointer">
    WhatsApp disponible
  </button>
</p>
```


## Resultado

- Click en el número o en "WhatsApp disponible" abre WhatsApp en nueva pestaña con mensaje prellenado.

### To-dos

- [ ] Agregar helper openWhatsApp con número y mensaje
- [ ] Hacer clickeable el número de teléfono en Contact.tsx
- [ ] Hacer clickeable el texto “WhatsApp disponible”