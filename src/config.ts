export const WHATSAPP = "5511998906767";
export const PHONE_LABEL = "11 99890-6767";

/** Endereço das aulas (exibido no rodapé e nos detalhes de cada curso). */
export const ADDRESS = {
  place: "Helbor Patteo Mogilar Skymall",
  street: "Rua Manoel de Oliveira, 269 — Vila Mogilar",
  rooms: "Torre 3, sala 414 e Torre 2, sala 416",
  city: "Mogi das Cruzes — SP",
};

const MAPS_QUERY = encodeURIComponent(`${ADDRESS.place}, Rua Manoel de Oliveira, 269, Mogi das Cruzes - SP`);

/** Abre o endereço no Google Maps. */
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
/** Abre o Google Maps já com a rota até a escola. */
export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
/** Mapa incorporado (iframe), não precisa de chave de API. */
export const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
