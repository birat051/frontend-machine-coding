export interface I_Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  vehicles: string[];
  films: string[];
}

export interface I_Films {
  title: string;
}

export interface I_Info_ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: I_Character[];
}

export interface I_Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string; // Keeping it as a string since the original data is in string format
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[]; // Array of URLs
  films: string[]; // Array of URLs
  created: string; // ISO date string
  edited: string; // ISO date string
  url: string; // URL to the resource
}
