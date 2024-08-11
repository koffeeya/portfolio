import { writable } from "svelte/store";

export const theme = writable("spring");

export const activeCategory = writable("all")