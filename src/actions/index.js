import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING
} from "./types";
import artworks from "../data/artworks";

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(paintingId) {
  return {
    type: DELETE_PAINTING,
    id: paintingId
  };
}
